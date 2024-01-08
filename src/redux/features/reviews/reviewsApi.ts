import { api } from "@/redux/api/apiSlice";

const guestApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // get reviews
    getReviews: builder.query({
      query: () => ({
        url: "/reviews",
        providesTags: ["reviews"],
      }),
    }),

    //post reviews

    postReview: builder.mutation({
      query: (data) => ({
        url: "/reviews",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const { useGetReviewsQuery, usePostReviewMutation } = guestApi;
