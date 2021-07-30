//Deps
import React, { useState, useEffect } from 'react';
//Components
import FridgeComponent from '../../00-Components/FridgeComponent/FridgeComponent';
import CoffeeComponent from '../../00-Components/CoffeeComponent/CoffeeComponent';
import TemperatureComponent from '../../00-Components/TemperatureComponent/TemperatureComponent';
import MoodComponent from '../../00-Components/MoodComponent/MoodComponent';
//Hooks
import { useSelector, useDispatch } from 'react-redux';
// Services
import { wellbeingServices } from '../../08-Services/wellbeingServices';

const getWellBeingFromStore = (store) => store.wellbeing;
const MINUTE_MS = 6000;

const MainPage = () => {
    const wellbeing = useSelector(getWellBeingFromStore);
    const dispatch = useDispatch()
    const getCoffeeStock = async () => {
        const response = await wellbeingServices.coffeeStock();
        dispatch({ type: "UPDATE_COFFEE_VALUE", payload: response })
    }

    const getCurrentTemperature = async () => {
        const response = await wellbeingServices.currentTemperature();
        dispatch({ type: "UPDATE_TEMPERATURE_VALUE", payload: response })
    }

    const getFridgeContent = async () => {
        const response = await wellbeingServices.fridgeFoodStock();
        dispatch({ type: "UPDATE_FRIDGE_VALUE", payload: response })
    }


    useEffect(() => {
        const interval = setInterval(() => {
            console.log(wellbeing, 'I am whats in store?');
            getFridgeContent()
            getCoffeeStock()
            getCurrentTemperature()
        }, MINUTE_MS);
        return () => clearInterval(interval);
    })
    return (
        <>
            <header>
                <img alt="bear logo" id="logo" src="http://app.edited.com/static/img/logo.svg" />
            </header>
            <section id="office">
                <div className="clearfix">
                    {wellbeing && <FridgeComponent value={wellbeing.fridge} />}
                    {wellbeing && <CoffeeComponent value={wellbeing.coffee} />}
                    {wellbeing && <TemperatureComponent value={wellbeing.temperature} />}
                    {wellbeing && <MoodComponent wellbeing={wellbeing} />}
                </div>
            </section>
        </>
    )
}

export default MainPage;