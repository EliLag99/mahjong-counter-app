import { Text, View } from "react-native";
import PlayerList, { IPlayer } from "./PlayerList";
import GamesList, { IGame } from "./GamesList";
import { useState } from "react";
import { Modal } from "react-native-paper";
import { Formik } from "formik";
import PlayerEditingForm from "./PlayerEditingForm";
import generatePlayer from "../../util/defaultPlayer";

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

    function editPlayer(player: IPlayer){
        setPlayerToEdit(player)
        setEditingPlayer(true)
    }

    function handleSaveEdits(editedPlayer: IPlayer){

        const newPlayers = [...players].map((player) => {
            return editedPlayer.id === player.id ? editedPlayer : player
        })
        console.log(newPlayers)
        setPlayers(newPlayers)

        setEditingPlayer(false)
    }

    return(
        <>
            <View style={{ width: "100%", backgroundColor: "white", marginTop: 20, padding: 15, borderRadius: 10 }}>
                <Text style={{width: "100%", fontWeight: "bold", fontSize: 20 , textAlign: "center"}}>Mahjong Counter App</Text>
            </View>
            <PlayerList players={players} editPlayer={editPlayer}/>
            <GamesList players={players} games={games} />
            {playerToEdit &&
                <Formik
                initialValues={playerToEdit}
                onSubmit={()=>{}}
                enableReinitialize
                >
                    <Modal visible={editingPlayer} onDismiss={() => setEditingPlayer(false)} contentContainerStyle={{ backgroundColor: 'white', padding: 20 }}>
                        <PlayerEditingForm handleSubmit={handleSaveEdits}/>
                    </Modal>
                </Formik>
            }
        </>
    )
}