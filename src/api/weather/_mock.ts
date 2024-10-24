import { WeatherData } from "./schema";

export const mock: WeatherData = {
  lat: 49.1951,
  lon: 16.6068,
  timezone: "Europe/Prague",
  timezone_offset: 7200,
  current: {
    dt: 1729513083,
    sunrise: 1729488235,
    sunset: 1729525924,
    pressure: 1030,
    humidity: 60,
    dew_point: 7.62,
    wind_speed: 3.6,
    wind_deg: 170,
    clouds: 0,
    uvi: 1.94,
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "jasno",
        icon: "01d",
      },
    ],
    temp: 15.33,
    feels_like: 14.49,
    visibility: 10000,
  },
  daily: [
    {
      dt: 1729504800,
      sunrise: 1729488235,
      sunset: 1729525924,
      pressure: 1030,
      humidity: 60,
      dew_point: 6.5,
      wind_speed: 3.38,
      wind_gust: 5.25,
      wind_deg: 160,
      clouds: 29,
      uvi: 2.23,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "polojasno",
          icon: "03d",
        },
      ],
      moonrise: 1729533780,
      moonset: 1729508040,
      moon_phase: 0.65,
      summary: "Expect a day of partly cloudy with clear spells",
      temp: {
        morn: 5.77,
        day: 14.14,
        eve: 11.71,
        night: 8.27,
        min: 5.66,
        max: 15.33,
      },
      feels_like: {
        morn: 5.77,
        day: 13.18,
        eve: 10.71,
        night: 7.62,
      },
      pop: 0,
    },
    {
      dt: 1729591200,
      sunrise: 1729574730,
      sunset: 1729612212,
      pressure: 1029,
      humidity: 63,
      dew_point: 5.26,
      wind_speed: 2.7,
      wind_gust: 6.52,
      wind_deg: 170,
      clouds: 29,
      uvi: 2.25,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "polojasno",
          icon: "03d",
        },
      ],
      moonrise: 1729623960,
      moonset: 1729598160,
      moon_phase: 0.69,
      summary: "Expect a day of partly cloudy with clear spells",
      temp: {
        morn: 6.09,
        day: 12.53,
        eve: 11.74,
        night: 10.28,
        min: 5.86,
        max: 15.04,
      },
      feels_like: {
        morn: 5.27,
        day: 11.48,
        eve: 11.06,
        night: 9.69,
      },
      pop: 0,
    },
    {
      dt: 1729677600,
      sunrise: 1729661225,
      sunset: 1729698500,
      pressure: 1034,
      humidity: 69,
      dew_point: 8.54,
      wind_speed: 3.58,
      wind_gust: 8.46,
      wind_deg: 49,
      clouds: 98,
      uvi: 1.73,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "zataženo",
          icon: "04d",
        },
      ],
      moonrise: 1729714680,
      moonset: 1729687200,
      moon_phase: 0.72,
      summary: "There will be partly cloudy today",
      temp: {
        morn: 11.73,
        day: 14.46,
        eve: 13.18,
        night: 10.03,
        min: 10.03,
        max: 15.53,
      },
      feels_like: {
        morn: 11.31,
        day: 13.76,
        eve: 12.46,
        night: 9.1,
      },
      pop: 0,
    },
    {
      dt: 1729764000,
      sunrise: 1729747721,
      sunset: 1729784790,
      pressure: 1031,
      humidity: 66,
      dew_point: 8.21,
      wind_speed: 3.99,
      wind_gust: 7.22,
      wind_deg: 126,
      clouds: 5,
      uvi: 1.94,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "jasno",
          icon: "01d",
        },
      ],
      moonrise: 1729805640,
      moonset: 1729775520,
      moon_phase: 0.75,
      summary: "Expect a day of partly cloudy with clear spells",
      temp: {
        morn: 7.93,
        day: 14.83,
        eve: 15.11,
        night: 10.48,
        min: 7.71,
        max: 16.6,
      },
      feels_like: {
        morn: 6.76,
        day: 14.09,
        eve: 14.5,
        night: 10.01,
      },
      pop: 0,
    },
    {
      dt: 1729850400,
      sunrise: 1729834217,
      sunset: 1729871081,
      pressure: 1026,
      humidity: 65,
      dew_point: 6.01,
      wind_speed: 4.76,
      wind_gust: 7.7,
      wind_deg: 156,
      clouds: 100,
      uvi: 1.85,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "zataženo",
          icon: "04d",
        },
      ],
      moonrise: 0,
      moonset: 1729863300,
      moon_phase: 0.78,
      summary: "Expect a day of partly cloudy with clear spells",
      temp: {
        morn: 8.6,
        day: 12.81,
        eve: 14.1,
        night: 9.36,
        min: 8.6,
        max: 15.76,
      },
      feels_like: {
        morn: 7.56,
        day: 11.84,
        eve: 13.24,
        night: 8.79,
      },
      pop: 0,
    },
    {
      dt: 1729936800,
      sunrise: 1729920713,
      sunset: 1729957373,
      pressure: 1026,
      humidity: 60,
      dew_point: 5.51,
      wind_speed: 4.13,
      wind_gust: 11.93,
      wind_deg: 135,
      clouds: 16,
      uvi: 2,
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "skoro jasno",
          icon: "02d",
        },
      ],
      moonrise: 1729896480,
      moonset: 1729950720,
      moon_phase: 0.81,
      summary:
        "The day will start with clear sky through the late morning hours, transitioning to partly cloudy",
      temp: {
        morn: 8.28,
        day: 13.49,
        eve: 14.17,
        night: 12.22,
        min: 8.15,
        max: 16.33,
      },
      feels_like: {
        morn: 7.73,
        day: 12.46,
        eve: 13.31,
        night: 11.22,
      },
      pop: 0,
    },
    {
      dt: 1730023200,
      sunrise: 1730007210,
      sunset: 1730043667,
      pressure: 1025,
      humidity: 66,
      dew_point: 7.19,
      wind_speed: 3.82,
      wind_gust: 12.37,
      wind_deg: 124,
      clouds: 16,
      uvi: 2,
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "skoro jasno",
          icon: "02d",
        },
      ],
      moonrise: 1729983540,
      moonset: 1730037900,
      moon_phase: 0.85,
      summary: "There will be partly cloudy today",
      temp: {
        morn: 11.95,
        day: 13.71,
        eve: 15.91,
        night: 12.43,
        min: 10.41,
        max: 17.06,
      },
      feels_like: {
        morn: 10.95,
        day: 12.86,
        eve: 15.38,
        night: 11.95,
      },
      pop: 0,
    },
    {
      dt: 1730109600,
      sunrise: 1730093706,
      sunset: 1730129962,
      pressure: 1029,
      humidity: 51,
      dew_point: 3.51,
      wind_speed: 3.41,
      wind_gust: 5.2,
      wind_deg: 302,
      clouds: 30,
      uvi: 2,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "polojasno",
          icon: "03d",
        },
      ],
      moonrise: 1730077680,
      moonset: 1730125080,
      moon_phase: 0.88,
      summary: "There will be partly cloudy today",
      temp: {
        morn: 12.36,
        day: 13.65,
        eve: 13.86,
        night: 9.35,
        min: 9.35,
        max: 16.13,
      },
      feels_like: {
        morn: 11.77,
        day: 12.4,
        eve: 13.1,
        night: 8.59,
      },
      pop: 0,
    },
  ],
};
