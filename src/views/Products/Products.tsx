import React from 'react';
import { Stack, Heading, SimpleGrid } from '@chakra-ui/core';
import ProductTile from 'components/ProductTile/ProductTile';
import { Product } from './types';
import { useDispatch } from 'react-redux';
import { addToCart } from 'store/cart/actions';

const products: Product[] = [
    {
        id: 'ae957816-01d5-47b7-8a1e-744c61c0204c',
        name: 'Bugdroid windup tool',
        stock: 5,
        price: 256,
        imageUri: 'https://pygmyshop-webcontent.s3-ap-southeast-2.amazonaws.com/thumbnail/ae957816-01d5-47b7-8a1e-744c61c0204c.jpg',
        imageAlt: 'Bugdroid',
    },
    {
        id: 'd38b8dd4-36af-491e-8f3f-1f30c5bbc78f',
        name: 'Wood puzzle',
        stock: 5,
        price: 256,
        imageUri: 'https://pygmyshop-webcontent.s3-ap-southeast-2.amazonaws.com/thumbnail/d38b8dd4-36af-491e-8f3f-1f30c5bbc78f.jpg',
        imageAlt: 'Wood puzzle',
    },
    {
        id: '538f383a-4cc5-41f1-a86f-e70660a0f914',
        name: 'Mini sports ball',
        stock: 5,
        price: 256,
        imageUri: 'https://pygmyshop-webcontent.s3-ap-southeast-2.amazonaws.com/thumbnail/538f383a-4cc5-41f1-a86f-e70660a0f914.jpg',
        imageAlt: 'Mini sportsball',
    },
    {
        id: '3038389a-6886-4fb3-becd-666e4f7583ee',
        name: 'Lego piece',
        stock: 5,
        price: 256,
        imageUri: 'https://pygmyshop-webcontent.s3-ap-southeast-2.amazonaws.com/thumbnail/3038389a-6886-4fb3-becd-666e4f7583ee.jpg',
        imageAlt: 'Lego piece',
    },
    {
        id: '495cc442-ab39-46a2-91be-6f83b218aac9',
        name: 'Rubber Ducky',
        stock: 5,
        price: 256,
        imageUri: 'https://pygmyshop-webcontent.s3-ap-southeast-2.amazonaws.com/thumbnail/495cc442-ab39-46a2-91be-6f83b218aac9.jpg',
        imageAlt: 'Rubber Ducky',
    },
    {
        id: '0630c6bc-ba35-4b3e-b725-82f3837a38f4',
        name: 'Pokerstars deck of cards',
        stock: 0,
        price: 256,
        imageUri: 'https://pygmyshop-webcontent.s3-ap-southeast-2.amazonaws.com/thumbnail/0630c6bc-ba35-4b3e-b725-82f3837a38f4.jpg',
        imageAlt: 'Pokerstars deck of cards',
    },
];

const Products = () => {
    const dispatch = useDispatch();

    return (
        <>
            <Stack isInline mb={4} alignItems="center">
                <Heading>Products</Heading>
            </Stack>
            <SimpleGrid minChildWidth={200} spacing={10}>
                {products.map((item) => (
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
