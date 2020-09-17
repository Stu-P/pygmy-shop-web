import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, CSSReset, Spinner } from '@chakra-ui/core';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import theme from 'theme';
import './App.css';

import configureStore from './store/index';
import Layout from 'views/Layout/Layout';

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

const store = configureStore();

const Products = lazy(() => import('views/Products/Products'));
const ProductDetails = lazy(() => import('views/ProductDetails/ProductDetails'));
const CheckOut = lazy(() => import('views/CheckOut/CheckOut'));
const Confirmation = lazy(() => import('views/Confirmation/Confirmation'));

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CSSReset />
                <Router>
                    <ErrorBoundary>
                        <Suspense fallback={<Spinner />}>
                            <Switch>
                                <Layout>
                                    <Route exact path="/" component={Products} />
                                    {/* <Redirect from="/" to="/shop" strict /> */}
                                    <Route path="/shop" component={Products} />
                                    <Route path="/product/:productId" component={ProductDetails} />
                                    <Route path="/checkout" component={CheckOut} />
                                    <Route path="/confirmation/:orderId" component={Confirmation} />
                                </Layout>
                            </Switch>
                        </Suspense>
                    </ErrorBoundary>
                </Router>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
