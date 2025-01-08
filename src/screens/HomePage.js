import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import CustomButton from "../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";

import Animated, {
  BounceIn,
  FlipInEasyX,
  FlipInYRight,
  PinwheelIn,
} from "react-native-reanimated";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import {setUserInput, saveData} from '../redux/dataSlice'

const HomePage = () => {
  const { data, userInput } = useSelector((state) => state.data);
  // const [data, setData] = useState([]);

  const dispatch = useDispatch();
  console.log('userInput :', userInput)

  //console.log('data', data)

  // useEffect(() => {
  //   getData();
  // }, [isSaved]);




  //DELETE DATA FROM FIREBASE
  const deleteData = async (value) => {
    try {
      await deleteDoc(doc(db, "reactNativeLesson", value));
      console.log("Delete Succesfull");
    } catch (error) {
      console.log(error);
    }
  };
  //UPDATE DATA FROM FIREBASE
  // const updateData = async (value) => {
  //   try {
  //     const lessonData = doc(db, "reactNativeLesson", value);

  //     // Set the "capital" field of the city 'DC'
  //     await updateDoc(lessonData, {
  //       content: updateTheData,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //KULLANICI CIKIS ISLEMLERI
  const handleLogout = () => {
    dispatch(logout());
  };

  const renderItem = ({ item, index }) => {
    return (
      <Animated.View
        entering={FlipInYRight.delay(100 * (index + 1))}
        style={styles.flatlistContainer}
      >
        <Pressable
          onPress={() => deleteData(item.id)}
          style={styles.iconContainer}
        >
          <AntDesign name="checkcircle" size={24} color="black" />
          <Entypo name="circle" size={24} color="black" />
        </Pressable>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text>{item.content}</Text>
        </View>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TODOLIST</Text>
      <Animated.FlatList
        entering={PinwheelIn}
        data={data}
        style={styles.flatlist}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <View style={styles.userInputContainer}>
        <TextInput
          value={userInput}
          onChangeText={(text)=>dispatch(setUserInput(text))}
          placeholder="Add To Do"
          style={styles.textInput}
          placeholderTextColor={'lightgray'}
        />
        <CustomButton
          buttonText={"SAVE"}
          flexValue={1}
          buttonColor={"blue"}
          pressedButtonColor={"gray"}
          handleOnPress={()=>dispatch(saveData(userInput))}
        />
      </View>
    </SafeAreaView>
  );
};
export default HomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightpink",
  },
  flatlistContainer: {
    borderBottomWidth: 0.3,
    marginVertical: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  flatlist: {
    width: "90%",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
  },
  itemContainer: {
    flex: 5,
    marginLeft: 10,
  },
  itemTitle: {
    fontWeight: "bold",
  },
  iconContainer: {
    borderWidth: 1,
    flex: 1,
    alignItems: "center",
  },
  userInputContainer:{
    width: "90%",
    flexDirection:'row',
    justifyContent: "center",
  },
  textInput:{
    borderWidth: 1,
    flex:3,
    borderRadius: 5,
    borderWidth:0.3,
    paddingVertical:5,
    textAlign:'center',
    marginRight:5,
    borderColor:'white'
  }
});
