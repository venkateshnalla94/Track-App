import {NavigationActions} from "react-navigation";

let navigator;

export const navigate=(routeName,params)=>{
     navigator.dispatch(
          NavigationActions.navigate({
               routeName,params
     }))
}

export const setNavigator=(nav)=>{
     navigator=nav;
     
}

