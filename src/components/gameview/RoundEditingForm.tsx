import { FormikProps, useFormikContext } from "formik";
import { IPlayer } from "./PlayerList";
import { Button, View } from "react-native";
import { IGame } from "./GamesList";
import DropDown from "react-native-paper-dropdown";
import { useState } from "react";

interface IEditingFormProps {
    handleSubmit: (player: IGame) => void
    players: IPlayer[]
}

export default function RoundEditingForm(props: IEditingFormProps) {
    const formik: FormikProps<IGame> = useFormikContext()

    const [showDropDown, setShowDropDown] = useState(false)

    const playerOptions = props.players.map((player) => ({
        label: player.name,
        value: player.id
    }))

    return (
        <View>
            <DropDown
                label="Winner"
                mode="outlined"
                value={formik.values.winnerId}
                list={playerOptions}
                setValue={(value) => formik.setFieldValue("winnerId", value)}
                visible={showDropDown}
                showDropDown={() => setShowDropDown(true)}
                onDismiss={() => setShowDropDown(false)}
            />
            <Button title="Submit" onPress={() => props.handleSubmit(formik.values)} />
        </View>
    )
}