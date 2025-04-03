import Image from "next/image";
import Link from "next/link";

export default function Header () {
    return(
        <>
        <div className="header_ara">
            <div className="wrapper">

                <div className="header_RGT_Part">

                <div className="head_address_area">
                <span className="addresstxt"><i className="icon-phone">&nbsp;</i>+91 9433210745 | +91 33 23601405</span>
                <span className="addresstxt">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                <span className="addresstxt"><i className="icon-envelope-alt">&nbsp;</i><Link href="mailto:info@travscapeglobal.com">info@travscapeglobal.com</Link></span>
                </div>

                <div className="headsocialara">
                    <ul>
                        <li><Link href="https://www.facebook.com/pages/Travscape-Global-Solution-Pvt-Ltd/549787945161745" target="_blank"><i className="icon-facebook"></i></Link></li>
                        <li><Link href="https://twitter.com/Travscape" target="_blank"><i className="icon-twitter"></i></Link></li>
                        <li><Link href="https://in.linkedin.com/in/travscapeglobal" target="_blank"><i className="icon-linkedin"></i></Link></li>
                        <li><Link href="https://plus.google.com/u/0/109213886022196348614" target="_blank"><i className="icon-google-plus"></i></Link></li>
                    </ul>
                </div>

                </div>

                <h1 className="logo_ara">
                    <Link href="#">
                    <Image src="/images/logo.png" width={225} height={80} alt="" title=""/>
                    </Link>
                </h1>
            </div>
        </div>
        </>
    );
}