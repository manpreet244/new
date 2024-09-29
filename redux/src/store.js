import {createStore} from "redux";
import {reducer} from "./reducer";

const store  = createStore(reducer)
console.log(store.getState());
store.dispatch({
    type:"bugAdded",
    //actions
    payload:{
        description :"Bug1"
    }
});
console.log(store.getState());

export default store;

//in a store , we only have getState method
// and do not have setState method to update the state
// so to update the state of the store , we have to dispatch
//the action