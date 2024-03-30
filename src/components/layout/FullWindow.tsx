import { useWindowDimensions } from 'react-native';
import { View } from 'react-native-windows';

const FullWindow: React.FC<React.PropsWithChildren> = ({ children }) => {
  const windowDimensions = useWindowDimensions();

  return (
    <View
      style={{
        display: 'flex',
        width: windowDimensions.width,
        height: windowDimensions.height,
      }}
    >
      {children}
    </View>
  );
};
export default FullWindow;
