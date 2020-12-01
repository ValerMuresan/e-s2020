import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionShow from '../collection/collection';
import { selectCollectionsForPreview } from '../../redux/store-redux/store.selectors';
import './collections-overview.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
            {
            collections.map(({ id, ...otherCollectionsProps}) => (
                <CollectionShow key={id} {...otherCollectionsProps}/>
            ))
            }
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionsOverview);