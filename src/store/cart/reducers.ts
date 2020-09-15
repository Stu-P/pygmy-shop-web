import { reject } from 'lodash';
import { CartState, CLEAR_CART, REMOVE_FROM_CART, ADD_TO_CART, CartActionTypes } from './types';

const initialState: CartState = {
    shoppingCart: [],
};

export function cartReducer(state = initialState, action: CartActionTypes): CartState {
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, action.payload],
            };
        }
        case REMOVE_FROM_CART: {
            return {
                ...state,
                shoppingCart: reject(state.shoppingCart, action.payload),
            };
        }
        case CLEAR_CART: {
            return {
                ...state,
                shoppingCart: [],
            };
        }
        default:
            return state;
    }
}
