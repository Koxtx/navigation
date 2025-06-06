import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#e6e8f5",
        },
        headerTitleStyle: {
          color: "blue",
        },
      }}
    >
      <Stack.Screen
        component={Screen1}
        name="Screen1"
        options={({ navigation }) => ({
          title: "Home",
          headerShown: false,
          // headerRight: () => (
          //   <Pressable
          //     onPress={() =>
          //       navigation.navigate("Screen2", {
          //         name: "John",
          //       })
          //     }
          //   >
          //     <AntDesign name="user" size={24} color="black" />
          //   </Pressable>
          // ),
        })}
      />
      <Stack.Screen
        component={Screen2}
        name="Screen2"
        options={({ navigation }) => {
          return {
            title: "Profile",
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <AntDesign name="leftcircle" size={24} color="black" />
              </Pressable>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}
