import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./authStack";
import UserStack from "./userStack";

const rootNavigation = () => {
  const isAuth = false;

  return (
    <NavigationContainer screenOptions={{ headerShown: false }}>
      {!isAuth ? <AuthStack /> : <UserStack />}
    </NavigationContainer>
  );
};
export default rootNavigation;
const styles = StyleSheet.create({});
