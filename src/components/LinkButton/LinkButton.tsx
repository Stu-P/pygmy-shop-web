import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/core';
import { ButtonProps } from '@chakra-ui/core/dist/Button';
import { Link as ReactRouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

type Props = ButtonProps & RouterLinkProps;

// This component is required due to an open issue in the chakra-ui library: https://github.com/chakra-ui/chakra-ui/issues/148
// Once the issue is closed this component may no longer be required
const LinkButton = React.forwardRef((props: Props, ref: React.Ref<any>) => {
    return <ChakraButton ref={ref} as={ReactRouterLink} {...props} />;
});

export default LinkButton;
