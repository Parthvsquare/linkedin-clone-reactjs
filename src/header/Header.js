import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import HeaderOptions from './components/HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'

function Header() {
    return (
        <div className='header'>
            <div className="header__left">
            <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                <div className="header__search">
                   <SearchIcon />
                    <input type="text" />        
                </div>
            </div>
            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title='Home' />
                <HeaderOptions Icon={SupervisorAccount} title='My Network' />
                <HeaderOptions Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOptions Icon={ChatIcon} title='Messaging' />
                <HeaderOptions Icon={NotificationsIcon} title='Notifications' /> 
            </div>
        </div>
    )
}
 
export default Header
