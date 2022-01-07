import { getAuth, signOut } from 'firebase/auth';
import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../features/counter/userSlice';
import '../Header/header.css';
import HeaderOption from './headerOption';
// import HomeIcon from '@material-ui/icons/Home';
// import SupervisorAccountIcon from '@material-ui/icons/Super/visorAccount';

// import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
function Header(props) {
    const {user}=props;
    const auth = getAuth();
    const dispatch = useDispatch();

    const logoutFromApp = () =>{
        dispatch(logout())
        signOut(auth)
    }
    return (
        <div className="header">
         
            <div className="header-left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo"/>
                <div className="header_search">
                    {/* <SupervisorAccountIcon /> */}
                    <i className="fa fa-search"></i>
                    <input type="text" />
                </div>
            </div>
            <div className="header-Right">
                <HeaderOption Icon="fa fa-home" title="Home" clickFunction={()=>{}}/>
                <HeaderOption Icon="fa fa-users" title = "My Network" clickFunction={()=>{}} />
                <HeaderOption Icon="fa fa-briefcase" title = "Jobs" clickFunction={()=>{}} />
                <HeaderOption Icon="fa fa-envelope" title = "Messaging" clickFunction={()=>{}} />
                <HeaderOption Icon="fa fa-bell" title = "Notification" clickFunction={()=>{}} />
                <HeaderOption avtar={user.photoURL} title = "Me" clickFunction={logoutFromApp}/>
            </div>
        </div>
    )
}

export default Header
