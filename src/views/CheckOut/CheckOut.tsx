import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { Stack, Heading, Divider, Button, Box, useToast } from '@chakra-ui/core';
import SelectedCartItem from 'components/ShoppingCart/SelectedCartItem';
import { CartItem } from 'store/cart/types';
import { AppState } from 'store';
import { useSelector } from 'react-redux';
import LinkButton from 'components/LinkButton/LinkButton';
import TextInput from 'components/form/TextInput';
import { setInitialFormValues } from './util';
import { validationSchema } from './validationSchema';
import { useHistory } from 'react-router-dom';
import { CheckOutForm, Order } from './types';

const CheckOut = () => {
    const toast = useToast();
    const history = useHistory();

    const shoppingCart = useSelector((state: AppState) => state.cart.shoppingCart);

    const handleSubmit = async (values: CheckOutForm, { setSubmitting }: FormikHelpers<CheckOutForm>) => {
        const orderRequest: Order = {
            shippingInfo: {
                email: values.email,
                streetAddress: values.streetAddress,
                suburb: values.suburb,
                state: values.state,
                postCode: values.postCode,
            },
            paymentInfo: {
                cardNumber: values.cardNumber,
                cardExpiry: values.cardExpiry,
            },
            orderItems: shoppingCart.map((item) => ({ id: item.id, quantity: item.quantity })),
        };

        setSubmitting(true);
        const url = `http://localhost:3001/orders`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(orderRequest),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                toast({
                    title: 'Campaign Saved',
                    description: `Order submitted`,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: 'top-right',
                });
                const body = await response.json();
                history.push(`/confirmation/${body.id}`);
            } else {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            toast({
                title: 'Unable to complete order',
                description: JSON.stringify(error),
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top-right',
            });
            setSubmitting(false);
        }
    };

    return (
        <Stack mb={4}>
            <Heading>Check Out</Heading>
            <Stack isInline justify="space-between">
                <Stack width="450px">
                    <Formik initialValues={setInitialFormValues()} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {(props) => (
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
                                        Confirm Purchase
                                    </Button>
                                </Stack>
                            </Form>
                        )}
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
