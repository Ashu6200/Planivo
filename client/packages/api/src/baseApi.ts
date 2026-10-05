/**
 * @project/api - Base API configuration
 *
 * Single createApi() instance using RTK Query.
 * All endpoints are injected here.
 */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const DEFAULT_BASE_URL = 'http://localhost:3000/api';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: DEFAULT_BASE_URL,
    prepareHeaders: (headers) => {
      // Future: add auth token injection here
      return headers;
    },
  }),
  tagTypes: ['Health'],
  endpoints: () => ({}),
});
