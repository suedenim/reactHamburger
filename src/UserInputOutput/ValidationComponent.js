import React from 'react';

const ValidationComponent = ( props ) => {

    const checkLength = () => {
        return props.textLength > props.minLength ? "too long" : "too short";
    }

    return (
        <div>
            <p>{checkLength()}</p>
        </div>
    )
};

export default ValidationComponent;