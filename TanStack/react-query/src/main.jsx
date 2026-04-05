import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import 
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// create a client instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //staleTime: 1000 * 60 * 5 // 5 minutes
      staleTime: 10000 // 10 seconds
    }
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* wrap full app with QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
)
