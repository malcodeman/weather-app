import { FORECAST } from "~/server/types";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const location = query.location || "berlin";
  const API_KEY = process.env.TOMORROW_API_KEY;
  const resp: FORECAST = await $fetch(
    "https://api.tomorrow.io/v4/weather/forecast",
    {
      params: {
        location,
        apikey: API_KEY,
        units: "metric",
      },
    },
  );

  return resp;
});
