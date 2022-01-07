import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined';
import './widget.css';
const Widget = () => {

    const NewsArticle =({heading , subtitle}) =>(
        <div className="widget_article">
            <div className="widget_article_left">
                <AnnouncementOutlinedIcon />
            </div>
            <div className="widget_article_right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widget">
            <div className="widget_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            <NewsArticle heading="hello" subtitle="Welcome into linkedIn" /> 
        </div>
    )
}

export default Widget
