import { api } from "@/redux/api/apiSlice";

const eventApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // get events

    getEvents: builder.query({
      query: ({ search, category }) => ({
        url: "/filteredEvents",
        method: "GET",
        params: { search, category },
        providesTags: ["events"],
      }),
    }),
  }),
});

export const { useGetEventsQuery } = eventApi;
