import React from 'react';

const norm = (s) => s.toLowerCase().replace(/\b[a-z]/g, (f) => f.toUpperCase())

const Distance = ({miles, loc1, loc2}) => {
    return (
        <div>
            <h2>{`There are ${miles} miles between ${norm(loc1)} and ${norm(loc2)}`}</h2>
        </div>
    );
};

export default Distance;