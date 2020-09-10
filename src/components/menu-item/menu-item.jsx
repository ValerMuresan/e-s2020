import React from 'react';
import './menu-item.scss';
import { withRouter } from 'react-router-dom';
 
const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className={`${size} menu-item`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div 
        className='background-image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}></div>
        <div className='container'>
            <h1 className='title'>{title.toLowerCase()}</h1>
            <span className='subtitle'>Buy</span>
        </div>
   </div>
)
export default withRouter (MenuItem);