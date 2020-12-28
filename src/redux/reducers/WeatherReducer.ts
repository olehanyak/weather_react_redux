
import { weatherAPI } from "../../api/api";

const initialState = {
  dataOfWeather: null as [] | null,
};

type InitialStateType = typeof initialState;
let newState: InitialStateType = {
  dataOfWeather: [],
};

const weatherReducer = (state = newState, action: any): InitialStateType => {
  switch (action.type) {
    case GET_DATA_WEATHER: {
      return {
        ...state,
        dataOfWeather: action.data,
      };
    }
    default: return state;
  }
};

export default weatherReducer;

const GET_DATA_WEATHER = "GET_DATA_WEATHER/TEST";
type GetDataWeatherType = {
  type: typeof GET_DATA_WEATHER,
  data: {},
}

export const getDataWeather = (data: {}): GetDataWeatherType => {
  let action: GetDataWeatherType = {
    type: GET_DATA_WEATHER,
    data,
  }
  return action;
};

export const getDataApi = (nameCity: string) => {
  return async (dispatch: any) => {
    const response = await weatherAPI.getDataWeather(nameCity);
    console.log(response);

    dispatch(getDataWeather(response));
  }
};

