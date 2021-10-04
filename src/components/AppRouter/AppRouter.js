import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import Home from '../Home/Home';

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default AppRouter;