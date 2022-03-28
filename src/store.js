import React ,{createContext, useContext,useReducer} from 'react';

const initialState = { isLoading: false, data: {}, error: null };
function loginReducer(state, action) {
  switch (action.type) {
    case "ONSUBMIT_REQUEST":
      return { isLoading: true };
    case "ONSUBMIT_SUCCESS":
      return { isLoading: false, data: action.payload, error: null };
    case "ONSUBMIT_ERROR":
      return { isLoading: false, data: {}, error: action.payload };
    default:
      break;
  }
}

function signupReducer(state, action) {

  switch (action.type) {
    case "ONSIGNUP_REQUEST":
      return { ...state,isLoading: true };
    case "ONSIGNUP_SUCCESS":
      return { isLoading: false, data: action.payload, error: null };
    case "ONSIGNUP_ERROR":
      return { isLoading: false, data: {}, error: action.payload };
    default:
      break;
  }
}

function profileReducer(state, action) {
  switch (action.type) {
    case "ONPROFILE_REQUEST":
      return { isLoading: true };
    case "ONPROFILE_SUCCESS":
      return { isLoading: false, data: action.payload, error: null };
    case "ONPROFILE_ERROR":
      return { isLoading: false, data: {}, error: action.payload };
    default:
      break;
  }
}

    

function toDoReducer(state, action) {
  switch (action.type) {
    case "ONTODO_REQUEST":
      return { isLoading: true };
    case "ONTODO_SUCCESS":
      return { isLoading: false, data: action.payload, error: null };
    case "ONTODO_ERROR":
      return { isLoading: false, data: {}, error: action.payload };
    default:
      break;
  }
}

export const AppState =createContext({});
const AppStoreProvider =({children})=>{
  const [loginState,dispatchLogin] = useReducer(loginReducer,initialState);
  const [signupState,dispatchSignup] = useReducer(signupReducer,initialState)
  const [profileState,dispatchProfile] = useReducer(profileReducer,initialState)
  const [toDoState,dispatchToDo] = useReducer(toDoReducer,initialState)
  return(<AppState.Provider value={{state:{loginState:loginState,signupState:signupState,profileState:profileState,toDoState:toDoState},actions:{dispatchLogin,dispatchSignup,dispatchProfile,dispatchToDo}}} >{children}</AppState.Provider>)
}
export default AppStoreProvider;
