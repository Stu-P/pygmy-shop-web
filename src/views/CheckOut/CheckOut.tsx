import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Stack, Heading, Divider, Text, Input, Button, Box } from '@chakra-ui/core';
import SelectedCartItem from 'components/ShoppingCart/SelectedCartItem';
import { CartItem } from 'store/cart/types';
import { AppState } from 'store';
import { useSelector } from 'react-redux';
import LinkButton from 'components/LinkButton/LinkButton';
import TextInput from 'components/form/TextInput';
import { setInitialFormValues } from './util';
import { validationSchema } from './validationSchema';
import { validatation } from './validation';

const CheckOut = () => {
    const shoppingCart = useSelector((state: AppState) => state.cart.shoppingCart);

    return (
        <Stack mb={4}>
            <Heading>Check Out</Heading>
            <Stack isInline justify="space-between">
                <Stack width="450px">
                    <Formik
                        initialValues={setInitialFormValues()}
                        validate={validatation}
                        //validationSchema={validationSchema}
                        onSubmit={async (values) => {
                            await new Promise((resolve) => setTimeout(resolve, 500));
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        <Form>
                            <Stack spacing={2} shadow="md" borderWidth="1px" p={2}>
                                <TextInput placeholder="E-Mail Address" name="email" label="E-Mail Address" />
                                <Divider />
                                <TextInput placeholder="Street Address" name="streetAddress" label="Street Address" />
                                <TextInput placeholder="Suburb" name="suburb" label="Suburb" />
                                <TextInput placeholder="State" name="state" label="State" />
                                <TextInput placeholder="Post Code" name="postCode" label="Post Code" />
                                <Divider />
                                <TextInput placeholder="Card Number" name="cardNumber" label="Credit Card Number" />
                                <TextInput placeholder="MM/YY" name="cardExpiry" label="Credit Card Expiry" />

                                <Button type="submit" variantColor="teal">
                                    Submit
                                </Button>
                            </Stack>
                        </Form>
                    </Formik>
                </Stack>

                <Stack width="400px" borderWidth="1px" pt={5} pr={20} pl={20}>
                    <LinkButton variantColor="teal" variant="outline" to="/shop">
                        Continue Shopping
                    </LinkButton>
                    <Box></Box>
                    <Heading size="lg"> Your cart</Heading>
                    <Divider />

                    {shoppingCart.map((item: CartItem) => (
                        <Stack key={item.id}>
                            <SelectedCartItem
                                name={item.name}
                                id={item.id}
                                quantity={item.quantity}
                                price={item.price * item.quantity}
                                imageUri={item.imageUri}
                                imageAlt={item.imageAlt}
                            />
                            <Divider />
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};

export default CheckOut;
