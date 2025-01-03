import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import Loading from "../components/Loading";

const LoginPage = ({navigation}) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/unlock.png")}
        style={styles.image}
      />
      <Text style={styles.welcome}>Welcome {result}</Text>
      <Text>Name</Text>
      <TextInput
        inputMode="email"
        placeholder="Enter your Email"
        onChangeText={setName}
        style={styles.textInputStyle}
      />

      <Text>Email</Text>
      <TextInput
        secureTextEntry={true}
        placeholder="Enter your last name"
        onChangeText={setLastName}
        style={styles.textInputStyle}
      />

      <Pressable
        onPress={() => setIsLoading(true)}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "gray" : "blue",
          },
          styles.button,
        ]}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      //!ikinci buton

      <Pressable
        onPress={() => navigation.navigate('SignUp')}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "gray" : "lightgray",
            marginTop:50,
          },
          styles.signupButton
        ]}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>



      {isLoading ? (
        <Loading changeIsLoading={() => setIsLoading(false)} />
      ) : null}
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#67678768",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputStyle: {
    borderWidth: 1,
    width: "80%",
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: "center",
    color: "blue",
  },
  button: {
    borderWidth: 1,
    width: "80%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 26,
  },
  signupButton: {
    borderWidth: 1,
    width: "30%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  }
});
