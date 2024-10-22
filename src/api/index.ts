import ky, { KyInstance } from "ky";

import { env } from "../utils";

const api = (): KyInstance => {
  return ky.extend({
    timeout: 30000,
    throwHttpErrors: true,
    retry: 0,
    hooks: {
      beforeRequest: [
        async (req) => {
          // Append OpenWeatherMap API key to search params.
          // This app uses only OpenWeatherMap API, so this solution is sufficient for this use-case.
          const url = new URL(req.url);
          url.searchParams.append("appid", env.VITE_OWM_API_KEY);
          return new Request(url.toString(), req);
        },
      ],
    },
  });
};

export default api;
