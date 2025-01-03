import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Pressable,
} from "react-native";
const Loading = ({ changeIsLoading }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => changeIsLoading()}
        style={[{}, styles.closeButtonContainer]}
      >
        <Text style={styles.closeButton}>X</Text>
      </Pressable>
      <ActivityIndicator size={"large"} color={"blue"} />
      <Text style={styles.loginText}>Loading...</Text>
    </View>
  );
};
export default Loading;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",

    backgroundColor: "tomato",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
    marginTop: 20,
  },
  closeButtonContainer: {
    backgroundColor: "black",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 50,
    right: 30,
  },
  closeButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
