import { View } from "react-native"
import { Button, DataTable, Text } from "react-native-paper"

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
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>Player</DataTable.Title>
                <DataTable.Title numeric>Points</DataTable.Title>
                <DataTable.Title numeric>Balance</DataTable.Title>
            </DataTable.Header>

            {players.map((player) => (
                <DataTable.Row key={player.id}>
                    <DataTable.Cell>{player.name}</DataTable.Cell>
                    <DataTable.Cell numeric>{player.points}</DataTable.Cell>
                    <DataTable.Cell numeric>{player.balance}</DataTable.Cell>
                </DataTable.Row>
            ))}
        </DataTable>
    )
}