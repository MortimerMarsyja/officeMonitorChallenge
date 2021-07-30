

const reducers = {
    default: state => state,
    UPDATE_FRIDGE_VALUE:(state,payload) => ({...state,fridge:payload}),
    UPDATE_TEMPERATURE_VALUE:(state,payload) => ({...state,temperature:payload}),
    UPDATE_COFFEE_VALUE:(state,payload) => ({...state,coffee:payload}),
}

export const wellbeingReducer = (state = {fridge:8,coffee:6,temperature:22.5},action) => {
    return (reducers[action.type]||reducers.default)(state,action.payload)
}


