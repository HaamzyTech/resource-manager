"use client"

import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

type Props = {
    children: React.ReactNode
}

export const TanStackQueryClientProvider:React.FC<Props> = ({children})=>(
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
)