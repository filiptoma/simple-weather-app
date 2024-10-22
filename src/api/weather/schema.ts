import { z } from "zod";

const BaseSchema = z.object({
  dt: z.number(),
  sunrise: z.number(),
  sunset: z.number(),
  pressure: z.number(),
  humidity: z.number(),
  dew_point: z.number(),
  wind_speed: z.number(),
  wind_gust: z.number().optional(),
  wind_deg: z.number(),
  clouds: z.number(),
  uvi: z.number(),
  weather: z
    .object({
      id: z.number(),
      main: z.string(),
      description: z.string(),
      icon: z.string(),
    })
    .array(),
});

const PrecipitationSchema = z.object({
  "1h": z.number(),
});

const TemperatureSchema = z.object({
  morn: z.number(),
  day: z.number(),
  eve: z.number(),
  night: z.number(),
  min: z.number(),
  max: z.number(),
});

const FeelsLikeSchema = TemperatureSchema.omit({
  min: true,
  max: true,
});

const CurrentSchema = BaseSchema.extend({
  temp: z.number(),
  feels_like: z.number(),
  visibility: z.number(),
  rain: PrecipitationSchema.optional(),
  snow: PrecipitationSchema.optional(),
});
export type WeatherCurrent = z.infer<typeof CurrentSchema>;

const DailySchema = BaseSchema.extend({
  moonrise: z.number(),
  moonset: z.number(),
  moon_phase: z.number(),
  summary: z.string(),
  temp: TemperatureSchema,
  feels_like: FeelsLikeSchema,
  pop: z.number(),
  rain: z.number().optional(),
  snow: z.number().optional(),
});
export type WeatherDaily = z.infer<typeof DailySchema>;

export const WeatherApiResponseSchema = z.object({
  lat: z.number(),
  lon: z.number(),
  timezone: z.string(),
  timezone_offset: z.number(),
  current: CurrentSchema,
  daily: DailySchema.array(),
});
export type WeatherData = z.infer<typeof WeatherApiResponseSchema>;
