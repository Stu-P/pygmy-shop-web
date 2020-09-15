import React, { MouseEventHandler } from 'react';
import { Box, Button, Image } from '@chakra-ui/core';

type Props = {
    id: string;
    name: string;
    stock: number;
    price: number;
    imageUri: string;
    imageAlt: string;
    onAddToCart: MouseEventHandler<HTMLButtonElement>;
};

const ProductTile: React.FC<Props> = ({ id, name, stock, price, imageUri, imageAlt, onAddToCart }) => {
    return (
        <>
            <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
                <Image src={imageUri} alt={imageAlt} />

                <Box p="6">
                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                        {name}
                    </Box>

                    <Box>{price.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', minimumFractionDigits: 2 })}</Box>

                    <Box d="flex" mt="2" alignItems="center">
                        {stock > 0 ? (
                            <Button variantColor="teal" onClick={onAddToCart}>
                                Add to Cart
                            </Button>
                        ) : (
                            <Button variantColor="teal" isDisabled={true}>
                                Out of stock
                            </Button>
                        )}
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default ProductTile;
