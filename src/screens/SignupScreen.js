import React, { useContext} from 'react' ;
import {View, StyleSheet} from "react-native";
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
const SignupScreen=({navigation})=>{
     
     const {state,signUp}=useContext(AuthContext);
     return (
          <View style={styles.parentStyle}>
               <AuthForm headerText={"Sign Up for Tracker"}
                         onSubmit={signUp}
                         errMessage={state.errorMessage}
                         submitButton={"Sign Up"}/>
               <NavLink routeName={'Signin'} text={'Already have an Account! Sign In '}/>
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
     },
     link:{
          color:"blue"
     }
})

export default SignupScreen;
