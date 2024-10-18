'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { IReactQueryProps } from './types';

export default function TanstackProvider({children}: IReactQueryProps){
    
    const queryClient = new QueryClient()
    
    return(
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}