import { memo } from 'react';
import { View } from 'react-native';

const WorkPreview = () => {
  return (
    <View
      style={{
        flexBasis: 0,
        flexGrow: 5,
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
      }}
    ></View>
  );
};
export default memo(WorkPreview);
