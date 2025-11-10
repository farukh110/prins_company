'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/redux';
import { hydrateFromStorage } from '@/redux/api/auth/authSlice';

export default function HydrateAuth() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(hydrateFromStorage());
  }, [dispatch]);

  return null;
};