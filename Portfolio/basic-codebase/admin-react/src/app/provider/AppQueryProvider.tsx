import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const AppQueryProvider = ({ children } : { children?: React.ReactNode}) => {

  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </>
  )
}

export default AppQueryProvider;
