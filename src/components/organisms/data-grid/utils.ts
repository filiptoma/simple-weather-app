import { Icons } from "../../atoms/icon";

// Map OpenWeatherMap API icon codes to Lucide icons.
export const getWeatherIconName = (iconCode: string): Icons => {
  const iconMap: Record<string, Icons> = {
    "01d": "Sun",
    "01n": "Moon",
    "02d": "CloudSun",
    "02n": "CloudMoon",
    "03d": "Cloud",
    "03n": "Cloud",
    "04d": "Cloudy",
    "04n": "Cloudy",
    "09d": "CloudRain",
    "09n": "CloudRain",
    "10d": "CloudSunRain",
    "10n": "CloudMoonRain",
    "11d": "CloudLightning",
    "11n": "CloudLightning",
    "13d": "Snowflake",
    "13n": "Snowflake",
    "50d": "Waves",
    "50n": "Waves",
  };

  return iconMap[iconCode] || "CloudOff";
};
