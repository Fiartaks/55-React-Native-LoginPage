import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc  } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import CustomButton from "../components/CustomButton";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

const HomePage = () => {
  const [data, setData]=useState([])
  const[isSaved, setIsSaved]=useState(false)
  const [updateTheData, setupdateTheData] = useState('')


  const dispatch = useDispatch();

  console.log(isSaved)
  //console.log('data', data)

   useEffect(()=>{
    getData()
   },[isSaved])


  //SEND DATA TO FIREBASE
  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "reactNativeLesson"), {
        title: "Zero to Hero",
        content: "React Native tutorial for beginner",
        lesson: 99,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  //GET DATA FROM FIREBASE
  const getData = async () => {

    const allData = []

    try {
      const querySnapshot = await getDocs(collection(db, "reactNativeLesson"));
      querySnapshot.forEach((doc) => {
      //  console.log(`${doc.id} => ${doc.data()}`);
     // setData([...data, doc.data()])
      allData.push({...doc.data(), id:doc.id})
      });
      setData(allData)
    } catch (error) {
      console.log(error)
    }
   


   
  };

  //DELETE DATA FROM FIREBASE
  const deleteData =async(value)=>{

   try {
    await deleteDoc(doc(db, "reactNativeLesson", value));
console.log('Delete Succesfull')
   } catch (error) {
    console.log(error)
   }

  }
//UPDATE DATA FROM FIREBASE
  const updateData= async(value)=>{
    try {
      const lessonData = doc(db, "reactNativeLesson", value);

// Set the "capital" field of the city 'DC'
await updateDoc(lessonData, {
  content: updateTheData
});
    } catch (error) {
      console.log(error)
    }
  }

//KULLANICI CIKIS ISLEMLERI
  const handleLogout=()=>{
    dispatch(logout())
  }



    




  return (
    <View style={styles.container}>
      <TextInput
      value={updateTheData}
      onChangeText={setupdateTheData}
      placeholder='enter your data' style={{borderWidth:1,width:'50%', paddingVertical:5, textAlign:'center', marginBottom:30}} />

     {data.map((value,index)=>{
      return(
        <Pressable key={index} onPress={()=>[updateData(value.id), setIsSaved(isSaved === false ? true:false)]} >
          
          <Text>{index}</Text>
          <Text>{value.id}</Text>
          <Text>{value.title}</Text>
          <Text>{value.content}</Text>
          <Text>{value.lesson}</Text>
        </Pressable>
      )
     })}



      <CustomButton
        buttonText={"save"}
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={()=>{sendData(),setIsSaved(isSaved ===false ? true : false)}}
      />
      <CustomButton
        buttonText={"Get Data"}
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={getData}
      />
      <CustomButton
        buttonText={"Delete Data"}
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={deleteData}
      />
      <CustomButton
        buttonText={"Update Data"}
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={updateData}
      />
      <CustomButton
        buttonText={"LOGOUT"}
        setWidth={"40%"}
        buttonColor={"red"}
        pressedButtonColor={"gray"}
        handleOnPress={handleLogout}
      />
    </View>
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
});
