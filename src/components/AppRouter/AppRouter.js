import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import Home from '../Home/Home';
import Services from '../services/Services';

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about-us">
                        <AboutUs />
                    </Route>
                    <Route path="/services">
                        <Services />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default AppRouter;