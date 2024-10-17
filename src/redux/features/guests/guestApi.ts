import { api } from "@/redux/api/apiSlice";

const guestApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // get guests

    getGuest: builder.query({
      query: () => ({
        url: "/guests",
        // providesTags: ["guests"],
      }),
    }),

    //

    postRegistration: builder.mutation({
      query: (data) => ({
        url: "/guests",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { usePostRegistrationMutation, useGetGuestQuery } = guestApi;
