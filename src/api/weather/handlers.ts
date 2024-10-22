import { useQuery } from "@tanstack/react-query";

import api from "..";
import { Coordinates } from "../../types";
import { parseWithSchema } from "../../utils";
import { WeatherApiResponseSchema } from "./schema";

type Options = {
  exclude?: ("current" | "minutely" | "hourly" | "daily" | "alerts")[];
  units?: "standard" | "metric" | "imperial";
  lang?: string;
};

export const useWeatherData = ({
  lat,
  lon,
  // I did not provide schemas for these fields, thus query will result in an error if not excluded.
  // Use `safeParseWithSchema` instead of `parseWithSchema` to disable error throwing.
  exclude = ["minutely", "hourly", "alerts"],
  units = "metric",
  lang = "cz",
}: Coordinates & Options) => {
  return useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: () =>
      api()
        .get("https://api.openweathermap.org/data/3.0/onecall", {
          searchParams: {
            lat,
            lon,
            exclude: exclude.join(","),
            units,
            lang,
          },
        })
        .json()
        // Just here to showcase loading spinner for query suspense. :) Remove for "performance" mode.
        .then(async (r) => {
          await new Promise((resolve) => {
            return setTimeout(resolve as () => void, 1000);
          });
          return r;
        })
        .then((r) => parseWithSchema(r, WeatherApiResponseSchema)),
  });
};
