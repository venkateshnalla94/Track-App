import React,{useState,useContext} from 'react' ;
import {View,StyleSheet,} from "react-native";
import {Text,Input,Button} from 'react-native-elements'
import Spacer from "../components/Spacer";
import {Context as AuthContext} from "../context/AuthContext";

const SignupScreen=({navigation})=>{
     const [email,setEmail]=useState('');
     const [password,setPassword]=useState('');
     const {state,signUp}=useContext(AuthContext);
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
               {state.errorMessage?
                    <Text
                      style={styles.errMsg}   >{state.errorMessage}
                    </Text>:null}
               <Spacer>
                    <Button title={'Sign Up'} onPress={()=>{
                         signUp({email,password})
                    }}/>
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
     },
     errMsg:{
          fontSize:16,
          color:'red',
          marginLeft:15,
          marginTop:15
     }
})

export default SignupScreen;
