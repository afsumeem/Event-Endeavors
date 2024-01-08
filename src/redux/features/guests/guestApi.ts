import { api } from "@/redux/api/apiSlice";

const guestApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // get guests

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
