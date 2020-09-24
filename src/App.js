import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="weatherApp">
            <div className="row">
              <div className="col-6">
                <div className="currentTime">16:00</div>
              </div>
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Search City..."
                  className="searchCity"
                />
                <button className="searchButton">
                  <i className="fas fa-search shadow-sm"></i>
                </button>
              </div>
            </div>

            <h1 className="cityName">Paris</h1>
            <p className="date-today">Today - September 24th</p>
            <h2 className="rowGrouping">
              <div className="row">
                <div className="col-4 mainWeatherEmoji">
                  <i className="fas fa-sun"></i>
                </div>
                <div className="col-4 temperature-today">16°C</div>

                <div className="col-4">
                  <ul className="list-unstyled weatherDetails">
                    <li className="today-specifications">Cloudy</li>
                    <li>Humidity: 15%</li>
                    <li>Wind: 2 km/h</li>
                  </ul>
                </div>
              </div>
            </h2>
            <div className="card card2">
              <div className="card-body">
                <div className="row forecastList">
                  <div className="col">
                    <div className="day1 forecastGroup">
                      <div className="dayName">Thu</div>

                      <i className="fas fa-cloud-sun forecastEmoji"></i>
                      <br />
                      <div className="day1Temperature">
                        <div className="forecastHighTemp">27°C</div>

                        <div className="forecastLowTemp">17°C</div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="day2 forecastGroup">
                      <div className="dayName">Fri</div>

                      <i className="fas fa-sun forecastEmoji"></i>
                      <br />
                      <div className="day2Temperature">
                        <div className="forecastHighTemp">27°C</div>

                        <div className="forecastLowTemp">17°C</div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="day3 forecastGroup">
                      <div className="dayName">Sat</div>

                      <i className="fas fa-cloud-sun forecastEmoji"></i>
                      <br />
                      <div className="day3Temperature">
                        <div className="forecastHighTemp">27°C</div>

                        <div className="forecastLowTemp">17°C</div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="day4 forecastGroup">
                      <div className="dayName">Sun</div>

                      <i className="fas fa-cloud-sun forecastEmoji"></i>

                      <div className="day4Temperature">
                        <div className="forecastHighTemp">27°C</div>

                        <div className="forecastLowTemp">17°C</div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="day5 forecastGroup">
                      <div className="dayName">Mon</div>

                      <i className="fas fa-cloud-sun forecastEmoji"></i>
                      <br />
                      <div className="day5Temperature">
                        <div className="forecastHighTemp">27°C</div>

                        <div className="forecastLowTemp">17°C</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
