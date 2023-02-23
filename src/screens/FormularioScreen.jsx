import { Button, Text, View } from "react-native"
import { TextInput } from "react-native-paper"

export const FormularioScreen = ({ navigation }) => {
  return (
    <View style={StyleSheet.formulario}>
      <Text> Formulário</Text>

      <TextInput label="Email"></TextInput>
      <TextInput label="Senha"></TextInput>
      <Button title='enviar' />
      <Button title="volte" onPress={() => navigation.navigate("HomeScreen2")} />
    </View>
  )
}