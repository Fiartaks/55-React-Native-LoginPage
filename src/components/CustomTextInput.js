import { StyleSheet, Text, View, TextInput } from "react-native";
const CustomTextInput = ({
  title,
  isSecureText,
  handleOnChangeText,
  handleValue,
  handlePlaceHolder,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputBoxText}>{title}</Text>
      <TextInput
        secureTextEntry={isSecureText}
        style={styles.textInputStyle}
        placeholder={handlePlaceHolder}
         onChangeText={handleOnChangeText}
        value={handleValue}
      />
    </View>
  );
};
export default CustomTextInput;
const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
  },
  inputBoxText: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    color: "white",
  },
  textInputStyle: {
    borderBottomWidth: 0.6,
    borderColor: "white",
    width: "80%",
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: "center",
    color: "blue",
  },
});
