import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY } from "../constants/config";

export const cityApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.openweathermap.org/geo/1.0/",
  }),
  reducerPath: "cityApi",
  endpoints: (builder) => ({
    getLocationByName: builder.query({
      query: (name) => `direct?q=${name}&limit=5&appid=${API_KEY}`,
      providesTags: (result) =>
        (result ?? []).map((element) => {
          return { type: "CITY", id: `${element.lat} + ${element.lon}` };
        }),
    }),
  }),
  tagTypes: ["CITY"],
});

export const { useGetLocationByNameQuery } = cityApi;
