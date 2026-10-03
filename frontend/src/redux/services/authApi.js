import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  endpoints: (builder) => ({
    //register Api enpoints
    register: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),

      //login Api enpoints
      
      login: builder.mutation ({
          query: (data) => ({
              url: "auth/login",
              method: "POST",
              body:data
          })
      })
  }),
});

export const { useRegisterMutaion ,useLoginMutation} = authApi;