import { RouterProvider } from "react-router-dom";
import AppQueryProvider from "../provider/AppQueryProvider";
import AppStoreProvider from "../provider/AppStoreProvider";
import Router from "../router";

const AppProvider = ({ children } : { children?: React.ReactNode}) => {
  return (
    <>
    <AppStoreProvider>
        <AppQueryProvider>
            <RouterProvider router={Router}/>
            {children}
        </AppQueryProvider>
    </AppStoreProvider>
    </>
  )
}

export default AppProvider
