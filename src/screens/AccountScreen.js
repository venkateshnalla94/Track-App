import React,{useContext} from 'react' ;
import {Text,StyleSheet} from "react-native";
import {Button} from "react-native-elements";
import Spacer from "../components/Spacer";
import {Context as AuthContext} from "../context/AuthContext";
import {SafeAreaView} from "react-navigation";

const AccountScreen=()=>{
     const {signOut} =useContext(AuthContext)
     return (
          <SafeAreaView forceInset={{top:'always'}}>
               <Text>AccountScreen</Text>
               <Spacer>
                    <Button title={"Sign Out"} onPress={signOut}/>
               </Spacer>
               
          </SafeAreaView>
     )
}

const styles=StyleSheet.create({

})

export default AccountScreen;
