import React from 'react';

const TemperatureComponent = ({ value }) => {
    return (<div className="widget" id="temp">
        <div className="title">
            Temperature
        </div>
        <div className="content" style={{ fontSize: '90px' }}>
            {value !== 22.5 ? (value * 100).toFixed(2) : value.toFixed(2)}c
        </div>
    </div >)
}

export default TemperatureComponent;