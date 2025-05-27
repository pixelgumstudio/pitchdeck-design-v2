// app/providers.tsx
'use client'

import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from 'react-query'
import { CookiesProvider } from 'react-cookie'

const queryClient = new QueryClient()
export function Providers({ children }: { children: React.ReactNode }) {
  return (
     <QueryClientProvider client={queryClient}>
      <CookiesProvider>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </ThemeProvider>
    </CookiesProvider>
    </QueryClientProvider>
  );
}
