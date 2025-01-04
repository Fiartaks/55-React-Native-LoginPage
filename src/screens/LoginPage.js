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
import { Loading, CustomTextInput, CustomButton } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setEmail,setPassword,setIsLoading,setLogin } from "../redux/userSlice";

const LoginPage = ({ navigation }) => {
 // const [email, setEmail] = useState("");
 // const [password, setPassword] = useState("");
 // const [isLoading, setIsLoading] = useState(false);

  //userSlice icerisindeki verilerin okunmasi
  const{email, password, isLoading}=useSelector((state)=>state.user) 


  //userSlice icersinde reducer yapilarini kullanma veya veri gonderme
  const dispatch =useDispatch()

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <Image
        source={require("../../assets/images/unlock.png")}
        style={styles.image}
      />
      <CustomTextInput
        title="Email"
        isSecureText={false}
        handleOnChangeText={(text)=>dispatch(setEmail(text))}
        handleValue={email}
        handlePlaceHolder="Enter Your Email"
      />
      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleOnChangeText={(password)=>dispatch(setPassword(password))}
        handleValue={password}
        handlePlaceHolder="Enter Your Password"
      />
      <CustomButton
        buttonText="Login"
        setWidth="80%"
        handleOnPress={() => dispatch(setLogin())}
        buttonColor="blue"
        pressedButtonColor="gray"
      />
      <CustomButton
        buttonText="Sign Up"
        setWidth="30%"
        handleOnPress={() => navigation.navigate("Signup")}
        buttonColor="gray"
        pressedButtonColor="Lightgray"
      />

      {isLoading ? (
        <Loading changeIsLoading={() => dispatch(setIsLoading(false))} />
      ) : null}
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightpink",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "80%",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 30,
    color: "white",
  },
  signupButton: {
    borderWidth: 1,
    width: "30%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
