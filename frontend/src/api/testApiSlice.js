import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const testApiSlice = createApi({
  reducerPath: "testAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getTest: builder.query({
      query: () => `/`,
      providesTags: ["Test"],
    }),
  }),
});

export const { useGetTestQuery } = testApiSlice;
