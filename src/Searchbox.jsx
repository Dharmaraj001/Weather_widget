import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Searchbox() {

    let [city, setcity] = useState("")

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "85756b0ac79b654fdadf9c9705efa2d4"

    let getWeatherInfo = async (city) => {
    try {
        let response = await fetch(
            `${API_URL}?q=${city},IN&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        let jsonres = await response.json();
        console.log(jsonres);
        let result = {
          temp : jsonres.main.temp,
          tempmin : jsonres.main.temp_min,
          tempmax : jsonres.main.temp_max,
          humidity: jsonres.main.humidity,
          feelslike : jsonres.main.feels_like,
          weather : jsonres.weather[0].description,
        }
        console.log(result);
    } catch (err) {
        console.log(err.message);
    }
}


    let handlechange = (evt) => {
        setcity(evt.target.value)
    }

    let handlesubmit = (evt) =>{
        evt.preventDefault();
        console.log(city);
        setcity("")
        getWeatherInfo(city);
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[350px] text-center">
        
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">
          Search Weather
        </h3>

        <form onSubmit={handlesubmit} className="flex flex-col gap-4">
          
          <TextField
            id="City"
            label="City"
            variant="outlined"
            required
            fullWidth
            value={city}
            onChange={handlechange}
          />

          <Button
            variant="contained"
            type="submit"
            className="!bg-blue-500 hover:!bg-blue-600 !text-white !font-semibold !py-2 !rounded-lg"
          >
            Search
          </Button>

        </form>

      </div>

    </div>
  );
}