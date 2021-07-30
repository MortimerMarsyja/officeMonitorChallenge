import React from 'react';

const FridgeComponent = ({ value }) => {
    return (<div className="widget" id="fridge">
        <div className="title">
            Fridge
        </div>
        <div className="content">
            {value}
        </div>
    </div>
    )
}

export default FridgeComponent;