
import { weatherAPI } from "../../api/api";

const initialState = {
  name: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_WEATHER: {
      return {
        ...state,
        name: action.name,
      };
    }
    default: return state;
  }
};

export default weatherReducer;

const GET_DATA_WEATHER = "GET_DATA_WEATHER/TEST";

export const getDataWeather = (name) => {
  return {
    type: GET_DATA_WEATHER,
    name,
  }
};

export const getDataApi = (nameCity) => {
  return async (dispatch) => {
    const response = await weatherAPI.getDataWeather(nameCity);
    dispatch(getDataWeather(response));
  }
};

