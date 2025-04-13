import { ReactNode } from "react";
import TourFormContextProvider from "./contexts/TourFormContext";

interface LayoutProps{
    children: ReactNode;
}

export default function Layout({children}:LayoutProps){
    return <TourFormContextProvider>{children}</TourFormContextProvider>
}