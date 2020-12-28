import { React, useState, memo } from "react";
import { Card } from "antd";

const InfoWeather = memo(({ dataWeather, getDataApi }) => {
  const [value, setValue] = useState("");

  const onChangeNameCity = (e) => {
    setValue(e.target.value);
  };

  const pushName = () => {
    getDataApi(value);
  };

  const data = dataWeather;

  return (
    <div className="site-card-border-less-wrapper">
      <Card title="Weather" bordered={false} style={{ width: 300 }}>
        <div className="container-card__content">
          <span className="container-card__content_city-name">{data.name}</span>
          {data.name !== undefined ? (
            <div className="container-card__content-info">
              <span className="container-card__content-info_temperature">
                {Math.round(data.main.temp - 273)} &#8451;
              </span>
              <span className="container-card__content-info_main">{data.weather[0].main}</span>
              <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Weather icon" />
              <span className="container-card__content-info_wind">wind - {data.wind.speed}m/s</span>
              <span className="container-card__content-info_wind">cloud - {data.weather[0].description}</span>
              <span className="container-card__content-info_humidity">humidity - {data.main.humidity}%</span>
            </div>
          ) : (
            "hello"
          )}
        </div>
        <div className="card-form">
          <input
            className="card-form__input"
            onChange={onChangeNameCity}
            type="text"
            defaultValue={value}
            placeholder={"enter city name"}
          />
          <button className="card-form__btn" onClick={pushName} type="primary">
            choose city
          </button>
        </div>
      </Card>
    </div>
  );
});

export default InfoWeather;
