import React, {useContext} from 'react' ;
import {View,Text,StyleSheet} from "react-native";
import AuthForm from "../components/AuthForm";
import {Context as AuthContext} from "../context/AuthContext";
import NavLink from "../components/NavLink";


const SigninScreen=()=>{
     const {state,signIn}=useContext(AuthContext);
     return (
          <View style={styles.parentStyle}>
               <AuthForm
                    headerText={"Sign In for Tracker"}
                    onSubmit={()=>{console.log('sign in')}}
                    errMessage={state.errorMessage}
                    submitButton={"Sign In"}/>
               <NavLink routeName={'Signup'}
                        text={'Already have an Account! Sign In '}
               />
          </View>
     )
}
SigninScreen.navigationOptions = () => {
     return {
          headerShown: false,
     };
};

const styles=StyleSheet.create({
     parentStyle:{
          flex:1,
          justifyContent:'center',
          marginBottom:150
     }
})

export default SigninScreen;
