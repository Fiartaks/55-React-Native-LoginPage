import LoginPage from "./src/screens/LoginPage";
import { NavigationContainer } from "@react-navigation/native";
import SignupPage from "./src/screens/SignupPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name='Login' component={LoginPage} />
        <Stack.Screen name='SignUp' component={SignupPage} />

      </Stack.Navigator>

 
    </NavigationContainer>
  );
};
export default App;
