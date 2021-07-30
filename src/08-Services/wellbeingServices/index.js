



const foodStockGetter = () => {
  return Math.floor(Math.random() * 11);
}

const coffeeStockGetter = () => {
  return Math.floor(Math.random() * 110);
}

const temperatureGetter = () => {
  debugger;
  return (Math.random() * 36) / 100;
}

const getCoffeeStock = async () => {
  const response = await coffeeStockGetter();
  return response;
}

const getFridgeFoodStock = async () => {
  const response = await foodStockGetter();
  return response;
}

const getCurrentTemperature = async () => {
  const response = await temperatureGetter();
  return response;
}


export const wellbeingServices = {
  fridgeFoodStock: getFridgeFoodStock,
  coffeeStock: getCoffeeStock,
  currentTemperature: getCurrentTemperature,
}