import {Search,Person,Chat, Notifications} from '@material-ui/icons'
import avatar from '../../images/me.webp'
import './Topbar.css'
import {Link} from 'react-router-dom'

const Topbar = () => {
  return (
    <div className="social__topbarContainer">
    <div className="social__topbarLeft">
    <Link to="/" className="social__link">
      <span className="social__logo">MSBsocial</span>
      </Link>
    </div>
    <div className="social__topbarCenter">
      <div className="social__searchbar">
        <Search className="social__searchIcon"/>
        <input placeholder="search for friends,post or video" className="social__searchInput" />
      </div>
    </div>
    <div className="social__topbarRight">
      <div className="social__topbarLinks">
        <span className="social__topbarLink">Homepage</span>
          <span className="social__topbarLink">Timeline</span>
      </div>
      <div className="social__topbarIcons">
        <div className="social__topbarIconItem">
          <Person />
          <span className="social__topbarIconBadge">1</span>
        </div>

        <div className="social__topbarIconItem">
          <Chat />
          <span className="social__topbarIconBadge">2</span>
        </div>

        <div className="social__topbarIconItem">
          <Notifications />
          <span className="social__topbarIconBadge">1</span>
        </div>
      </div>
      <img src={avatar} alt="" className="social__topbarImg" />
    </div>

    </div>
  )
}

export default Topbar
