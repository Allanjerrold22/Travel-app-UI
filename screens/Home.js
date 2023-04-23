import React from "react";
import { Avatar } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity,ScrollView,ImageBackground,FlatList} from 'react-native';

import profile from "../assets/profile.png"
import cab from "../assets/cab.png"
import hostel from "../assets/hostel.png"
import food from "../assets/food.png"
import wallet from "../assets/walletbg.png"
import laundry from "../assets/laundry.png"
import notification from "../assets/notification.png"
import place1 from "../assets/place1.png"
import place2 from "../assets/place2.png"
import place3 from "../assets/place3.png"
import place4 from "../assets/place4.png"
import girl from "../assets/girl.png"
import yellowbg from "../assets/yellowbg.png"

import { BackgroundImage } from "react-native-elements/dist/config";

const Home=()=> {
    return(
        <SafeAreaView style={{marginHorizontal:14}}>
            <ScrollView style={{width:"100%",height:"100%", display:'flex'}}>
            <TouchableOpacity style={{}}>
                <Image source={notification} style={{resizeMode:'contain',width:40,height:40,position:'absolute',right:18,top:24}}/>

            </TouchableOpacity>
            <View style={{flexDirection:'row',marginTop:18}}>
            <Avatar

                size="medium"
                source={profile}
                rounded
                title="MT"
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
                // style={{backgroundColor:"black"}}
                />
            <Text style={{fontSize:24,fontWeight:500,marginTop:12,marginLeft:12}}>
                Hi, Allan
            </Text>
            
            </View>
            <Text style={{fontSize:16,fontWeight:500,marginTop:20}}>Our Services</Text>

            <View style={{flexDirection:'row',justifyContent:'space-around'}}>

            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{backgroundColor:"#F2F6FF",width:170,height:68,borderRadius:16}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{justifyContent:'center' ,padding:6,flexDirection:'row'}}>
                            <Image source={cab} style={{width:58,height:58}}/>
                            <View style={{flexDirection:'column',justifyContent:'space-evenly'}}>
                                <Text style={{fontSize:12,color:'gray'}}>
                                Rental services
                                </Text>
                                <Text style={{fontSize:16,fontWeight:500}}>
                                Cab/Bus
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity >

            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
            <View style={{backgroundColor:"#F2F6FF",width:170,height:68,borderRadius:16}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{justifyContent:'center' ,padding:6,flexDirection:'row'}}>
                            <Image source={hostel} style={{width:58,height:58}}/>
                            <View style={{flexDirection:'column',justifyContent:'space-evenly'}}>
                                <Text style={{fontSize:12,color:'gray'}}>
                                Hostel services
                                </Text>
                                <Text style={{fontSize:16,fontWeight:500}}>
                                Hostel/PG
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity >
            </View>
            
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>

            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',marginTop:12}}>
            <View style={{backgroundColor:"#F2F6FF",width:170,height:68,borderRadius:16}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{justifyContent:'center' ,padding:6,flexDirection:'row'}}>
                            <Image source={food} style={{width:58,height:58}}/>
                            <View style={{flexDirection:'column',justifyContent:'space-evenly'}}>
                                <Text style={{fontSize:12,color:'gray'}}>
                                Food services
                                </Text>
                                <Text style={{fontSize:16,fontWeight:500}}>
                                Food
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity >

            <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',marginTop:12}}>
                <View style={{backgroundColor:"#F2F6FF",width:170,height:68,borderRadius:16}}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{justifyContent:'center' ,padding:6,flexDirection:'row'}}>
                            <Image source={laundry} style={{width:58,height:58}}/>
                            <View style={{flexDirection:'column',justifyContent:'space-evenly'}}>
                                <Text style={{fontSize:12,color:'gray'}}>
                                Laundry services
                                </Text>
                                <Text style={{fontSize:16,fontWeight:500}}>
                                Laundry
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity >
            </View>

            {/* <View style={{alignItems:'center'}}>
                <Image source={wallet} style={{width:"100%",height:140,borderRadius:20}}/>
            </View> */}
            <ImageBackground source={wallet} resizeMode="cover" imageStyle={{ borderRadius: 20}} style={{width:"100%",height:140, marginTop:20}}>

                <Text style={{fontSize:16,fontWeight:800,color:'white',marginLeft:14,marginTop:12}}>
                    Wallet
                </Text>
                <Text style={{fontSize:18,fontWeight:400,color:'white',marginLeft:14,marginTop:12}}>
                    Available balance
                </Text>
                <Text style={{fontSize:28,fontWeight:600,color:'white',marginLeft:14,marginTop:18}}>
                ₹2000
                </Text>
                <TouchableOpacity style={{backgroundColor:'#FE9A8D',width:100,height:45,position:'absolute',right:16,top:80,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{justifyContent:'center',alignItems:'center',fontSize:20,color:'white',fontWeight:500}}>
                        Add
                    </Text>

                </TouchableOpacity>

            </ImageBackground>

            <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:18,fontWeight:600}}>Nearby Tourists places</Text>
                <Text style={{fontSize:18,fontWeight:500,color:"gray"}}>see all </Text>
            </View>

            <FlatList
            style={{marginTop:18}}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          horizontal
          renderItem={_ => (
            <View
              style={{
                marginRight:10
              }}>
                <BackgroundImage source={place4} style={{width:220,height:240}} />
                </View>
          )}
        />

        <ImageBackground source={yellowbg} borderRadius={20} style={{ width:"100%",height:180,marginTop:20,borderRadius:30}}>

            <View style={{position:'absolute',bottom:0}}>
                <Image source={girl} style={{resizeMode:"contain",width:160,height:160}}/>
            </View>

        </ImageBackground>

        
            

            </ScrollView>


        </SafeAreaView>
    )
}
export default Home;
