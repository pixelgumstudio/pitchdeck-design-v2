"use client"
import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface MainProps {
  children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
    const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
    <main>{children}</main>
    </QueryClientProvider>
  )
}
