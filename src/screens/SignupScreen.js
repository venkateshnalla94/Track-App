import React,{useState} from 'react' ;
import {View,StyleSheet,} from "react-native";
import {Text,Input,Button} from 'react-native-elements'
import Spacer from "../components/Spacer";

const SignupScreen=({navigation})=>{
     const [email,setEmail]=useState('');
     const [password,setPassword]=useState('')
     
     return (
          <View style={styles.parentStyle}>
               <Text style={styles.headerStyle} h4>Sign Up For Tracker</Text>
               <Input
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    label={'Email'}
                    value={email}
                    onChangeText={setEmail}
               />
               <Spacer/>
               <Input
                    secureTextEntry={true}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    label={'Password'}
                    value={password}
                    onChangeText={setPassword}
               />
               <Spacer>
                    <Button title={'Sign In'} onPress={()=>{navigation.navigate('Signin')}}/>
               </Spacer>
               
               {/*<Button title={'Main Flow'} onPress={()=>{navigation.navigate('mainFlow')}}/>*/}
          </View>
     )
}
SignupScreen.navigationOptions = () => {
     return {
          headerShown: false,
     };
};

const styles=StyleSheet.create({
     headerStyle:{
          margin:20,
          textAlign:'center'
     },
     parentStyle:{
          flex:1,
          justifyContent:'center',
          marginBottom:150
     }
})

export default SignupScreen;
