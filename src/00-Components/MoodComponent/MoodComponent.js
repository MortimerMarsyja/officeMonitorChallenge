import React from 'react';

const MoodComponent = ({ wellbeing }) => {
    const isBadTemperature = wellbeing.temperature <= 20 || wellbeing.temperature >= 28;
    const coffeeShortage = wellbeing.coffee < 6;
    const foodShortage = wellbeing.fridge < 5;
    const moodArr = [isBadTemperature, coffeeShortage, foodShortage];
    console.log(moodArr)
    const handleShowIcon = () => {
        const casualties = moodArr.filter(item => item === true).length;
        if (casualties === 0) return <p>&#9788;</p>
        if (casualties === 1) return <p>&#9730;</p>
        if (casualties === 2) return <p>&#9748;</p>
        if (casualties === 3) return <p>&#9889;</p>
    }

    return (<div className="widget" id="mood">
        <div className="title">
            Mood
        </div>
        <div className="content" sytle={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            {handleShowIcon()}
        </div>
    </div >)
}

export default MoodComponent;