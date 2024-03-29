import { SafeAreaView, View, useWindowDimensions } from 'react-native-windows';
import Header from './src/components/layout/Header';
import colors from './src/styles/colors';
import WorkViewer from './src/components/layout/WorkViewer.tsx/WorkViewer';
import { CollectionProvider } from './src/contexts/CollectionContext';

const App = () => {
  const windowDimensions = useWindowDimensions();

  return (
    <CollectionProvider>
      <SafeAreaView
        style={{
          display: 'flex',
          width: windowDimensions.width,
          height: windowDimensions.height,
          backgroundColor: colors.background,
        }}
      >
        <Header />
        <View style={{ flexBasis: 0, flexGrow: 1 }}>
          <WorkViewer />
        </View>
      </SafeAreaView>
    </CollectionProvider>
  );
};

export default App;
