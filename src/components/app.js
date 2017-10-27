import React from 'react';
import {Route} from 'react-router-dom';
import Welcome from './welcome';
import Nav from './nav';
import OurMacarons from './our_macarons';
import GiftsParties from './gifts_parties';
import Contact from './contact';

export default () =>{
    return (
        <div>
            <Nav/>
            <Route exact path="/" component={Welcome}/>
            <Route path="/our_macarons" component={OurMacarons}/>
            <Route path="/gifts_parties" component={GiftsParties}/>
            <Route path="/contact" component={Contact}/>
        </div>
    )
}

