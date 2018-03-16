import React from 'react';

const normalizeStr = (s) => {
    (s.charAt(0).concat(s.substr(1).toLowerCase())
}

const Distance = (props) => {
    return (
        <div>
            <h2>{`There are ${props.miles} miles between ${normalizeStr(props.loc1)} and ${normalizeStr(props.loc2)}`}</h2>
        </div>
    );
};

export default Distance;