// 1.  make this file as client component
"use client";
import React, { useState } from "react";

// 2. import QueryClient and QueryClientProvider
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// 3. wrap the app with QueryClientProvider
export default function QueryProvider({ children }) {

    // 4. create a query client instance
    const [queryClient] = useState(() => new QueryClient()); 
    // *** NOTE: this is the recommended pattern for creating a QueryClient instance by the TanStack Query team. We use the useState hook to ensure that the QueryClient instance is only created once per app live cycle. If we did not use useState, the QueryClient instance would be created every time the component re-renders

    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
}