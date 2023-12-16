import { useState } from "react"
import { View } from "react-native"
import { Button, DataTable, Icon, IconButton, Modal, Text, TextInput } from "react-native-paper"

export interface IPlayer {
    id: number,
    name: string,
    points: number,
    balance: number
}

export interface IPlayerListProps {
    players: IPlayer[],
    editPlayer: (player: IPlayer) => void
}


export default function PlayerList(props: IPlayerListProps){

    const {players, editPlayer} = props

    return(
        <>
            <DataTable style={{width: "100%", backgroundColor: "white", marginTop: 10, borderRadius: 10}}>
                <DataTable.Header>
                    <DataTable.Title>Player</DataTable.Title>
                    <DataTable.Title numeric>Points</DataTable.Title>
                    <DataTable.Title numeric>Balance</DataTable.Title>
                    <DataTable.Title> </DataTable.Title>
                </DataTable.Header>

                {players.map((player) => (
                    <DataTable.Row key={player.id}>
                        <DataTable.Cell>{player.name}</DataTable.Cell>
                        <DataTable.Cell numeric>{player.points}</DataTable.Cell>
                        <DataTable.Cell numeric>{player.balance}</DataTable.Cell>
                        <DataTable.Cell style={{justifyContent: "center"}}>
                                <IconButton icon="human-edit" onPress={()=>editPlayer(player)}/>
                        </DataTable.Cell>
                    </DataTable.Row>
                ))}
            </DataTable>
        </>
    )
}