import { Link } from "react-router-dom";
import HeaderMenus from "./HeaderMenus";
import MainLogo from "../common/MainLogo";
import HeaderConatctInfoBox from "./HeaderConatctInfoBox";
import * as Icons from "../icons";

export default function Header(){
    return(
        <>
        <header className="main_header">
            <div className="container">
                <div className="header_inner">
                    <div className="header_cols header_lft_col"><MainLogo url="/about" /></div>
                    <div className="header_cols header_mid_col"><HeaderMenus/></div>
                    <div className="header_cols header_rgt_col">
                        <Link to="/" className="common_button">Login</Link>
                        <Link to="/" className="common_button iconic">e</Link>
                    </div>
                </div>


                <div className="header_flowting_row">
                    <div className="header_flowting_box">
                        <HeaderConatctInfoBox/>
                        <Link to="/" className="common_button">
                        <Icons.DownloadIcon color="#fff" />
                        <span>Download the app</span>
                        </Link>
                    </div>
                </div>



            </div>
        </header>
        </>
    )
}