import { createSelector } from 'reselect';


const selectStore = state => state.store;


export const selectCollections = createSelector(
    [selectStore],
    store => store.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections =>Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParams => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParams]
);