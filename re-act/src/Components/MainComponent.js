//this component will contain all the state data
import React from 'react';
import { Component } from "react";
import Covid from '../everythingElse/cases';
import data from "../everythingElse/cases";
import {date, state, positive, negative} from "../everythingElse/cases";
import App from '../App.css';


//Created a main component
//this will only hold data and won't be rendering anything
// this is optional but makes the project more organized, we could make another componen
class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return(
            <>
            <span className="positive">
                {`Positive: ${positive}`} <br />
            </span>
            <span className="negative">
                {`Negative: ${negative}`} <br />
            </span>
            <span className="state">
                {`State: ${state}`} <br />
            </span>
            <span className="date">
                {`Current date: ${date}`} <br />
            </span>
            </>
        );
    }
}

export default Main;