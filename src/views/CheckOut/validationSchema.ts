import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    streetAddress: Yup.string().required('Required'),
    suburb: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    postCode: Yup.string().required('Required'),
    cardNumber: Yup.string().required('Required'),
    cardExpiry: Yup.string().required('Required'),
});
