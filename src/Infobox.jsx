import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

export default function Infobox() {

  const image =
    "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg";

  let info = {
    city: "Delhi",
    feelsLike: 24.5,
    Temp: 20,
    TempMin: 18,
    TempMax: 27,
    Humidity: 47,
    Wheather: "Haze",
  };

  return (
    <div className="flex justify-center mt-6 px-4">

      <Card
        sx={{
          width: "100%",
          maxWidth: 520,   // increased width
          borderRadius: "24px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
          overflow: "hidden",
        }}
        className="transition-all duration-300 hover:scale-100.5 hover:shadow-2xl"
      >

        {/* Image */}
        <div className="relative">

          <CardMedia
            sx={{ height: 240 }}   // increased height
            image={image}
            title="weather image"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">

            <Typography
              variant="h4"
              className="text-white font-bold flex items-center gap-2"
            >
              <LocationOnIcon fontSize="large"/>
              {info.city}
            </Typography>

          </div>

        </div>

        {/* Content */}
        <CardContent className="bg-gradient-to-br from-blue-100 via-blue-50 to-white p-6">

          {/* Main temperature */}
          <div className="flex justify-center items-baseline gap-3 mb-6">

            <ThermostatIcon
                sx={{ fontSize: 48 }}
                className="text-red-500"
            />

            {/* Temperature */}
            <Typography
                variant="h2"
                className="font-bold text-gray-800 leading-none"
            >
                {info.Temp}°C
            </Typography>

            {/* Weather */}
            <Typography
                variant="h5"
                className="text-gray-500 capitalize font-medium"
            >
                {info.Wheather}
            </Typography>

            </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-5">

            <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition">
              <Typography className="text-gray-500 text-sm">
                Feels Like
              </Typography>
              <Typography className="font-bold text-lg">
                {info.feelsLike}°C
              </Typography>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition text-center">
              <WaterDropIcon className="text-blue-500 mb-1"/>
              <Typography className="text-gray-500 text-sm">
                Humidity
              </Typography>
              <Typography className="font-bold text-lg">
                {info.Humidity}%
              </Typography>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition">
              <Typography className="text-gray-500 text-sm">
                Min Temp
              </Typography>
              <Typography className="font-bold text-lg text-blue-600">
                {info.TempMin}°C
              </Typography>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition">
              <Typography className="text-gray-500 text-sm">
                Max Temp
              </Typography>
              <Typography className="font-bold text-lg text-red-600">
                {info.TempMax}°C
              </Typography>
            </div>

          </div>

        </CardContent>

      </Card>

    </div>
  );
}   