import RootNavigation from "./src/navigation/RootNavigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { getAllData } from "./src/redux/dataSlice";
import { useDispatch, useSelector } from "react-redux"; 
import { Loading } from "./src/components";
import { useEffect } from "react";


const AppWrapper =()=>{
  return(
    <Provider store={store}>
      <App />
    </Provider>
      )
}

const App = () => {



  const dispatch = useDispatch();

  const {isLoading, isSaved} = useSelector(state => state.data)


  useEffect(() => {
    dispatch(getAllData());
  }, [isSaved]);

 // TouchableWithoutFeedback onPress={Keyboard.dismiss}
 //import { Keyboard, TouchableWithoutFeedback } from "react-native";

 if(isLoading) return <Loading />


  return (
  
      <RootNavigation />
    
    

  );
};
export default AppWrapper;
