import createDataContext from './createDataContext';
import trackerApi from "../api/tracker";
import {AsyncStorage} from "react-native";
import {navigate} from "../navigationRef";
import axios from 'axios';
const authReducer = (state, action) => {
     switch (action.type) {
          case 'add_error':
               return {...state,errorMessage:action.payload};
          case 'signup':{
               return {errorMessage:'',token:action.payload}
          }
          case 'signin':{
               return {errorMessage:'',token:action.payload}
          }
          case 'clear_error_message':
               return { ...state, errorMessage: '' };
          default:
               return state;
     }
};

const signUp=(dispatch)=>{
     return async ({email,password})=>{
          /**
           * TODO: -Make an API call to the server for Sign Up
           * if success ,then authenicate user
           * else reflect error and request again for Sign Up
           */
          /**
           * TODO: - Resolve Fetch and axios error
           */
          try{
               console.log("Reached",email,password)
               
               const response = await trackerApi.post('/signup', { email, password });
               await AsyncStorage.setItem('token', response.data.JWTToken);
               dispatch({ type: 'signup', payload: response.data.token });
               navigate('TrackList')
               console.log(response.data);
          }catch (e) {
               console.log(e.message)
               dispatch({type:'add_error',payload:'Something wrong with Sign UP'})
          }
     }
}
const signIn=(dispatch)=>async ({email,password})=>{
          
          try{
               const response = await trackerApi.post('/signin', { email, password });
               await AsyncStorage.setItem('token', response.data.JWTToken);
               dispatch({ type: 'signin', payload: response.data.token });
               navigate('TrackList');
          }catch (e) {
               console.log(e.message)
               dispatch({type:'add_error',payload:'Something wrong with Sign UP'})
          }
     
}

const signOut=(dispatch)=>{
     return ()=>{
          /**
           * TODO: -Sign Out
           */
     }
}
const clearErrorMessage = dispatch => () => {
     dispatch({ type: 'clear_error_message' });
};
const tryLocalSignin= dispatch =>async ()=>{
     const token=await AsyncStorage.getItem('token');
     if(token){
          dispatch({ type: 'signin',payload:'token' });
          navigate('TrackList');
     }else{
          navigate('Signup');
     }
}

export const { Provider, Context } = createDataContext(
     authReducer,
     {signIn,signOut,signUp,clearErrorMessage,tryLocalSignin },
     {errorMessage:'',token:null,}
);
