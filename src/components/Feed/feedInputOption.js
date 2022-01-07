import React from 'react';
import './feedInputOption.css'

export default function FeedInputOption({Icon,title,color}) {
    return (
        <div className="InputOption">
            <i className={Icon} style={{color:color}}></i>
            <h4>{title}</h4>
        </div>
    )
}
