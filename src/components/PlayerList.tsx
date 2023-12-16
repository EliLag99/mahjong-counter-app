import { View } from "react-native"
import { Button, DataTable, Icon, Text } from "react-native-paper"

export interface IPlayer {
    id: number,
    name: string,
    points: number,
    balance: number
}

export interface IPlayerListProps {
    players: IPlayer[]
}


export default function PlayerList(props: IPlayerListProps){

    const {players} = props

    return(
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
                    <DataTable.Cell numeric><Button icon="human-edit"> </Button></DataTable.Cell>
                </DataTable.Row>
            ))}
        </DataTable>
    )
}