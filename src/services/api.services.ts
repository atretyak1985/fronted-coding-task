import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'splitApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.multifarm.fi' }),
    tagTypes: ['Assets'],
    endpoints: () => ({}),
})
