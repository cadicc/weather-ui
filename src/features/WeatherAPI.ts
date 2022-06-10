import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({
        baseUrl:
            'https://api.weatherapi.com/v1/forecast.json?key=f0106112791a4d5486c104334223105&q=Hanoi&days=10&aqi=yes&alerts=no',
    }),
    endpoints: (builder) => ({
        getCurrentTemp: builder.query({
            query: (temp_c) => `${temp_c}`,
        }),
    }),
});
export const { useGetCurrentTempQuery } = weatherApi;
