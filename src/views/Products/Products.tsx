import React from 'react';
import { Stack, Heading, SimpleGrid, Alert, AlertIcon, Spinner } from '@chakra-ui/core';
import ProductTile from 'components/ProductTile/ProductTile';
import { Product } from './types';
import { useDispatch } from 'react-redux';
import { addToCart } from 'store/cart/actions';
import useFetch from 'hooks/useFetch';

const Products = () => {
    const dispatch = useDispatch();

    const getProducts = useFetch<Product[]>(`http://localhost:3001/products`);

    return (
        <>
            <Stack isInline mb={4} alignItems="center">
                <Heading>Products</Heading>
            </Stack>
            {getProducts.isLoading && <Spinner />}
            {getProducts.error && (
                <Alert status="error">
                    <AlertIcon />
                    There was an error processing your request
                </Alert>
            )}
            <SimpleGrid minChildWidth={200} spacing={10}>
                {getProducts.response?.map((item) => (
                    <ProductTile
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        stock={item.stock}
                        price={item.price}
                        imageUri={item.imageUri}
                        imageAlt={item.imageAlt}
                        onAddToCart={(e) => {
                            e.preventDefault();
                            dispatch(addToCart({ ...item, quantity: 1 }));
                        }}
                    ></ProductTile>
                ))}
            </SimpleGrid>
        </>
    );
};

export default Products;
