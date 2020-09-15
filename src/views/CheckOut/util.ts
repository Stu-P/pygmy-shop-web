import { CheckOutForm } from './types';

export const setInitialFormValues = (): CheckOutForm => {
    return {
        email: '',
        streetAddress: '',
        suburb: '',
        postCode: '',
        state: '',
        cardNumber: '',
        cardExpiry: '',
    };
};
