import React from 'react';
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/core';
import { FormControlProps } from '@chakra-ui/core/dist/FormControl';
import { Field, FieldProps, FieldInputProps, FormikProps } from 'formik';

type Props = {
    name: string;
    label: string;
    placeholder?: string;

    validate?: (val: any) => string | undefined;
} & FormControlProps;

const TextInput: React.FC<Props> = ({ name, label, placeholder, validate, ...rest }) => (
    <Field name={name} validate={validate}>
        {({ field, form }: FieldProps) => (
            <FormControl isInvalid={Boolean(form.errors.name) && Boolean(form.touched.name)} {...rest}>
                <FormLabel fontSize="smaller" htmlFor="name">
                    {label}
                </FormLabel>
                <Input
                    {...field}
                    id={name}
                    placeholder={placeholder}
                    size="sm"
                    borderColor="gray.400"
                    focusBorderColor="teal.500"
                    _hover={{ borderColor: 'gray.500' }}
                />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
            </FormControl>
        )}
    </Field>
);

export default TextInput;
