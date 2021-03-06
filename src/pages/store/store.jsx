import React from 'react'; 
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';

const StorePage = ({ match }) => (
    <div className='store-page'>
        <Route exact path={ `${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
    );

export default StorePage;