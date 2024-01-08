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

    postEvent: builder.mutation({
      query: (data) => ({
        url: "/events",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const { useGetEventsQuery, usePostEventMutation } = eventApi;
