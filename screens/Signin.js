import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity,TextInput } from 'react-native';
import apple from "../assets/apple.png"
import facebook from "../assets/facebook.png"
import google from "../assets/google.png"

const Signin=({navigation})=> {
    return(
       
            <SafeAreaView >
                <View style={{marginTop:70}}>
                <Text style={{textAlign:'center',fontSize:28,fontWeight:500}}>
                Hello Again!
                </Text>
                <Text style={{textAlign:'center',fontSize:18,marginTop:20,color:'gray'}}>
                Welcome Back You’ve {"\n"}been missed
                </Text>
                </View>

                <View style={{ alignItems:'center',justifyContent:'center',flexDirection:'column',marginTop:60}}>
                <TextInput
                placeholder='Enter username'
                
                    style={{paddingHorizontal:30,width:"80%",height:60,backgroundColor:"#F5F5F5",borderRadius:18}}
                />
                <TextInput
                placeholder='Password'
                secureTextEntry={true}
                    style={{paddingHorizontal:30,width:"80%",height:60,backgroundColor:"#F5F5F5",borderRadius:18,marginTop:32}}
                />

                <TouchableOpacity style={{marginLeft:"40%",marginTop:10}}>
                    <Text style={{fontSize:14,color:'gray'}}>
                    Recovery Password
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>  navigation.navigate('Home') }style={{backgroundColor:"black",width:"60%",height:58,alignItems:'center',marginTop:60,borderRadius:20,justifyContent:'center'}}>
                    <Text style={{color:'white',fontSize:18,fontWeight:600}}>
                        Sign in
                    </Text>
                </TouchableOpacity>

                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:32,alignItems:'center'}}>
                    <View style={{height:1,backgroundColor:"gray",width:80}}/>
                    <Text style={{paddingHorizontal:10,color:'gray'}}>Or Continue with </Text>
                    <View style={{height:1,backgroundColor:"gray",width:80}}/>
                    
                </View>

                <View style={{flexDirection:'row',justifyContent:'space-between',width:"60%",marginTop:32}}>
                    <TouchableOpacity style={{borderRadius:10,borderColor:"#ECECEC",justifyContent:'center',alignItems:'center',borderWidth:3,padding:4}}>
                    <Image source={google} style={{width:32,height:32,resizeMode:'contain'}} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{borderRadius:10,borderColor:"#ECECEC",justifyContent:'center',alignItems:'center',borderWidth:3,padding:4}}>
                    <Image source={apple} style={{width:32,height:32,resizeMode:'contain'}} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{borderRadius:10,borderColor:"#ECECEC",justifyContent:'center',alignItems:'center',borderWidth:3,padding:4}}>
                    <Image source={facebook} style={{width:32,height:32,resizeMode:'contain'}} />
                    </TouchableOpacity>

                </View>

                <View style={{flexDirection:'row',marginTop:55}}>

                <Text style={{color:'gray'}}>Not a member ?</Text>
                <TouchableOpacity>
                <Text style={{color:'#01B5EE'}}> Register now</Text>

                </TouchableOpacity>
                

                </View>
                

            

                    

                </View>
          
          
            
            </SafeAreaView>
        
    )
}

export default Signin;
const styles = StyleSheet.create({
    textview:{
        textAlign:'center',

    }
})