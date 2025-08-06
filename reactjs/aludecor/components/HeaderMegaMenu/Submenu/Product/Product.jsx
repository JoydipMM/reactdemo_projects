import React from 'react'
import Product_One from './Product_One'
import Product_Two from './Product_Two'
import Product_Three from './Product_Three'
import Product_Four from './Product_Four'
import hdrstyle from '../../HeaderMegamenu.module.css';
import Link from 'next/link'


// close icon
const megamenuCloseIcon = <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_884_82" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50"><rect width="50" height="50" fill="#D9D9D9"/></mask><g mask="url(#mask0_884_82)"><path d="M17 35.0001L25.0169 26.9209L33 35.0001L35 33.1292L26.9336 25.0042L35 16.8792L33 15.0001L25.0169 23.0876L17.5169 15.0001L15.5 16.8792L23.1003 25.0042L15 33.0001L17 35.0001ZM25.0169 45.8376C22.135 45.8376 19.4266 45.2907 16.8919 44.1969C14.3572 43.1032 12.1523 41.6188 10.2773 39.7438C8.40234 37.8688 6.91797 35.6639 5.82422 33.1292C4.73047 30.5945 4.18359 27.8862 4.18359 25.0042C4.18359 22.1223 4.73047 19.414 5.82422 16.8792C6.91797 14.3445 8.40234 12.1396 10.2773 10.2646C12.1523 8.38965 14.3572 6.90527 16.8919 5.81152C19.4266 4.71777 22.135 4.1709 25.0169 4.1709C27.8989 4.1709 30.6072 4.71777 33.1419 5.81152C35.6766 6.90527 37.8815 8.38965 39.7565 10.2646C41.6315 12.1396 43.1159 14.3445 44.2096 16.8792C45.3034 19.414 45.8503 22.1223 45.8503 25.0042C45.8503 27.8862 45.3034 30.5945 44.2096 33.1292C43.1159 35.6639 41.6315 37.8688 39.7565 39.7438C37.8815 41.6188 35.6766 43.1032 33.1419 44.1969C30.6072 45.2907 27.8989 45.8376 25.0169 45.8376Z" fill="#00B6C9"/></g></svg>

// left menu arrow icon
const megamenuArrow = <svg width="62" height="24" viewBox="0 0 62 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M61.0607 13.0607C61.6464 12.4749 61.6464 11.5251 61.0607 10.9393L51.5147 1.3934C50.9289 0.807611 49.9792 0.807611 49.3934 1.3934C48.8076 1.97919 48.8076 2.92893 49.3934 3.51472L57.8787 12L49.3934 20.4853C48.8076 21.0711 48.8076 22.0208 49.3934 22.6066C49.9792 23.1924 50.9289 23.1924 51.5147 22.6066L61.0607 13.0607ZM0 12V13.5H60V12V10.5H0V12Z" fill="#00B6C9"/></svg>



const Product = ({isOpen, toggleMenu, mobMenuColaps, activeSubmenu, toggleMobMenu, megamenuCloseEvent, activeMenuEvent}) => {
  return (
    <>
      {/* <Product_One/>
      <Product_Two/>
      <Product_Three/>
      <Product_Four/> */}
      <section className={`${hdrstyle.hdr_megamenu_holder} ${isOpen ? hdrstyle.open : ''}`}>
                <div className={`${hdrstyle.hdr_megamenu}`}>
                    <div className="container">
                        <div className={`${hdrstyle.hdr_megamenu_inner}`}>
                            <button onClick={toggleMenu} className={`${hdrstyle.hdr_megamenu_close_btn}`}><span>Close</span>{megamenuCloseIcon}</button>
                            <div className={`${hdrstyle.hdr_megamenu_mainbody}`}>
                                <div className={hdrstyle.hdr_megamenu_mainbody_row}>
                                    <div className={`${hdrstyle.hdr_megamenu_mainbody_col} ${hdrstyle.left_menu_col} ${mobMenuColaps && hdrstyle.mobMenu_colaps}`}>
                                        <div className={`${hdrstyle.megamenu_lft_menu_holder}`}>
                                            <ul className={`${hdrstyle.megamenu_lft_menu_list}`}>
                                                <li className={activeSubmenu === 1 ?`${hdrstyle.active}`: null}>
                                                    <Link href="#" onClick={(e)=>activeMenuEvent(e, 1)}>
                                                        Aluminium Products
                                                        <span>Premium ACP Panels manufactured by Aludecor</span>
                                                    </Link>
                                                </li>  
                                                <li className={activeSubmenu === 2 ?`${hdrstyle.active}`: null}>
                                                    <Link href="#" onClick={(e)=>activeMenuEvent(e, 2)}>
                                                        Zinc & Copper Products
                                                        <span>Premium Zinc Panels manufactured by Aludecor</span>
                                                    </Link>
                                                </li>  
                                                <li className={activeSubmenu === 3 ?`${hdrstyle.active}`: null}>
                                                    <Link href="#" onClick={(e)=>activeMenuEvent(e, 3)}>
                                                        Louvers
                                                        <span>Premium architectural louvers by Aludecor</span>
                                                    </Link>
                                                </li>  
                                                <li className={activeSubmenu === 4 ?`${hdrstyle.active}`: null}>
                                                    <Link href="#" onClick={(e)=>activeMenuEvent(e, 4)}>
                                                        Honeycomb Panels
                                                        <span>Premium architectural louvers by Aludecor</span>
                                                    </Link>
                                                </li>  
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={`${hdrstyle.hdr_megamenu_mainbody_col} ${hdrstyle.center_menu_col}`}>
                                        <button className={`${hdrstyle.hdr_megamenu_sub_back_btn}`} onClick={toggleMobMenu}><span className={`${hdrstyle.backicon}`}>{megamenuArrow}</span><span>Back</span></button>
                                        <div className={`${hdrstyle.megamenu_middle_menu_holder}`}>
                                            {/* menu1 */}
                                            {activeSubmenu === 1 && 
                                            <Product_One megamenuCloseEvent={megamenuCloseEvent}/>
                                            }
                                            {/* menu1 */}
                                            {/* menu2 */}
                                            {activeSubmenu === 2 &&
                                            <Product_Two megamenuCloseEvent={megamenuCloseEvent}/>
                                            }
                                            {/* menu2 */}
                                            {/* menu3 */}
                                            {activeSubmenu === 3 &&
                                            <Product_Three megamenuCloseEvent={megamenuCloseEvent}/>
                                            }
                                            {/* menu3 */}
                                            {/* menu4 */}
                                            {activeSubmenu === 4 &&
                                            <Product_Four megamenuCloseEvent={megamenuCloseEvent}/>
                                            }
                                            {/* menu4 */}
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Product
