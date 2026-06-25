import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; 
const queryClient = new QueryClient(); // here we create a new instance of QueryClient not inside function. Because If we create a new instance of QueryClient inside function, it will be recreated every re-render, which is not what we want.

function QueryProvider({ children } : { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

export default QueryProvider

