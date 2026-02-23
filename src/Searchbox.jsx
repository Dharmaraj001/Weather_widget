import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Searchbox() {

    let [city, setcity] = useState("")

    let handlechange = (evt) => {
        setcity(evt.target.value)
    }

    let handlesubmit = (evt) =>{
        evt.preventDefault();
        console.log(city);
        setcity("")
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