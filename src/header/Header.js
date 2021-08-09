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
                    <input placeholder='Search' type="text" />        
                </div>
            </div>
            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title='Home' />
                <HeaderOptions Icon={SupervisorAccount} title='My Network' />
                <HeaderOptions Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOptions Icon={ChatIcon} title='Messaging' />
                <HeaderOptions Icon={NotificationsIcon} title='Notifications' /> 
                <HeaderOptions  avatar='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngnice.com%2Fimage%2F1983%2F&psig=AOvVaw0OzSDoVpaV8H4Bf2_NOxBw&ust=1628178773050000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCKjuXcl_ICFQAAAAAdAAAAABAD'
                title='me'/> 
            </div>
        </div>
    )
}
 
export default Header
