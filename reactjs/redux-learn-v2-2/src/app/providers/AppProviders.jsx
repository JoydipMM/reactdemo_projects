//import type { ReactNode } from 'react' // ReactNode is a React type that represents any valid React element, component, or fragment.
import ReduxProvider from '@/app/providers/ReduxProvider'
import QueryProvider from '@/app/providers/QueryProvider'
import { ThemeContextProvider } from '@/shared/contexts/theme/ThemeContextProvider'

// const AppProviders = ({children}: {children: ReactNode}) => { // if we use .tsx extension
const AppProviders = ({children}) => {
    return (
        <ThemeContextProvider>
            <ReduxProvider>
                <QueryProvider>
                    {children}
                </QueryProvider>
            </ReduxProvider>
        </ThemeContextProvider>
    )
}

export default AppProviders;