import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import PlayerList from './src/components/PlayerList';

export default function App() {

  const [players, setPlayers] = useState(["Elias", "Shu", "Sean"])

  return (
    <View style={styles.container}>
      <Text>Mahjong Counter App</Text>
      <Text>Players</Text>
      <PlayerList players={players}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
