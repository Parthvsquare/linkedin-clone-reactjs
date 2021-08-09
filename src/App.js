import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './App.css';
import Header from './header/Header';
import SideBar from './sideBar/SideBar'
import Feed from './feed/Feed'
import { login, logout, selectUser } from './features/userSlice';
import Login from "./login/Login"
import { auth } from './firebase';
import Widgets from './widgets/Widgets';

function App() {
  const user = useSelector(selectUser)
const dispatch = useDispatch();
  useEffect(() =>{
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }
      else {
        dispatch(logout());
        //user is logged out
      }
    })
  },[])
  return (
    <div className="app">
        <Header />
      {
        (!user) ?
        <Login /> 
       : (
       <div className="app__body">
          <SideBar />
          <Feed />
          <Widgets/>
        </div>
       )
        }
    </div>
  );
}

export default App;
