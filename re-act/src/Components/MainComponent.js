//this component will contain all the state data
import React from 'react';
import data from "../everythingElse/cases";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Safe from './Howtostaysafe';
import { Switch, Route, Redirect } from "react-router-dom";
import { Component } from "react";
//Both presentation and container component
//Could render and contain state data
import Data from './DataComponent';
import App from '../App.css';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //state data
        }
    }

    render() {
        return (
            //presentational data
            <>
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/stayingsafe" component={Safe} />
                    <Route path="/data" component={Data} />
                </Switch>
            </>
        );
    }
}

export default Main;