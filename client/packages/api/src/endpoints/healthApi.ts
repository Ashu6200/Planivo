/**
 * Health check endpoint definition using RTK Query injectEndpoints.
 * Proves that RTK Query infrastructure and code generation work properly.
 */

import type { HealthCheckResponse } from '@project/types';
import { baseApi } from '../baseApi.js';

export const healthApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHealth: builder.query<HealthCheckResponse, void>({
      query: () => '/health',
      providesTags: ['Health'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetHealthQuery, useLazyGetHealthQuery } = healthApi;
