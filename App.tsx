import { useState } from 'react';
import { Platform, StyleSheet, Text, StatusBar, View, SafeAreaView } from 'react-native';
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
    {
      id: 4,
      name: "Harry",
      points: 10,
      balance: 0
    },
  ])

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Text style={{}}>Mahjong Counter App</Text>
      <PlayerList players={players}/>
    </SafeAreaView>
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
