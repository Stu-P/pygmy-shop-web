import React from 'react';
import { Box, Flex } from '@chakra-ui/core';
// import Navbar from './Navbar/Navbar';
import Topbar from './TopNav/TopNav';

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => (
    <Flex direction={{ base: 'column', md: 'row' }} height="100vh" bg="grey.50">
        <Box>{/* <Navbar /> */}</Box>
        <Box flexBasis={0} flexGrow={99999} minWidth={320} height="100%" overflowY="hidden">
            <Topbar />
            <Box color="gray.700" height="100%" overflowY="auto" p={6}>
                {children}
            </Box>
        </Box>
    </Flex>
);

export default Layout;
