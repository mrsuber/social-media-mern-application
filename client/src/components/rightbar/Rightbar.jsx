import './Rightbar.css'
import img from '../../images/gift.png'
import img1 from '../../images/ad.png'
import {Users} from "../../data/data"
import {Online} from '../../components'
import {useEffect,useState,useContext} from 'react'
import axios from "axios"
import {AuthContext} from '../../context/AuthContext'
import {Add,Remove} from "@material-ui/icons"


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
    const [friends,setFriends]=useState([])
    const {user:currentUser,dispatch} = useContext(AuthContext)
    const [followed,setFollowed] = useState(currentUser.followings.includes(user?.id))
    useEffect(()=>{
      setFollowed(currentUser.followings.includes(user?.id))
    },[currentUser,user.id])

    useEffect(()=>{
      const getFriends = async ()=>{
        try{
          const friendList = await axios.get("/users/friends/"+user._id)
          setFriends(friendList.data)
        }catch(err){console.log(err)}
      }
      getFriends()
    },[user._id])

    const handleClick = async () =>{
      try{
        if(followed){
          await axios.put("/users/"+user._id+"/unfollow",{userId:currentUser._id})
          dispatch({type:"UNFOLLOW",payload:user._id})
        }else{
          await axios.put("/users/"+user._id+"/follow",{userId:currentUser._id})
            dispatch({type:"FOLLOW",payload:user._id})
        }
      }catch(err){console.log(err)}
      setFollowed(!followed)
    }

    return(
      <>
      {user.username !== currentUser.username && (
        <button className="social__rightbarfollowButton" onClick={handleClick}>
          {followed?"Unfollow" : "Follow"}
          {followed?<Remove/> : <Add/>}

        </button>
      )}
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
            {friends.map(friend=>(
              <div className="social__rightbarFollowing">
                <img src={friend.profilePicture
                          ? PF+friend.profilePicture
                          : PF+"noAvatar.png"
                        }
                         alt=""
                         className="social__rightbareFollowingImg"/>
                <span className="social__rightbarFollowingName">{friend.username}</span>
                </div>
            ))}



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
