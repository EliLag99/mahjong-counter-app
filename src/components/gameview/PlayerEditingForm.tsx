import { FormikProps, useFormikContext } from "formik";
import { IPlayer } from "./PlayerList";
import { Button, View } from "react-native";
import { TextInput } from "react-native-paper";

interface IEditingFormProps {
    handleSubmit: (player: IPlayer) => void
}

export default function PlayerEditingForm(props: IEditingFormProps) {
    const formik: FormikProps<IPlayer> = useFormikContext()

    return (
        <View>
            <TextInput
                label="Name"
                value={formik.values.name}
                onChange={(e: any) => formik.setFieldValue("name", e.nativeEvent.text)}
            />
            <TextInput
                label="Points"
                value={String(formik.values.points)}
                onChange={(e: any) => formik.setFieldValue("points", Number(e.nativeEvent.text))}
            />
            <TextInput
                label="Balance"
                value={String(formik.values.balance)}
                onChange={(e: any) => formik.setFieldValue("balance", Number(e.nativeEvent.text))}
            />
            <Button title="Submit" onPress={() => props.handleSubmit(formik.values)} />
        </View>
    )
}