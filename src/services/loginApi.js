// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    checklogin: builder.query({
      query: (values) => `user/?username=${values.username}&password=${values.password}`,
    }),
    getCamps:builder.query({
      query:()=>`newcamps`
    }),
    getAllCampaigners:builder.query({
        query:()=>`user/?role=campaigner`
    }),
    newCamp :builder.mutation({
      query:(newcamp)=>{
        return {
          method :'POST', 
          url:`/user`,
          body:newcamp
        }
      }
    }),
    addnewreg :builder.mutation({
      query:(newreg)=>{
        return {
          method :'POST', 
          url:`/addnewreg`,
          body:newreg
        }
      }
    }),
    newcampaigns :builder.mutation({
      query:(camps)=>{
        return {
          method :'POST', 
          url:`/newcamps`,
          body:camps
        }
      }
    }),
    getAddReg:builder.query({
      query:()=>`addnewreg`
    }),
    getReg:builder.query({
      query:()=>`addnewreg`
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useNewCampMutation, useLazyCheckloginQuery ,useAddnewregMutation,useNewcampaignsMutation,useGetCampsQuery,useLazyGetAllCampaignersQuery,useGetAddRegQuery,useGetAllCampaignersQuery,useGetRegQuery} = loginApi