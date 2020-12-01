import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import menuContainerReducer from './menu-container-redux/menu-container.reducer';
import storeReducer from './store-redux/store.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}
const rootReducer = combineReducers ({
    user: userReducer,
    cart: cartReducer,
    menuContainer: menuContainerReducer,
    store: storeReducer
});

export default persistReducer (persistConfig, rootReducer);