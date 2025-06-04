import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import ButtomtabNavigator from "./navigation/ButtomtabNavigator";
import TopbarNavigator from "./navigation/TopbarNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DrawerNavigator from "./navigation/DrawerNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerNavigator />
        {/* <TopbarNavigator /> */}
        {/* <StackNavigator /> */}
        {/* <ButtomtabNavigator /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
