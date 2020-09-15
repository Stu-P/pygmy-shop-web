import React from 'react';

import { Box, Image, Flex, IconButton, useDisclosure, Heading } from '@chakra-ui/core';
import { FaShoppingCart } from 'react-icons/fa';
import ShoppingCart from 'components/ShoppingCart/ShoppingCart';

const TopNav = () => {
    const { onOpen, isOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding="1rem"
                bg="gray.900"
                color="teal.300"
                borderBottom="1px solid black"
            >
                <Flex align="center" mr={5}>
                    <Image src="logo.png" alt="logo" paddingRight="1rem" />

                    <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
                        pygmy e-commerce shop
                    </Heading>
                </Flex>

                <Box display="block" mt={{ base: 4, md: 0 }}>
                    <IconButton
                        aria-label="Shopping Cart"
                        icon={FaShoppingCart}
                        onClick={onOpen}
                        variant="outline"
                        size="lg"
                        variantColor="teal"
                    />
                </Box>
            </Flex>
            <ShoppingCart isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default TopNav;
