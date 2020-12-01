import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/store-redux/store.selectors';
import './collection.scss';
import CollectionItem from '../../components/collection-item/collection-item';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h3 className='title'>{ title }</h3>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);