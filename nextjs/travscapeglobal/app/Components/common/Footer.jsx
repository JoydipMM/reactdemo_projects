import Link from "next/link";
import Image from "next/image";


export default function Footer (){
    return(<>
    <div className="footer_ara">
        <div className="wrapper">


        <div className="foot_nav_ara_1">
            <div className="foot_head">Quick link</div>
            <div className="qklnksUlara">
                <ul>
                    <li><Link href="#">About</Link></li>
                    <li><Link href="#">Team</Link></li>
                    <li><Link href="#">Program Dates</Link></li>
                    <li><Link href="#">Services</Link></li>
                    <li><Link href="#">Reach Us</Link></li>
                </ul>
            </div>
        </div>


        <div className="foot_nav_ara_2">
            <div className="foot_head">Contact us</div>
            <div className="foot_mid_contnt_ara">
                <div className="foot_address">
                258/4 A.P.C. Road, 3rd floor<br />
                Kolkata - 700006, West Bengal , India.<br/>
                Ph: <span><Link href={"#"} style={{color:'#01dcb0'}}>+91 33 23601405</Link>&nbsp;|&nbsp;<Link href={"#"} style={{color:'#01dcb0'}}>+91 9433210745</Link></span><br/>
                E-mail: <span><Link href="mailto:info@travscapeglobal.com" style={{color:'#01dcb0'}}>info@travscapeglobal.com</Link></span>
                </div>
            </div>
        </div>


        <div className="footer_nav_ara_3">
            <div className="foot_head">Flickr  Gallery</div>
            <Image src="/images/footer/flick_img.png" width={264} height={164} border="0" alt="image" /> 
        </div>


        <div className="foot_bottom_ara">
            <div className="foot_link_ara">
            Copyright, 2015 All Right Reserved
            <span className="developby">Design &amp; Develop by <Link href="http://www.ilusoncreation.com/" target="_blank" style={{color:'#01dcb0'}}>ILUSON</Link> ( <Link href="tel:9830068622">9830068622</Link> )</span>
            </div>
        </div>




        </div>
    </div>
    
    </>)
}