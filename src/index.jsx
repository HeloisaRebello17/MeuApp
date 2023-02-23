import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FormularioScreen } from "./screens/FormularioScreen";
import HomeScreen from "./screens/HomeScreen";
import ModalScreen from "./screens/ModalScreen";
import SplashScreen from "./screens/SplashScreen";



const Stack = createNativeStackNavigator();
export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MBTNav" component={MBTNavigation} />
        <Stack.Screen name="Formulário" component={FormularioScreen} />
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const MBT = createMaterialBottomTabNavigator();
function MBTNavigation() {
  return (
    <MBT.Navigator>
      <MBT.Screen name="HomeScreen" component={HomeScreen} />
      <MBT.Screen name="HomeScreen2" component={SplashScreen} />
      <MBT.Screen name="HomeScreen3" component={FormularioScreen} />
      <MBT.Screen name="HomeScreen4" component={ModalScreen} />
    </MBT.Navigator>
  );
}