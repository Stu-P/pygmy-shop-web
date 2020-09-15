import { applyMiddleware, createStore, combineReducers, StoreEnhancer } from 'redux';
import persistState from 'redux-localstorage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { cartReducer } from './cart/reducers';

const rootReducer = combineReducers({
    cart: cartReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);
    const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer, persistState() as StoreEnhancer<any>));

    return store;
}
