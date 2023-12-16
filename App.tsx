import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import PlayerList, { IPlayer } from './src/components/PlayerList';

export default function App() {

  const [players, setPlayers] = useState<IPlayer[]>([
    {
      id: 1,
      name: "Elias",
      points: 23,
      balance: 10
    },
    {
      id: 2,
      name: "Sean",
      points: 0,
      balance: -20
    },
    {
      id: 3,
      name: "Shu",
      points: 18,
      balance: 10
    },
  ])

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
