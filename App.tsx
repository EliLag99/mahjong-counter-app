import { useState } from 'react';
import { Platform, StyleSheet, Text, StatusBar, View, SafeAreaView } from 'react-native';
import PlayerList, { IPlayer } from './src/components/PlayerList';
import GamesList, { IGame } from './src/components/GamesList';

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

  const [games, setGames] = useState<IGame[]>([
    {
      id: 1,
      winnerId: 1,
      points: 3,
      loserId: null
    },
    {
      id: 2,
      winnerId: 1,
      points: 1,
      loserId: 3
    }
  ])

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={{ width: "100%", backgroundColor: "white", marginTop: 20, padding: 15, borderRadius: 10 }}>
        <Text style={{width: "100%", fontWeight: "bold", fontSize: 20 , textAlign: "center"}}>Mahjong Counter App</Text>
      </View>
      <PlayerList players={players}/>
      <GamesList players={players} games={games}/>
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
