import React from 'react';
import {useSelector} from 'react-redux';
import './App.css';
import Header from './header/Header';
import SideBar from './sideBar/SideBar'
import Feed from './feed/Feed'
import { selectUser } from './features/userSlice';
import Login from "./login/Login"
function App() {
  const user = useSelector(selectUser)
  return (
    <div className="app">
        <Header />
        {!user ?
        (
          <Login />
        )
       : (<div className="app__body">
          <SideBar />
          <Feed />
        </div>
       )
        }
    </div>
  );
}

export default App;
