import React, { Component } from 'react';
import { Alert, AlertIcon, Button } from '@chakra-ui/core';

type Props = {
    children: React.ReactNode;
};

type State = {
    error: string;
    hasError: boolean;
};

export default class ErrorBoundary extends Component<Props, State> {
    state = {
        error: '',
        hasError: false,
    };

    static getDerivedStateFromError(error: boolean) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error | null, info: {}) {
        // Could log the error to an error reporting service here
    }

    render() {
        if (this.state.hasError) {
            return (
                <Alert status="error">
                    <AlertIcon />
                    There was an error processing your request
                    <Button onClick={() => window.location.reload()} variant="link" ml={2}>
                        Reload
                    </Button>
                </Alert>
            );
        }

        return this.props.children;
    }
}
