import { Text, View, useWindowDimensions } from 'react-native-windows';
import Searchbar from './Searchbar';
import colors from '../../styles/colors';

const Header = () => {
  const windowDimensions = useWindowDimensions();

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.primary,
        paddingHorizontal: windowDimensions.width / 10,
        paddingVertical: 10,
      }}
    >
      <Text style={{ flexGrow: 3, fontWeight: 'bold', fontSize: 25, color: colors.textAccent }}>
        Pixiv Powerful Viewer
      </Text>
      <View style={{ flexGrow: 2 }}>
        <Searchbar />
      </View>
    </View>
  );
};
export default Header;
