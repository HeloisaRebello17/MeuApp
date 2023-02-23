import { View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../ultis/styles";

export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.font} >Home Screen Happy 😊</Text>
        </View>
    )
}