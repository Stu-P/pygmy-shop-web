import React from 'react';
import { Stack, Heading, Text } from '@chakra-ui/core';
import LinkButton from 'components/LinkButton/LinkButton';
import { useParams } from 'react-router-dom';

const Confirmation = () => {
    const { orderId } = useParams();
    return (
        <>
            <Stack mb={4} alignItems="center" isInline>
                <Stack spacing={5}>
                    <Heading>Order Confirmation</Heading>
                    <Text>Your order is being processed, order number: {orderId}</Text>
                    <LinkButton variant="outline" variantColor="teal" to="/shop">
                        Back to shop
                    </LinkButton>
                </Stack>
            </Stack>
        </>
    );
};

export default Confirmation;
