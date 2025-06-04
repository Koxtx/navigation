import { StyleSheet, View, Text } from "react-native";

export default function Screen5() {
    console.log("screen5");
    
  return (
    <View style={styles.container}>
      <Text>Screen5</Text>
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
