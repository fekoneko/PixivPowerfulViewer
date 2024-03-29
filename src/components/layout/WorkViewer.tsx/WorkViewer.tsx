import { View, useWindowDimensions } from 'react-native-windows';
import WorkSelector from './WorkSelector';
import WorkPreview from './WorkPreview';

const WorkViewer = () => {
  const windowDimensions = useWindowDimensions();

  return (
    <View
      style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: windowDimensions.width / 10,
      }}
    >
      <WorkSelector />
      <WorkPreview />
    </View>
  );
};
export default WorkViewer;
