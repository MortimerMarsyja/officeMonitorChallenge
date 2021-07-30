import React from 'react'

const CoffeeComponent = ({ value }) => {
    return (<div className="widget" id="coffee">
        <div className="title">
            Coffee
        </div>
        <div className="content">
            {value}
        </div>
    </div>)
}

export default CoffeeComponent;