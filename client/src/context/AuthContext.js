import {createContext,useReducer} from 'react'
import AuthReducer from './AuthReducer'

const INITIAL_STATE ={
  user:{
  "_id": "617957aa1583902a8cfebb7b",
  "username": "msb",
  "email": "msb@gmail.com",
  "profilePicture": "",
  "coverPicture": "",
  "followers": [],
  "followings": [
    "617957aa1583902a8cfebb7b",
    "617957db3e6f0dd3587bbae8"
  ],
  "isAdmin": false,
  "createdAt": "2021-10-27T13:44:10.773Z",
  "updatedAt": "2021-11-01T00:19:54.122Z",
  "__v": 0,
  "city": "Buea",
  "desc": "This is msb user, you can say anything",
  "from": "Moliko",
  "relationship": 2
},
  isFectching:false,
  error:false
};

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider =({children}) =>{
  const [state, dispatch]=useReducer(AuthReducer,INITIAL_STATE)

  return(
    <AuthContext.Provider
    value={{
      user:state.user,
      isFectching:state.isFectching,
      error:state.error,
      dispatch
    }}
    >
    {children}
    </AuthContext.Provider>
  )
}
