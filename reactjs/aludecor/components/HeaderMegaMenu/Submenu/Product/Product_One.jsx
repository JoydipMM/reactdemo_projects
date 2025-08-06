import React from 'react';
import Link from 'next/link';
import hdrstyle from '../../HeaderMegamenu.module.css';

const Product_One = ({megamenuCloseEvent}) => {
  return (
    <>
      <div className={`${hdrstyle.megamenu_middle_menu_list_wrap}`}>
        <div className={hdrstyle.submenu_loop_section}>
          <ul className={hdrstyle.submenu_list}>
            <li><Link href="#" onClick={megamenuCloseEvent}>Zinc Composite Panels</Link></li>
            <li><Link href="#">Zinc Solid Panels</Link></li>
            <li><Link href="#">Wabi Sabi Series</Link></li>
            <li><Link href="#">Copper Composite Panels</Link></li>
            <li><Link href="#">Sand Series</Link></li>
            <li><Link href="#">Pedra Series</Link></li>
            <li><Link href="#">Aluminium Honeycomb Panels</Link></li>
            <li><Link href="#">Mirror Series</Link></li>
            <li><Link href="#">Gloz Series</Link><span>*New</span></li>
            <li><Link href="#">Sparkling Series</Link></li>
            <li><Link href="#">Regular Series</Link></li>
            <li><Link href="#">Mason Mark</Link></li>
            <li><Link href="#">Earthcoat Series</Link></li>
            <li><Link href="#">Rugged Metal</Link></li>
          </ul>
        </div>
        <div className={hdrstyle.submenu_loop_section}>
          <ul className={hdrstyle.submenu_list}>
            <li><Link href="#">ACE Series</Link><span>*New</span></li>
            <li><Link href="#">Timber Series</Link></li>
            <li><Link href="#">Wabi Sabi Series</Link></li>
            <li><Link href="#">Rustic Series</Link></li>
            <li><Link href="#">Sand Series</Link></li>
            <li><Link href="#">Metaldhara</Link><span>*New</span></li>
          </ul>
        </div>
        <div className={hdrstyle.submenu_loop_section}>
          <ul className={hdrstyle.submenu_list}>
            <li><Link href="#">Firewall™</Link></li>
            <li><Link href="#">VI-Secure</Link></li>
            <li><Link href="#">Armor</Link></li>
            <li><Link href="#">AG+</Link></li>
          </ul>
          <h5>Signages</h5>
          <ul className={hdrstyle.submenu_star_list}>
            <li><Link href="#">ACP LouverS</Link></li>
            <li><Link href="#">Pre-Painted Aluminium Coils</Link></li>
            <li><Link href="#">Solid Aluminium Panels</Link></li>
            <li><Link href="#">Aluminium Honeycomb Panels</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Product_One
