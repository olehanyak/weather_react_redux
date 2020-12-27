import { React } from "react";
import { connect } from "react-redux";
import { getDataApi } from "../../redux/reducers/weatherReducer";
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
    dataWeather: state.weatherPage.name,
  };
};

const mapDispatchToProps = {
  getDataApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
