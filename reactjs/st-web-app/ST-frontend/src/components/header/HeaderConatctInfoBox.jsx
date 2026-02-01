
import * as Icons from "../icons";
import { Link } from "react-router-dom";

export default function HeaderConatctInfoBox() {
    return (
        <>
            <div className="header_contact_infobox">
                <ul className="header_contact_info_ul">

                    <li>
                        <div className="contact_info_iconic_box">
                            <div className="icon_wrap"><Icons.CallIcon /></div>
                            <div className="info_col">
                                <div className="info_text">Interested? Call Us Today</div>
                                <div className="info_title">Phone : <Link href="tel:1234567890">123 456 7890</Link></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="contact_info_iconic_box">
                            <div className="icon_wrap"><Icons.LocationIcon /></div>
                            <div className="info_col">
                                <div className="info_title">Our Location</div>
                                <div className="info_text">Akshya Nagar 1st Block 1st Cross,  Bangalore-560016</div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </>
    )
}