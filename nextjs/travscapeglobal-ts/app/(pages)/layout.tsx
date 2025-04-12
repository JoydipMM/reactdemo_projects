import { Header, Footer, HeaderNav } from "@/Components";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (

        <>
        <HeaderNav/>
        <div className="menu_slider_ara">
          <Header/>
        </div>
        <div className="body_content_area"> 
          {children}
        </div>
        <Footer/>
        </>
    )
}