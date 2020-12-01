import Store_Data from './store.data';
const INITIAL_STATE = {
    collections: Store_Data
}
const storeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: return state
    }
}
export default storeReducer;