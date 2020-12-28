import { React } from "react";
import { connect } from "react-redux";
import { getDataApi } from "../../redux/reducers/WeatherReducer";
import InfoWeather from "./InfoWeather";

const Weather = (props) => {
 
  return (
    <div className="container-card">
      <InfoWeather dataWeather={props.dataWeather} getDataApi={props.getDataApi} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dataWeather: state.weatherPage.dataOfWeather,
  };
};

const mapDispatchToProps = {
  getDataApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
