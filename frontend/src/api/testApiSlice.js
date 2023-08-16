import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const testApiSlice = createApi({
  reducerPath: "testAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getTest: builder.query({
      query: (count) => `/?count=${count}`,
    }),
    createTest: builder.mutation({
      query: (data) => ({
        url: "/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLazyGetTestQuery, useCreateTestMutation } = testApiSlice;
