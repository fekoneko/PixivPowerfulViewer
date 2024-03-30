import { SafeAreaView, View } from 'react-native-windows';
import Header from './src/components/layout/Header/Header';
import colors from './src/styles/colors';
import WorkViewer from './src/components/layout/WorkViewer.tsx/WorkViewer';
import { CollectionProvider } from './src/contexts/CollectionContext';
import FullWindow from './src/components/layout/FullWindow';

const App = () => {
  return (
    <CollectionProvider>
      <FullWindow>
        <SafeAreaView
          style={{
            flexGrow: 1,
            display: 'flex',
            backgroundColor: colors.background,
          }}
        >
          <Header />
          <View style={{ flexBasis: 0, flexGrow: 1 }}>
            <WorkViewer />
          </View>
        </SafeAreaView>
      </FullWindow>
    </CollectionProvider>
  );
};

export default App;
