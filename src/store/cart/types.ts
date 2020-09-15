export const ADD_TO_CART = 'cart/addToCart';
export const REMOVE_FROM_CART = 'cart/removeFromCart';
export const CLEAR_CART = 'cart/clearCart';

export interface CartState {
    shoppingCart: CartItem[];
}

export interface CartItem {
    id: string;
    name: string;
    quantity: number;
    price: number;
    imageUri: string;
    imageAlt: string;
}

interface AddToCartAction {
    type: typeof ADD_TO_CART;
    payload: CartItem;
}

interface RemoveFromCartAction {
    type: typeof REMOVE_FROM_CART;
    payload: CartItem;
}

interface ClearCartAction {
    type: typeof CLEAR_CART;
}

export type CartActionTypes = AddToCartAction | RemoveFromCartAction | ClearCartAction;
