import { StyleSheet, View, Text } from "react-native";

export default function Screen3({ route }) {
  const { email } = route.params;
  return (
    <View style={styles.container}>
      <Text>Settings:{email}</Text>
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
