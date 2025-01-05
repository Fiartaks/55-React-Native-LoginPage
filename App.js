import RootNavigation from "./src/navigation/RootNavigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

const App = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <Provider store={store}>
      <RootNavigation />
    </Provider>
    </TouchableWithoutFeedback>

  );
};
export default App;
