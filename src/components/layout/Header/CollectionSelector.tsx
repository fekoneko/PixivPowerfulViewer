import { useContext } from 'react';
import CollectionContext from '../../../contexts/CollectionContext';
import { Button, View } from 'react-native-windows';
import { pickDirectory } from 'react-native-document-picker';

const CollectionSelector = () => {
  const { collection, loadCollection } = useContext(CollectionContext);

  const handleSelect = async () => {
    const pickedDirectory = await pickDirectory();
    if (!pickedDirectory?.uri) return;

    loadCollection(pickedDirectory.uri);
  };

  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 5,
      }}
    >
      <Button
        title={collection?.name ?? 'Select collection'}
        onPress={handleSelect}
      />
    </View>
  );
};
export default CollectionSelector;
