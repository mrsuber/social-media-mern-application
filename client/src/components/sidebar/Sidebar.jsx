import React from 'react'
import './Sidebar.css'
import {Chat,RssFeed,PlayCircleFilledOutlined,HelpOutline,WorkOutline,Event,School,Bookmark,Group} from '@material-ui/icons'
import img from  '../../images/me.webp'
import {Users} from "../../data/data"

import {CloseFriend} from '../../components'
const Sidebar = () => {
  return (
    <div className="social__sidebar">
      <div className="social__sidebarWrapper">
        <ul className="social__sidebarList">
            <li className="social__sidebarListItem">
              <RssFeed className="social__sidebarIcon" />
              <span className="social__sidebarListItemText">Feed</span>
            </li>

            <li className="social__sidebarListItem">
              <Chat className="social__sidebarIcon" />
              <span className="social__sidebarListItemText">Chats</span>
            </li>

            <li className="social__sidebarListItem">
              <PlayCircleFilledOutlined className="social__sidebarIcon" />
              <span className="social__sidebarListItemText">Feed</span>
            </li>

            <li className="social__sidebarListItem">
              <Group className="social__sidebarIcon" />
              <span className="social__sidebarListItemText">Groups</span>
            </li>

            <li className="social__sidebarListItem">
              <Bookmark className="social__sidebarIcon" />
              <span className="social__sidebarListItemText">Bookmarks</span>
            </li>

            <li className="social__sidebarListItem">
              <HelpOutline className="social__sidebarIcon" />
              <span className="social__sidebarListItemText">Questions</span>
            </li>

            <li className="social__sidebarListItem">
              <WorkOutline className="social__sidebarIcon" />
              <span className="social__sidebarListItemText">Jobs</span>
            </li>

            <li className="social__sidebarListItem">
              <Event className="social__sidebarIcon" />
              <span className="social__sidebarListItemText">Events</span>
            </li>

            <li className="social__sidebarListItem">
              <School className="social__sidebarIcon" />
              <span className="social__sidebarListItemText">Courses</span>
            </li>

        </ul>
        <button className="social__sidebarButton">Show More</button>
        <hr className="social__sidebareHr" />
        <ul className="social__sidebarFriendList">
        {Users.map(u=>(
          <CloseFriend key={u.id} user={u}/>
        ))}

        </ul>
        
      </div>
    </div>
  )
}

export default Sidebar
