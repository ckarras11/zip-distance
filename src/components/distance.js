import React from 'react';

const Distance = (props) => {
    return (
        <div>
            <h2>{`There are ${props.miles} miles between ${props.loc1} and ${props.loc2}`}</h2>
        </div>
    );
};

export default Distance;