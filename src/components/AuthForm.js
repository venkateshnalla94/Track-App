import React, {useState} from 'react';
import {StyleSheet} from "react-native";
import {Text,Button,Input} from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm=({headerText,errMessage,submitButton,onSubmit})=>{
     const [email,setEmail]=useState('');
     const [password,setPassword]=useState('');
     return(
          <>
               <Spacer>
               <Text style={styles.headerStyle} h4>{headerText}</Text>
               </Spacer>
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
               {errMessage?
                    <Text
                         style={styles.errMsg}   >{errMessage}
                    </Text>:null}
               <Spacer>
                    <Button title={submitButton}
                            onPress={() => onSubmit({ email, password })}
                    />
               </Spacer>
          
          </>
     )
}

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
     },
     link:{
          color:"blue"
     }

})

export default AuthForm
