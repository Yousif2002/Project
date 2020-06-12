//Container data, not presentational
import React from 'react';
import {date, state, positive, negative} from "../everythingElse/cases";


function Data(props) {
    return (
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

export default Data;
