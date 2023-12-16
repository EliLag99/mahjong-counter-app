import { IGame } from "../components/gameview/GamesList";

export const defaultRound: (id: number) => IGame = (id) => ({
    id: id,
    winnerId: null,
    points: null,
    loserId: null
})