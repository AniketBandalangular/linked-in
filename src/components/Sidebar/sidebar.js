import React from 'react'
import './sidebar.css'
function Sidebar(props) {
  const {user}=props;
    return (
      <div className="sidebar">
        <div className="sidebar-first-section">
          <div className="sidebar_Img">
          </div>
          <div className="imagesection">
              
                <img className="avatar_Img" src={user.photoURL} alt=""/>
              
              <h2>{user.displayName}</h2>
              <h5>{user.email}</h5>
            </div>
          <div className="sidebar_stack">
            <div>Who viewed your profile</div>
            <h5>68</h5>
          </div>
          <div className="sidebar_stack">
            <div> Viewed of Your Post</div>
            <h5>236</h5>
            
          </div>
        </div>

        <div className="sidebar-second-section">
            <h3>Recent</h3>
            <div>#India</div>
            <div>#Reactjs</div>
            <div>#Redux</div>
            <div>#Javascript</div>
        </div>
      </div>
    );
}

export default Sidebar
