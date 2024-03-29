import { useContext } from 'react';
import CollectionContext from '../../contexts/CollectionContext';
import { Button } from 'react-native-windows';
import { pickDirectory } from 'react-native-document-picker';

const CollectionSelector = () => {
  const { collection, loadCollection } = useContext(CollectionContext);

  const handleSelect = async () => {
    const pickedDirectory = await pickDirectory();
    if (!pickedDirectory) return;

    loadCollection(pickedDirectory.uri);
  };

  return (
    <Button
      title={collection?.name ?? 'Select collection'}
      onPress={handleSelect}
    />
  );
};
export default CollectionSelector;
