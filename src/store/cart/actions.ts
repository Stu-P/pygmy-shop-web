import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, CartActionTypes, CartItem } from './types';

export function addToCart(cartItem: CartItem): CartActionTypes {
    return {
        type: ADD_TO_CART,
        payload: cartItem,
    };
}

export function removeFromCart(cartItem: CartItem): CartActionTypes {
    return {
        type: REMOVE_FROM_CART,
        payload: cartItem,
    };
}

export function clearCart(): CartActionTypes {
    return {
        type: CLEAR_CART,
    };
}
