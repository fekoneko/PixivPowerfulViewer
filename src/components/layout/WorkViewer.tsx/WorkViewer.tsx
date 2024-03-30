import { View } from 'react-native-windows';
import WorkList from './WorkList';
import WorkPreview from './WorkPreview';

const WorkViewer = () => {
  return (
    <View
      style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        paddingHorizontal: '10%',
      }}
    >
      <WorkList />
      <WorkPreview />
    </View>
  );
};
export default WorkViewer;
