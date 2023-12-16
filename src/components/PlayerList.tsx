import { View } from "react-native"
import { Button, Text } from "react-native-paper"


export default function PlayerList(props: any){

    const {players} = props

    return(
        <View>
        {players.map((player: string) => 
            <Text>{player}</Text>
        )}
        <Button onPress={props.handleAddPlayer}>
            Add Player
        </Button>
        </View>
    )
}