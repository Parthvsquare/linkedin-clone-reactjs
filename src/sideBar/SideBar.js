import { Avatar } from '@material-ui/core'
import React from 'react'
import './SideBar.css'
function SideBar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>
           <div className="sidebar__top">
               <img src="https://images.unsplash.com/photo-1628089928275-55335514dd53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="" />
               <Avatar className='sidebar__avatar' />
               <h2>Parth Vsquare</h2>
               <h4>parthvsquare@gmail.com</h4>
               </div> 
               <div className="sidebar__stats">
                   <div className="sidebar__stat">
                       <p>Who viewed you</p>
                       <p className="sidebar__statNumber">
                           1000
                       </p>
                   </div>
                   <div className="sidebar__stat">
                   <p>Views on Post</p>
                       <p className="sidebar__statNumber">
                           1000
                       </p>
                   </div>
               </div>
               <div className="sidebar__bottom">
                   <p>Recents</p>
                   {recentItem('reactjs')}
                   {recentItem('programming')} 
                   {recentItem('software engineer')}
                   {recentItem('ui/ux')}
                   {recentItem('developer')}
               </div>
        </div>
    )
}

export default SideBar