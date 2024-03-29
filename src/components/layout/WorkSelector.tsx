// import { useMemo } from 'react';
import { Button, ScrollView } from 'react-native-windows';
import PixivCollection from '../../lib/PixivCollection';
import { pickDirectory } from 'react-native-document-picker';

const WorkSelector = () => {
  // const pixivCollection = useMemo(
  //   () => new PixivCollection('C:\\Andrew\\Just For Test'),
  //   [],
  // );

  return (
    <ScrollView style={{ flexGrow: 1, borderWidth: 1 }}>
      <Button
        title="Get"
        onPress={() => {
          pickDirectory().then((result) => {
            if (!result) return;
            const pixivCollection = new PixivCollection(result.uri);
            pixivCollection
              .getAllWorks()
              .then((result) => {
                console.log(result);
              })
              .catch((reason) => console.log(reason.message));
          });
        }}
      />
    </ScrollView>
  );
};
export default WorkSelector;
