import { Button, DataTable, IconButton } from "react-native-paper"
import { IPlayer } from "./PlayerList"

export interface IGame {
    id: number,
    winnerId: number | undefined,
    points: number | undefined,
    loserId: number | undefined
}

export interface IGamesListProps {
    games: IGame[]
    players: IPlayer[]
    handleAddRound:()=>void
    handleDeleteRound:(id: number)=>void
}


export default function GamesList(props: IGamesListProps) {

    const { games, players } = props

    return (
        <DataTable style={{ width: "100%", backgroundColor: "white", marginTop: 10, borderRadius: 10 }}>
            <DataTable.Header>
                <DataTable.Title>Round</DataTable.Title>
                <DataTable.Title numeric>{players[0].name}</DataTable.Title>
                <DataTable.Title numeric>{players[1].name}</DataTable.Title>
                <DataTable.Title numeric>{players[2].name}</DataTable.Title>
                <DataTable.Title numeric>{players[3].name}</DataTable.Title>
                <DataTable.Title> </DataTable.Title>
                <DataTable.Title> </DataTable.Title>
            </DataTable.Header>

            {games.map((game) => {
                if(game.points === undefined) return
                const balanceMultiplier = 1 //ASSUMES 1 dollar per point
                const winningsPerPlayer = Math.pow(2, game.loserId ? game.points - 1 : game.points) * balanceMultiplier
                const winnerBalance = game.loserId ? winningsPerPlayer * 4 : winningsPerPlayer * 3
                const loserBalance = -winningsPerPlayer
                const gameBalance = players.map((player) => {
                    let playerBalance
                    if (player.id === game.winnerId) {
                        playerBalance = winnerBalance
                    } else if (game.loserId && player.id === game.loserId) {
                        playerBalance = loserBalance * 2
                    } else {
                        playerBalance = loserBalance
                    }
                    return (playerBalance)
                })
                return (
                    <DataTable.Row key={game.id}>
                        <DataTable.Cell>{game.id}</DataTable.Cell>
                        <DataTable.Cell numeric>{gameBalance[0]}</DataTable.Cell>
                        <DataTable.Cell numeric>{gameBalance[1]}</DataTable.Cell>
                        <DataTable.Cell numeric>{gameBalance[2]}</DataTable.Cell>
                        <DataTable.Cell numeric>{gameBalance[3]}</DataTable.Cell>
                        <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                            <IconButton icon="note-edit" />
                        </DataTable.Cell>
                        <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                            <IconButton icon="delete" onPress={()=>props.handleDeleteRound(game.id)}/>
                        </DataTable.Cell>
                    </DataTable.Row>
                )
            })}
            <Button onPress={props.handleAddRound}>Log New Round</Button>
        </DataTable>
    )
}