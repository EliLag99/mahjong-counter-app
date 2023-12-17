import { IGame } from "../components/gameview/GamesList";

export const defaultRound: (id: number) => IGame = (id) => ({
    id: id,
    winnerId: undefined,
    points: undefined,
    loserId: undefined
})