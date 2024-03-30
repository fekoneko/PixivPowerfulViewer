import { SafeAreaView, View } from 'react-native-windows';
import Header from './src/components/layout/Header/Header';
import colors from './src/styles/colors';
import WorkViewer from './src/components/layout/WorkViewer.tsx/WorkViewer';
import { CollectionProvider } from './src/contexts/CollectionContext';

const App = () => {
  return (
    <CollectionProvider>
      <SafeAreaView
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
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
