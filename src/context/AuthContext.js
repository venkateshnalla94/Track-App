import createDataContext from './createDataContext';
import trackerApi from "../api/tracker";
import axios from 'axios';
const authReducer = (state, action) => {
     switch (action.type) {
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
          console.log("reached")
          try{
               const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
                    method: 'GET',
                    //Request Type
               })
               //const response = await trackerApi.post('/signup', { email, password });
               //const response = await trackerApi.get('/', );
               console.log(response);
          }catch (e) {
               console.log(e.message)
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
     { isSignedIn:false }
);
