import { Text, View } from "react-native";
import PlayerList, { IPlayer } from "./PlayerList";
import GamesList, { IGame } from "./GamesList";
import { useState } from "react";
import { Modal } from "react-native-paper";
import { Formik } from "formik";
import PlayerEditingForm from "./PlayerEditingForm";
import generatePlayer from "../../util/defaultPlayer";
import { defaultRound } from "../../util/defaultRound";
import RoundEditingForm from "./RoundEditingForm";

export default function GameView(){
    const [players, setPlayers] = useState<IPlayer[]>([
        generatePlayer(1),
        generatePlayer(2),
        generatePlayer(3),
        generatePlayer(4),
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

    const [editingPlayer, setEditingPlayer] = useState<boolean>(false)
    const [playerToEdit, setPlayerToEdit] = useState<IPlayer | null>(null)
    
    const [editingRound, setEditingRound] = useState<boolean>(false)
    const [roundToEdit, setRoundToEdit] = useState<IGame | null>(null)

    const nextRoundID = games.length > 0 ? games[games.length - 1].id + 1 : 1

    function handleEditPlayer(player: IPlayer){
        setPlayerToEdit(player)
        setEditingPlayer(true)
    }

    function handleSavePlayerEdits(editedPlayer: IPlayer){

        const newPlayers = [...players].map((player) => {
            return editedPlayer.id === player.id ? editedPlayer : player
        })
        setPlayers(newPlayers)

        setEditingPlayer(false)
    }

    function handleAddRound(){
        setEditingRound(true)
    }

    return(
        <>
            <View style={{ width: "100%", backgroundColor: "white", marginTop: 20, padding: 15, borderRadius: 10 }}>
                <Text style={{width: "100%", fontWeight: "bold", fontSize: 20 , textAlign: "center"}}>Mahjong Counter App</Text>
            </View>
            <PlayerList players={players} editPlayer={handleEditPlayer}/>
            <GamesList players={players} games={games} addGame={()=>setEditingRound(true)}/>
            {playerToEdit &&
                <Formik
                initialValues={playerToEdit}
                onSubmit={()=>{}}
                enableReinitialize
                >
                    <Modal visible={editingPlayer} onDismiss={() => setEditingPlayer(false)} contentContainerStyle={{ backgroundColor: 'white', padding: 20 }}>
                        <PlayerEditingForm handleSubmit={handleSavePlayerEdits}/>
                    </Modal>
                </Formik>
            }
            <Formik
                initialValues={roundToEdit ?? defaultRound(nextRoundID)}
                onSubmit={() => { }}
                enableReinitialize
            >
                <Modal visible={editingRound} onDismiss={() => setEditingRound(false)} contentContainerStyle={{ backgroundColor: 'white', padding: 20 }}>
                    <RoundEditingForm handleSubmit={()=>{setEditingRound(false)}} players={players}/>
                </Modal>
            </Formik>
        </>
    )
}