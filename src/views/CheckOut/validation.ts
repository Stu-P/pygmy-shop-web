import { CheckOutForm } from './types';
import { FormikFormProps, FormikErrors } from 'formik';

export const validatation = (values: CheckOutForm): FormikErrors<CheckOutForm> => {
    const errors: FormikErrors<CheckOutForm> = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    //...

    return errors;
};
