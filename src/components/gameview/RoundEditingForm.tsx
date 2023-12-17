import { FormikProps, useFormikContext } from "formik";
import { IPlayer } from "./PlayerList";
import { Button, View } from "react-native";
import { IGame } from "./GamesList";
import DropDown from "react-native-paper-dropdown";
import { useState } from "react";
import { TextInput } from "react-native-paper";

interface IEditingFormProps {
    handleSubmit: (round: IGame) => void
    players: IPlayer[]
}

export default function RoundEditingForm(props: IEditingFormProps) {
    const formik: FormikProps<IGame> = useFormikContext()

    const [showWinnerDropDown, setShowWinnerDropDown] = useState(false)
    const [showLoserDropDown, setShowLoserDropDown] = useState(false)

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
                visible={showWinnerDropDown}
                showDropDown={() => setShowWinnerDropDown(true)}
                onDismiss={() => setShowWinnerDropDown(false)}
            />
            <TextInput
                label="Points"
                value={String(formik.values.points ?? "")}
                onChange={(e: any) => formik.setFieldValue("points", Number(e.nativeEvent.text))}
            />
            <DropDown
                label="Loser"
                mode="outlined"
                value={formik.values.loserId}
                list={playerOptions}
                setValue={(value) => formik.setFieldValue("loserId", value)}
                visible={showLoserDropDown}
                showDropDown={() => setShowLoserDropDown(true)}
                onDismiss={() => setShowLoserDropDown(false)}
            />
            <Button title="Submit" onPress={() => props.handleSubmit(formik.values)} />
        </View>
    )
}