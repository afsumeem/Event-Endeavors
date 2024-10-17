import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://event-endeavors.vercel.app/",
  }),
  tagTypes: ["events", "reviews", "guests", "profile"],
  endpoints: () => ({}),
});
