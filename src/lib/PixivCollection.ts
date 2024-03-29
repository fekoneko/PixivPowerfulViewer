import { ReadDirResItemT, readDir } from '@dr.pogodin/react-native-fs';

export type WorkType = 'artwork' | 'ugoira' | 'manga' | 'novel';

export interface WorkAsset {
  name: string;
  path: string;
  size: number;
}

export interface Work {
  id?: number;
  userId?: number;
  userName: string;
  // type: workType;
  title: string;
  // description: number;
  assets?: WorkAsset[];
}

export default class PixivCollection {
  readonly collectionPath: string;
  private worksPromise: Promise<Work[]>;

  constructor(collectionPath: string) {
    this.collectionPath = collectionPath;
    this.worksPromise = this.getWorksFromStorage();
  }

  public getAllWorks() {
    return this.worksPromise;
  }

  private async getWorksFromStorage() {
    return new Promise<Work[]>(async (resolveWorks, rejectWorks) => {
      // <collectionPath> \ <...userDirectories>
      const userDirectories = await readDir(this.collectionPath).catch(
        rejectWorks,
      );
      if (!userDirectories) return [];

      // <collectionPath> \ <...userDirectories> \ <...allUsersWorkDirectories>
      const allUsersWorkDirectories = (
        await Promise.all(
          userDirectories.map((userDirectory) => {
            return readDir(userDirectory.path).catch(() => undefined);
          }),
        )
      ).filter((directory) => directory !== undefined) as ReadDirResItemT[][];

      // <collectionPath> \ <...userDirectories> \ <...allUsersWorkDirectories> \ <...workAssets>
      const works = (
        await Promise.all(
          allUsersWorkDirectories.flatMap(
            (userWorkDirectories, userDirectoryIndex) =>
              userWorkDirectories.map((userWorkDirectory) =>
                this.parseWork(
                  userWorkDirectory,
                  userDirectories[userDirectoryIndex],
                ),
              ),
          ),
        )
      ).filter((work) => work !== undefined) as Work[];

      resolveWorks(works);
    });
  }

  private async parseWork(
    workDirectory: ReadDirResItemT,
    userDirectory: ReadDirResItemT,
  ) {
    const rawAssets = await readDir(workDirectory.path).catch(() => undefined);
    if (!rawAssets) return undefined;

    const assets: WorkAsset[] = rawAssets.map((rawAsset) => ({
      name: rawAsset.name,
      path: rawAsset.path,
      size: rawAsset.size,
    }));
    const [title, id] = this.extractNameAndId(workDirectory.name);
    const [userName, userId] = this.extractNameAndId(userDirectory.name);

    const work: Work = { id, userId, userName, title, assets };
    return work;
  }

  private extractNameAndId(string: string): [name: string, id?: number] {
    // Format of given string: '<title> (<id>)'
    const indexOfFirstParentheses = string.lastIndexOf('(');
    const indexOfLastParentheses = string.lastIndexOf(')');
    if (
      indexOfFirstParentheses === -1 ||
      indexOfFirstParentheses >= indexOfLastParentheses
    )
      return [string, undefined];

    const name = string.substring(0, indexOfFirstParentheses).trim();
    const id = +string
      .substring(indexOfFirstParentheses + 1, indexOfLastParentheses)
      .trim();
    return [name, id];
  }
}
