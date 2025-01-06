import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from "react-native";
import { CustomTextInput, CustomButton, Loading } from "../components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/userSlice";

const SignupPage = ({navigation}) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const {isLoading} =useSelector(state=>state.user)
  const handleRegister = () => {
    dispatch(register({ email, password }));
  };

   if(isLoading){
    return <Loading />
   }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Image style={styles.image} source={require('../../assets/images/signUpIcon.png')} />
        <Text style={styles.signUp}>Sign Up</Text>
      </View>

      <View style={styles.textInputContainer}>
        <CustomTextInput
          title="Name"
          isSecureText={false}
          handleOnChangeText={setName}
          handleValue={name}
          handlePlaceHolder="Enter Your Name"
        />
        <CustomTextInput
          title="EmailQ"
          isSecureText={false}
          handleOnChangeText={setEmail}
          handleValue={email}
          handlePlaceHolder="Enter Your Email"
        />
        <CustomTextInput
          title="Password"
          isSecureText={true}
          handleOnChangeText={setPassword}
          handleValue={password}
          handlePlaceHolder="Create Your Password"
        />
      </View>
      <View style={styles.signUpOptions}>
        <CustomButton 
        buttonText='Sign Up'
        setWidth='80%'
        buttonColor='blue'
        pressedButtonColor='lightgray'
        handleOnPress={handleRegister}
        />
        <Pressable onPress={()=>navigation.navigate('LoginPage')}>
          <Text style={{fontWeight:'bold'}}>Already have an account? Login</Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
};
export default SignupPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightpink",
  },
  signUp: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 30,
    color: "white",
  },
 
  title: {
    flex: 2,
    width:'100%',
    alignItems: "center",
    justifyContent: "center",
  },
  textInputContainer: {
    flex: 2,
    width: "100%",
    paddingVertical:20,
    alignItems: "center",
    justifyContent:'space-between'
  },
  signUpOptions: {
    flex: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    
    
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
