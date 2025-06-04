import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import Screen1 from "../screens/Screen1";
import Screen7 from "../screens/Screen7";
import Screen3 from "../screens/Screen3";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const Drawer = createDrawerNavigator();


function CustomDrawerContent(prop) {
  return (
    <DrawerContentScrollView {...prop}>
      <DrawerItemList {...prop} />
      <DrawerItem
        label="Logout"
        onPress={() => console.log("logout")}
        icon={() => <MaterialIcons name="logout" size={24} color="black" />}
      />
    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(prop) => <CustomDrawerContent {...prop} />}
    >
      <Drawer.Group
        screenOptions={({ navigation }) => ({
          headerTitleAlign: "center",
          headerLeft: () => (
            <Pressable
              style={{ marginLeft: 16 }}
              onPress={() => navigation.openDrawer()}
            >
              <AntDesign name="menu-fold" size={24} color={"black"} />
            </Pressable>
          ),
          swipeEdgeWith: 100,
          swipeMinDistance: 50,
        })}
      >
        <Drawer.Screen
          name="Home"
          component={Screen1}
          options={{
            drawerIcon: ({ color }) => (
              <AntDesign name="home" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Notification"
          component={Screen7}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="notifications" size={24} color={color} />
            ),
          }}
        />
      </Drawer.Group>

      <Drawer.Screen
        name="Settings"
        component={Screen3}
        initialParams={{ email: "" }}
      />
    </Drawer.Navigator>
  );
}