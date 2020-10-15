import createDataContext from './createDataContext';
import trackerApi from "../api/tracker";
import axios from 'axios';
const authReducer = (state, action) => {
     switch (action.type) {
          case 'add_error':
               return {...state,errorMessage:action.payload}
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
               const response = await trackerApi.post('/signup',{email,password} );
               console.log(response.data);
          }catch (e) {
               console.log(e.message)
               dispatch({type:'add_error',payload:'Something wrong with Sign UP'})
          }
     }
}
const signIn=(dispatch)=>{
     return ({email,password})=>{
          /**
           * TODO: -Make an API call to the server for siginingin
           * if success ,then authenicate user
           * else reflect error and request again for signin
           */
     }
}

const signOut=(dispatch)=>{
     return ()=>{
          /**
           * TODO: -Sign Out
           */
     }
}
export const { Provider, Context } = createDataContext(
     authReducer,
     {signIn,signOut,signUp },
     { isSignedIn:false,errorMessage:'' }
);
