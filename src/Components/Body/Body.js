import axios from 'axios';
import React, { useState } from 'react';
import Location from '../Map/Location';
import Map from '../Map/Map';
import './Body.css';


export default function Body() {
    const [country, setCountry] = useState('');
    const [covidCase, setCovidCase] = useState(null);

    const getCovidData = () => {
        axios
            .get('https://api.covid19api.com/summary')
            .then((response) => response.data)
            .then((data) => {
                setCovidCase(data.Countries);
            });
    };

    const filteredCountry = covidCase
        ? covidCase.find((item) => item.Country.includes(country))
        : null;

    return (
        <div id="body">
            <div id="column-left" className="column">

                <div id="choose-geoloc-filter">
                    <Location />
                    <div id="input-filter" className="filter">
                        <input
                            name="pays"
                            className="input top-margin"
                            placeholder="Country"
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                        <button
                            id="choose-country"
                            className="top-margin button bottom-margin"
                            onClick={getCovidData}
                        >
                            Select country
                        </button>
                        {filteredCountry != null ? (
                            <div 
                                className={`selection ${country ? 'selected' : ''}`}
                                id="fetched-data-API"
                            >
                                <h4>Results for {filteredCountry?.Country}</h4>
                                <p>Total confirmed cases: {filteredCountry.TotalConfirmed}</p>
                                <p>Total recovered persons: {filteredCountry.TotalRecovered}</p>
                                <p>Total deaths: {filteredCountry.TotalDeaths}</p>
                            </div>
                        ) : null
                        }
                    </div>
                </div>
            </div>

            <div id="column-right" className="map">
                <div id="search-result">
                    <Map />
                </div>
            </div>
        </div>
    );
}