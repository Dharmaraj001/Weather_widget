import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Infobox from "./Infobox";

export default function Searchbox() {

  let [weatherInfo, setWeatherInfo] = useState(null);

  let [city, setcity] = useState("");

  let [loading, setLoading] = useState(false);

    useEffect(() => {
    getWeatherInfo("Bangalore"); // default city
  }, []);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "85756b0ac79b654fdadf9c9705efa2d4";

 let getWeatherInfo = async (city) => {

  setLoading(true);

  try {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    let jsonres = await response.json();

    let result = {
      city: jsonres.name,
      country: jsonres.sys.country,
      Temp: jsonres.main.temp,
      TempMin: jsonres.main.temp_min,
      TempMax: jsonres.main.temp_max,
      Humidity: jsonres.main.humidity,
      feelsLike: jsonres.main.feels_like,
      Wheather: jsonres.weather[0].description,
    };

    setWeatherInfo(result);

  } catch (err) {
    console.log(err.message);
    setWeatherInfo(null);
  } finally {
    setLoading(false);   // ⭐ THIS WAS MISSING
  }
};

  let handlechange = (evt) => {
    setcity(evt.target.value);
  };

  let handlesubmit = (evt) => {
    evt.preventDefault();
    getWeatherInfo(city);
    setcity("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400">

      {/* Card Container */}
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-[650px] flex flex-col items-center gap-6">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-700">
          Weather App 🌤
        </h1>

        {/* Form */}
        <form onSubmit={handlesubmit} className="w-full flex flex-col gap-4">

          <TextField
            id="City"
            label="Enter City Name"
            variant="outlined"
            required
            fullWidth
            value={city}
            onChange={handlechange}
          />

          <Button
            variant="contained"
            type="submit"
            fullWidth
            className="!bg-blue-500 hover:!bg-blue-600 !text-white !font-semibold !py-2 !rounded-lg !shadow-md"
          >
            Get Weather
          </Button>

        </form>

        {/* Info Box inside same card */}
        <div className="w-full mt-4">
          <Infobox info={weatherInfo} loading={loading} />
        </div>

      </div>

    </div>
  );
}