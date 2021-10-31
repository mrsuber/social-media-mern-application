import './Rightbar.css'
import img from '../../images/gift.png'
import img1 from '../../images/ad.png'
import {Users} from "../../data/data"
import {Online} from '../../components'


const Rightbar = ({user}) => {
  const HomeRightbar = ()=>{

    return(
      <>
      <div className="social__birthdayContainer">
        <img className="social__birthdatImg" src={img} alt="" />
        <span className="social__birthdayText">
        <b>pola Foster</b> and <b>3 other friends</b> have a birthday today.</span>
      </div>
      <img className="social__rightbarAd" src={img1} alt="" />
      <h4 className="social__rightbarTitle">Online Friends</h4>
      <ul className="social__rightbarFriendList">
        {Users.map(u=>(
          <Online key={u.id} user={u}/>
        ))}



      </ul>
      </>
    )
  }

  const ProfileRightbar=()=>{
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return(
      <>
        <h4 className="social__rightbarTitle">User Information</h4>
        <div className="social__rightbarInfo">
          <div className="social__rightbarInfoItem">
            <span className="social__rightbarInfoKey">City:</span>
            <span className="social__rightbarInfoValue">{user.city}</span>
          </div>

          <div className="social__rightbarInfoItem">
            <span className="social__rightbarInfoKey">From:</span>
            <span className="social__rightbarInfoValue">{user.from}</span>
          </div>

          <div className="social__rightbarInfoItem">
            <span className="social__rightbarInfoKey">Relationship:</span>
            <span className="social__rightbarInfoValue">{user.relationship===1 ? "Single" : user.relationship===2 ? "Married": "-"}</span>
          </div>
          </div>

          <h4 className="social__rightbarTitle">User Friends</h4>
          <div className="social__rightbarFollowings">
            <div className="social__rightbarFollowing">
              <img src={`${PF}person/1.jpeg`} alt="" className="social__rightbareFollowingImg"/>
              <span className="social__rightbarFollowingName">Jhon Doe</span>
              </div>

              <div className="social__rightbarFollowing">
                <img src={`${PF}person/2.jpeg`} alt="" className="social__rightbareFollowingImg"/>
                <span className="social__rightbarFollowingName">Jhon Doe</span>
                </div>

                <div className="social__rightbarFollowing">
                  <img src={`${PF}person/3.jpeg`} alt="" className="social__rightbareFollowingImg"/>
                  <span className="social__rightbarFollowingName">Jhon Doe</span>
                  </div>

                  <div className="social__rightbarFollowing">
                    <img src={`${PF}person/4.jpeg`} alt="" className="social__rightbareFollowingImg"/>
                    <span className="social__rightbarFollowingName">Jhon Doe</span>
                    </div>

                    <div className="social__rightbarFollowing">
                      <img src={`${PF}person/5.jpeg`} alt="" className="social__rightbareFollowingImg"/>
                      <span className="social__rightbarFollowingName">Jhon Doe</span>
                      </div>

                      <div className="social__rightbarFollowing">
                        <img src={`${PF}person/6.jpeg`} alt="" className="social__rightbareFollowingImg"/>
                        <span className="social__rightbarFollowingName">Jhon Doe</span>
                        </div>
          </div>

      </>
    )
  }
  return (
    <div className="social__rightbar">
      <div className="social__rightbarWrapper">
        {user ? <ProfileRightbar/> : <HomeRightbar/> }
      </div>

    </div>
  )
}

export default Rightbar
