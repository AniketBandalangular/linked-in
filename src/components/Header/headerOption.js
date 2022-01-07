import React from 'react'
import './headerOption.css'
// import Avatar from '@material-ui/core/Avatar';
function HeaderOption({Icon , title ,avtar,clickFunction}) {
    return (
        <div className="headerOptions" onClick={clickFunction}>
            {Icon && <i className={`headerOption_Icon ${Icon}`}></i>}
            {avtar &&  <img className="avatar" src={avtar} alt="A" /> }
            {title && <h5 className="headerOption_title">{title}</h5>}
        </div>
    )
}

export default HeaderOption
