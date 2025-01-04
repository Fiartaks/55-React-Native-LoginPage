import { NavigationContainer } from "@react-navigation/native";
import UserStack from "./UserStack";
import AuthStack from "./AuthStack";
import { useSelector } from "react-redux";

const RootNavigation = () => {

  const{isAuth}=useSelector((state)=>state.user)

  return (
    <NavigationContainer screenOptions={{ headerShown: false }}>
      {!isAuth ? <AuthStack /> : <UserStack />}
    </NavigationContainer>
  );
};
export default RootNavigation;
