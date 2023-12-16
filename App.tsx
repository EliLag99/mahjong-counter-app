import { Platform, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import GameView from './src/components/gameview/GameView';

export default function App() {

  return (
    <SafeAreaProvider style={styles.AndroidSafeArea}>
      <GameView/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    padding: 10,
    backgroundColor: "#BBB",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#999',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
