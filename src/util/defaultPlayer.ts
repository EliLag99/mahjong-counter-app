import { IPlayer } from "../components/gameview/PlayerList";

export default function generatePlayer(id: number): IPlayer{
    return({
        id: id,
        name: "Player " + id,
        points: 0,
        balance: 0
    })
}