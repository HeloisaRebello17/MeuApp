import { Button, Image, View } from "react-native";

import { styles } from "../ultis/styles";


export default function SplashScreen({ navigation }) {
  setTimeout(() => {
    navigation.navigate("MBTNav");
  }, 2000);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://picsum.photos/200/200" }}
        style={styles.imgLogo}
      ></Image>
      <Button title="Clique aqui" onPress={()=> navigation.navigate("HomeScreen3")} style={styles.buttonSplash} >App Uber Revolucionário</Button>
    </View>
  );
}