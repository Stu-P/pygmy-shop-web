export interface CheckOutForm {
    email: string;
    streetAddress: string;
    suburb: string;
    state: string;
    postCode: string;
    cardNumber: string;
    cardExpiry: string;
}

export interface ShippingInfo {
    email: string;
    streetAddress: string;
    suburb: string;
    state: string;
    postCode: string;
}

export interface PaymentInfo {
    cardNumber: string;
    cardExpiry: string;
}

export interface OrderItem {
    id: string;
    quantity: number;
}

export interface Order {
    shippingInfo: ShippingInfo;
    paymentInfo: PaymentInfo;
    orderItems: OrderItem[];
}
