import { TextInput } from 'react-native-windows';
import colors from '../../styles/colors';

const Searchbar = () => {
  return (
    <TextInput
      style={{
        borderRadius: 5,
        borderColor: 'white',
        backgroundColor: 'transparent',
        color: colors.textAccent,
      }}
      placeholderTextColor={colors.textAccent}
      placeholder="Search tags"
    />
  );
};

export default Searchbar;
