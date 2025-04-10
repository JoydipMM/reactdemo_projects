import Link from "next/link";

export default function HeaderNav (){
    return(<>
    <div className="menuarea sticky-navigation">
    <div className="wrapper">
    <div id="cssmenu">
        <ul>
            <li className="mnactv"><Link href="/"><i className="icon-home"></i></Link></li>
            <li><Link href="#">About</Link>
                <ul>
                <li><Link href="/about-company">&nbsp;The Company</Link></li>
                </ul>
            </li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="#">Program Dates</Link></li>
            <li><Link href="#">Services</Link></li>
            <li><Link href="#">Gallery</Link>
                <ul>
                    <li><Link href="#">Photo Gallery</Link></li>
                </ul>
            </li>
            <li><Link href="#">Feedback</Link></li>
            <li><Link href={"#"}>Downloads</Link>
                <ul>
                    <li><Link href="#">Medical Form</Link></li>
                </ul>
            </li>
            <li><Link href="#">Contact</Link>
                <ul>
                    <li><Link href="#">&nbsp;Reach Us</Link></li>
                    <li><Link href="#">Registration</Link></li>
                </ul>
            </li>
        </ul>
        </div>
        </div>
        </div>
    </>);
}