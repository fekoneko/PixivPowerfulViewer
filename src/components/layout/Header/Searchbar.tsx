import { TextInput } from 'react-native-windows';
import colors from '../../../styles/colors';

const Searchbar = () => {
  return (
    <TextInput
      style={{
        height: 40,
        padding: 9.5,
        borderColor: 'white',
        borderRadius: 5,
        backgroundColor: 'transparent',
        color: colors.textAccent,
      }}
      placeholderTextColor={colors.textAccent}
      placeholder="Search tags"
    />
  );
};

export default Searchbar;
