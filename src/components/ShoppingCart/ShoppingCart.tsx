import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SelectedCartItem from './SelectedCartItem';
import {
    Stack,
    Text,
    Box,
    Divider,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Button,
    DrawerFooter,
} from '@chakra-ui/core';

import { CartItem } from 'store/cart/types';
import { AppState } from 'store';
import { clearCart } from 'store/cart/actions';
import LinkButton from 'components/LinkButton/LinkButton';
import { centsToDollars } from 'utils/moneyUtils';

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const ShoppingCart: React.FC<Props> = ({ isOpen, onClose }) => {
    const shoppingCart = useSelector((state: AppState) => state.cart.shoppingCart);
    const dispatch = useDispatch();

    return (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Your shopping cart</DrawerHeader>

                <DrawerBody>
                    <Stack>
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

                        <Stack isInline justify="space-between">
                            <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                                Total Price
                            </Box>
                            <Text>{centsToDollars(shoppingCart.map((item) => item.price).reduce((a, b) => a + b, 0))}</Text>
                        </Stack>
                    </Stack>
                </DrawerBody>

                <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="outline" mr={3} onClick={() => dispatch(clearCart())}>
                        Clear
                    </Button>
                    <LinkButton to="/checkout" variantColor="teal">
                        Check Out
                    </LinkButton>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default ShoppingCart;
