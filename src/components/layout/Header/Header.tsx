import { Text, View } from 'react-native-windows';
import Searchbar from './Searchbar';
import colors from '../../../styles/colors';
import CollectionSelector from './CollectionSelector';

const Header = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: colors.primary,
        paddingHorizontal: '10%',
        paddingVertical: 10,
      }}
    >
      <Text
        style={{
          flexGrow: 3,
          fontWeight: 'bold',
          fontSize: 25,
          color: colors.textAccent,
        }}
      >
        Pixiv Powerful Viewer
      </Text>
      <CollectionSelector />
      <View style={{ flexGrow: 2 }}>
        <Searchbar />
      </View>
    </View>
  );
};
export default Header;
