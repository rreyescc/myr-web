import React from 'react';
import { BrowserRouter as Router,
         Route,
        Switch } from 'react-router-dom';
import { ContactoPage } from '../components/ContactoPage';
import { HomePage } from '../components/HomePage';
import { ServiciosPage } from '../components/ServiciosPage';
import { Navbar } from '../components/Navbar/Navbar';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/home" component={ HomePage } />
                <Route path="/contacto" component={ ContactoPage } />
                <Route path="/servicios" component={ ServiciosPage } />
            </Switch>  
        </Router>
    )
}
