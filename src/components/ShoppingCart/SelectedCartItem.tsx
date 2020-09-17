import React from 'react';
import { Box, IconButton, Text, Image, Stack } from '@chakra-ui/core';
import { centsToDollars } from 'utils/moneyUtils';

type Props = {
    id: string;
    name: string;
    quantity: number;
    price: number;
    imageUri: string;
    imageAlt: string;
};

const SelectedCartItem: React.FC<Props> = ({ id, name, quantity, price, imageUri, imageAlt }) => {
    return (
        <Stack isInline justify="space-between" key={id}>
            <Stack>
                <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                    {name}
                </Box>
                <Text>Quantity:{quantity}</Text>
                <Text>Price: {centsToDollars(price)}</Text>
            </Stack>
            <Stack>
                <Box>
                    <Image width="75px" src={imageUri} alt={imageAlt} border="1px" color="black" />
                </Box>
                <Stack isInline>
                    <IconButton variantColor="blue" aria-label="remove" icon="minus" size="sm" isDisabled={true} />
                    <IconButton variantColor="blue" aria-label="add" icon="add" size="sm" isDisabled={true} />
                </Stack>
            </Stack>
        </Stack>
    );
};

export default SelectedCartItem;
