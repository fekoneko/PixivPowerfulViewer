import { SafeAreaView, View, useWindowDimensions } from 'react-native-windows';
import Header from './src/components/layout/Header';
import colors from './src/styles/colors';
import WorkPreview from './src/components/layout/WorkPreview';
import WorkSelector from './src/components/layout/WorkSelector';

const App = () => {
  const windowDimensions = useWindowDimensions();

  return (
    <SafeAreaView
      style={{
        display: 'flex',
        width: windowDimensions.width,
        height: windowDimensions.height,
        backgroundColor: colors.background,
      }}
    >
      <Header />
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
    </SafeAreaView>
  );
};

export default App;
