import {RouterProvider} from "react-router-dom"
import StoreProvider from "../providers/StoreProvider"
import QueryProvider from "./QueryProvider"
import { Router } from "../router"


const AppProvider = ({children}: {children?: React.ReactNode}) => {
  return (
    <>
    <StoreProvider>
        <QueryProvider>
        <RouterProvider router={Router}/>
        {children}
        </QueryProvider>
    </StoreProvider>
    </>
  )
}

export default AppProvider
