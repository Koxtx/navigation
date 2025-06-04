import { StyleSheet, View, Text } from "react-native";

export default function Screen2({ route }) {
  const { name } = route.params;

  return (
    <View style={styles.container}>
      <Text>welcome {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop:10,
  },
});
