import { StyleSheet, View, Text } from "react-native";

export default function Screen6() {
  console.log("screen6");

  return (
    <View style={styles.container}>
      <Text>Screen6</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 10,
  },
});
