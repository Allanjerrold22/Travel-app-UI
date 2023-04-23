import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity } from 'react-native';
import rocket from "../assets/rocketman.png"

const Loginscreen=({navigation})=> {
    return (
    
        
          <SafeAreaView >
          
        
          <View style={{alignItems:'center',justifyContent:'center'}}>
          <StatusBar style="auto" />
          <View style={styles.box}>
            <Image source={rocket} style={{width:"100%",resizeMode:'contain'}} />
          </View>
          <View style={{alignItems:'center',justifyContent:'center',padding:20}}>
            <Text style={styles.text}>
              Meet your Migration {"\n"} Guide Here
            </Text>
            <Text style={{textAlign:'center',marginTop:50,fontSize:14,color:'gray'}}>
            All in one Application to help students who migrates for higher studies and people who travels 
            </Text>
          </View>
          <View style={{height:70,width:"90%",backgroundColor:'#F5F5F5',borderRadius:'20',marginTop:55,justifyContent:'center',flexDirection:'row'}}>
            <TouchableOpacity style={{backgroundColor:"white",width:"48%",height:55,alignItems:'center',justifyContent:'center',marginTop:6,marginLeft:2,borderRadius:18,boxShadow:10}}>
              <Text>Register</Text>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={() =>  navigation.navigate('SignIn') }
            style={{width:"45%",height:55,alignItems:'center',justifyContent:'center',margin:6,borderRadius:18,boxShadow:10}}>
              <Text>Signup</Text>

              
            </TouchableOpacity>
            
    
          </View>
          </View>
          </SafeAreaView>
      );
}


export default Loginscreen;

const styles = StyleSheet.create({
  box: {
    width:"90%",
    height:360,
    backgroundColor:'#8A98FF'
    ,borderRadius:20,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    fontSize: 26,
    textAlign:'center',
    fontWeight: '600',
  },
});