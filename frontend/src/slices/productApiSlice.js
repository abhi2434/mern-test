import { PRODUCTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        query: () => ({
            url: PRODUCTS_URL
        }),
        keepUnusedDataFor: 5
    })
});

export const { useGetProductsQuery } = productsApiSlice;