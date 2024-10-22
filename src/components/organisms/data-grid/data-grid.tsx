import { formatDate } from "date-fns";

import { useWeatherData } from "../../../api/weather";
import { usePlace } from "../../../context/place";
import {
  FMT_DATE_COMPACT,
  FMT_TIME,
  formatDuration,
  ms2kmh,
  round,
  ts2date,
} from "../../../utils";
import { Icon } from "../../atoms/icon";
import { QuerySuspense } from "../../molecules/query-suspense";
import { DataCell, MainCell } from "./data-grid-cell";
import { getWeatherIconName } from "./utils";

export const DataGrid = () => {
  const { coordinates } = usePlace();

  const query = useWeatherData({ lon: coordinates.lon, lat: coordinates.lat });

  return (
    <QuerySuspense query={query}>
      {({ current, daily }) => {
        const [today, tomorrow, day2, day3] = daily;
        // As per OpenWeatherMap API docs:
        // It is possible to meet more than one weather condition for a requested location. The first weather condition in API respond is primary.
        // In this case only the primary weather is needed.
        const currentWeather = current.weather[0];
        const tomorrowWeather = tomorrow.weather[0];
        const day2Weather = day2.weather[0];
        const day3Weather = day3.weather[0];
        return (
          <section className="grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-2 p-4 sm:p-0">
            {/* Weather type */}
            <MainCell className="gap-1">
              <Icon
                name={getWeatherIconName(currentWeather.icon)}
                className="size-10 text-secondary-400 sm:size-14"
              />
              <h2 className="sm:text-xl">{currentWeather.main}</h2>
            </MainCell>
            {/* Temperature */}
            <MainCell>
              <div className="flex flex-row gap-1">
                <h1 className="sm:text-3xl">{round(current.temp, 0)}</h1>
                <abbr className="pt-3 text-lg font-medium sm:pt-4 sm:text-xl">
                  °C
                </abbr>
              </div>
            </MainCell>
            {/* Temperature high/low */}
            <MainCell className="gap-3 text-secondary-600 sm:gap-4 sm:text-lg">
              <span>{round(today.temp.max, 0)}°C ↑</span>
              <span>{round(today.temp.min, 0)}°C ↓</span>
            </MainCell>

            {/* Other data */}
            <DataCell
              value={`${current.humidity}%`}
              label="Humidity"
              iconName="Droplets"
            />
            <DataCell
              value={`${current.pressure.toLocaleString()} mBar`}
              label="Pressure"
              iconName="Gauge"
            />
            <DataCell
              value={`${round(ms2kmh(current.wind_speed), 0)} km/h`}
              label="Wind"
              iconName="Wind"
            />
            <DataCell
              value={formatDate(ts2date(current.sunrise), FMT_TIME)}
              label="Sunrise"
              iconName="Sunrise"
            />
            <DataCell
              value={formatDate(ts2date(current.sunset), FMT_TIME)}
              label="Sunset"
              iconName="Sunset"
            />
            <DataCell
              value={formatDuration(
                ts2date(current.sunset),
                ts2date(current.sunrise),
              )}
              label="Daytime"
              iconName="Hourglass"
            />

            {/* Forecast for next three days */}
            <DataCell
              value={formatDate(ts2date(tomorrow.dt), FMT_DATE_COMPACT)}
              label={`${round(tomorrow.temp.max, 0)}°C ↑ ${round(tomorrow.temp.min, 0)}°C ↓`}
              iconName={getWeatherIconName(tomorrowWeather.icon)}
              elevated
            />
            <DataCell
              value={formatDate(ts2date(day2.dt), FMT_DATE_COMPACT)}
              label={`${round(day2.temp.max, 0)}°C ↑ ${round(day2.temp.min, 0)}°C ↓`}
              iconName={getWeatherIconName(day2Weather.icon)}
              elevated
            />
            <DataCell
              value={formatDate(ts2date(day3.dt), FMT_DATE_COMPACT)}
              label={`${round(day3.temp.max, 0)}°C ↑ ${round(day3.temp.min, 0)}°C ↓`}
              iconName={getWeatherIconName(day3Weather.icon)}
              elevated
            />
          </section>
        );
      }}
    </QuerySuspense>
  );
};
