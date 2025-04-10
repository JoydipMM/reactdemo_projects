"use client";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer, HeaderNav } from "../../Components";

// import HeaderNav from "./HeaderNav";

export default function HomeLayout({children}){
    return(<>
    
    <HeaderNav/>
        <div className="menu_slider_ara">
          <Header/>
        </div>
        <div className="body_content_area"> 
          {children}
        </div>
        <Footer/>
    </>)
}