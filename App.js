import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity } from 'react-native';
import {NavigationContainer,DefaultTheme } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Loginscreen from './screens/Loginscreen';
import Signin from './screens/Signin';
import Home from './screens/Home'



const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Loginscreen} options={{headerShown: false}}/>
        <Stack.Screen name="SignIn" component={Signin} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  
    
  );
}


