import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, Image } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const[result, setResult] = useState('')

  return (
    <View style={styles.container}>
      <Image 
      source={require('./assets/images/unlock.png')}
      style={styles.image} />
      <Text style={styles.welcome}>Welcome {result}</Text>
      <Text>Name</Text>
      <TextInput
        placeholder="Enter your name"
        onChangeText={setName}
        style={styles.textInputStyle}
      />

      <Text>Last Name</Text>
      <TextInput
        placeholder="Enter your last name"
        onChangeText={setLastName}
        style={styles.textInputStyle}
      />

      <Pressable 
      onPress={()=>setResult( name+''+lastName)}

      style={ ({pressed})=> [{
        backgroundColor: pressed ? 'gray' : 'blue'
      }, styles.button]}>

        <Text style={styles.buttonText}>Save</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

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
  image:{
    width: 100,
    height: 100
  },
  welcome: {
    fontWeight: "bold",
    fontSize:26,
  }
});
