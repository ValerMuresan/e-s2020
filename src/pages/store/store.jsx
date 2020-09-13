import React from 'react';
import Store_Data from './store.data.jsx';
import CollectionShow from '../../components/collection/collection.jsx';

class StorePage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: Store_Data
        };
    }
    render() {
        const { collections } = this.state;
        return (<div className='store-page'>
            {
                collections.map(({ id, ...otherCollectionsProps}) => (
                    <CollectionShow key={id} {...otherCollectionsProps}/>
                ))
            }
        </div>);
    }
}
export default StorePage;