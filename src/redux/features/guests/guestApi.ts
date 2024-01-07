import { api } from "@/redux/api/apiSlice";

const guestApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // get guests

    // getEvents: builder.query({
    //   query: ({ search, category }) => ({
    //     url: "/filteredEvents",
    //     method: "GET",
    //     params: { search, category },
    //     providesTags: ["events"],
    //   }),
    // }),

    postRegistration: builder.mutation({
      query: (data) => ({
        url: "/guests",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { usePostRegistrationMutation } = guestApi;
