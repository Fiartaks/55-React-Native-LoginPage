import { StyleSheet, Text, View } from 'react-native'
const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <Text>ProfilePage</Text>
    </View>
  )
}
export default ProfilePage
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})