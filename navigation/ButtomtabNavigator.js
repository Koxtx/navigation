import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "../screens/Screen1";
import Screen3 from "../screens/Screen3";
import AntDesign from "@expo/vector-icons/AntDesign";
import TopbarNavigator from "./TopbarNavigator";
import StackNavigator from "./StackNavigator";

const Tab = createBottomTabNavigator();

export default function ButtomtabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#e6e8f5",
        },
        headerTitleStyle: {
          color: "blue",
        },
        tabBarInactiveTintColor: "grey",
        tabBarActiveTintColor: "blue",
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        component={StackNavigator}
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        component={Screen3}
        name="Settings"
        initialParams={{ email: "" }}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="setting" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        component={TopbarNavigator}
        name="Articles"
        initialParams={{ email: "" }}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="shoppingcart" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
