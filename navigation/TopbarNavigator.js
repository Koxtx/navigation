import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen4 from "../screens/Screen4";
import Screen5 from "../screens/Screen5";
import Screen6 from "../screens/Screen6";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

export default function TopbarNavigator() {
  const inset = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingTop: inset.top,
        },
        tabBarPressColor: "violet",
        tabBarAndroidRipple: { borderless: false },
        tabBarIndicatorStyle: {
          backgroundColor: "violet",
        },
        lazy: true,
        lazyPreloadDistance: 1,
        // swipeEnabled: false,
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "grey",
        tabBarGap: 40,
        tabBarScrollEnabled: true,
      }}
    >
      <Tab.Screen component={Screen4} name="Screen4" />
      <Tab.Screen component={Screen5} name="Screen5" />
      <Tab.Screen component={Screen6} name="Screen6" />
    </Tab.Navigator>
  );
}
