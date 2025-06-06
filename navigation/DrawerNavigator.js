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
import { Image, Pressable } from "react-native";
import ButtomtabNavigator from "./ButtomtabNavigator";

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
          name="Navigation"
          component={ButtomtabNavigator}
          options={({ navigation }) => ({
            title: "",
            // headerTitle: () => (
            //   <Image
            //     source={require("../assets/icon.png")}
            //     style={{ width: 40, height: 40 }}
            //   />
            // ),
            drawerLabel: "Home",
            drawerIcon: ({ color }) => (
              <AntDesign name="home" size={24} color={color} />
            ),
            headerRight: () => (
              <Pressable
                style={{ marginRight: 16 }}
                onPress={() =>
                  navigation.navigate("Navigation", {
                    screen: "Home",
                    params: {
                      screen: "Screen2",
                      params: {
                        name: "John",
                      },
                    },
                  })
                }
              >
                <AntDesign name="user" size={24} color="black" />
              </Pressable>
            ),
          })}
        />
        <Drawer.Screen
          name="Notification"
          component={Screen7}
          options={{
            title: "",
            drawerLabel: "Notifications",
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
