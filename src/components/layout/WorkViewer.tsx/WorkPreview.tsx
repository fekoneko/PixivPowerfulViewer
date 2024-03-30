import { memo } from 'react';
import { View } from 'react-native';

const WorkPreview = () => {
  return (
    <View
      style={{
        flexBasis: 0,
        flexGrow: 5,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: '#ffffff44',
        borderRadius: 5,
      }}
    ></View>
  );
};
export default memo(WorkPreview);
