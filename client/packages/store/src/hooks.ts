/**
 * Typed Redux hooks.
 *
 * Use these throughout the application instead of plain
 * useDispatch() and useSelector() to get proper TypeScript types.
 */

import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from './store.js';
import type { RootState } from './rootReducer.js';

/** Typed dispatch hook — use instead of useDispatch() */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

/** Typed selector hook — use instead of useSelector() */
export const useAppSelector = useSelector.withTypes<RootState>();
