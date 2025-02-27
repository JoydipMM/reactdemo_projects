import Sidebar from "@/components/admin/sideBar";

export default function Layout({children}){
    return(
        <>
        <div>
            <Sidebar/>
        </div>
            {children}
        </>
    )
}