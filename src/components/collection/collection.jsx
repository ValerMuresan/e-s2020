import React from 'react';
import './collection.scss';
import CollectionItem from '../collection-item/collection-item.jsx';

const CollectionShow = ({ title, items}) => (
<div className='collection-show'>
    <h1 className='title'> {title.toUpperCase()}</h1>
    <div className='show'>
        {items
        .filter((item, index) => index < 4)
        .map(({id, ...otherItemProps}) => (
            <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
</div>
);
export default CollectionShow;