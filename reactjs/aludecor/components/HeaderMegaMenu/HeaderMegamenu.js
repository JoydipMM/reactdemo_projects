'use client';
import { useState, useEffect } from "react";
import { useRef } from 'react';
import Image from "next/image";
import hdrstyle from './HeaderMegamenu.module.css';
import Product from "./Submenu/Product/Product";
import Solution from "./Submenu/Solution/Solution";
import Resource from "./Submenu/Resource/Resource";
import Support from "./Submenu/Support/Support";


export default function HeaderMegaMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [mobMenuColaps, setMobMenuColaps] = useState(false);
    const [activeMenuId, setActiveMenuId] = useState({});
    const [activeSubmenu, setActiveSubmenu] = useState(1);
    const menuRef = useRef(null);

    const toggleMenu = (e, menuid) => {
        e.preventDefault();
        if (activeMenuId === menuid) {
            setIsOpen(prev => !prev);
        } else {
            setActiveMenuId(menuid);
            setIsOpen(true);
        }
        setMobMenuColaps(false);
    };
    const toggleMobMenu = () => {
        setMobMenuColaps(prev => !prev);
    };
    const activeMenuEvent = (e, id) => {
        e.preventDefault();
        setActiveSubmenu(id);
        setMobMenuColaps(prev => !prev);
    }

    const megamenuCloseEvent = (e) => {
        e.preventDefault();
        setIsOpen(false);
    }

    useEffect(() => {
        if (isOpen) {
            document.documentElement.classList.add("megamenu_expanded");
        } else {
            document.documentElement.classList.remove("megamenu_expanded");
        }
        return () => {
            document.documentElement.classList.remove("megamenu_expanded");
        };
    }, [isOpen]);
    useEffect(() => {
        const isTablet = window.innerWidth <= 768;
        if (isTablet) {
            setActiveMenuId({});
        } else {
            setActiveMenuId(2); // or default
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    
    return (<div ref={menuRef}>
        <button onClick={(e) => toggleMenu(e, null)} className={hdrstyle.hdr_megamenu_toggle_btn}>
            <Image src="/images/toggle-menu.svg" alt="Menu" width={22} height={15} />
        </button>
        <ul className={`${hdrstyle.hdr_menu_top}`}>
            <li>
                <a href="#" onClick={(e) => toggleMenu(e, 1)}>Products</a>
                {/* megamenu start */}
                {activeMenuId === 1 && <Product
                    isOpen={isOpen}
                    toggleMenu={toggleMenu}
                    mobMenuColaps={mobMenuColaps}
                    activeSubmenu={activeSubmenu}
                    toggleMobMenu={toggleMobMenu}
                    megamenuCloseEvent={megamenuCloseEvent}
                    activeMenuEvent={activeMenuEvent}
                />}
                {/* megamenu ended */}
            </li>
            <li><a href="#" onClick={(e) => toggleMenu(e, 2)}>Solutions</a>
                {/* megamenu start */}
                {activeMenuId === 2 && <Solution
                    isOpen={isOpen}
                    toggleMenu={toggleMenu}
                    mobMenuColaps={mobMenuColaps}
                    activeSubmenu={activeSubmenu}
                    toggleMobMenu={toggleMobMenu}
                    megamenuCloseEvent={megamenuCloseEvent}
                    activeMenuEvent={activeMenuEvent}
                />}
                {/* megamenu ended */}
            </li>
            <li><a href="#" onClick={(e) => toggleMenu(e, 3)}>Resources</a>
                {activeMenuId === 3 && <Resource
                    isOpen={isOpen}
                    toggleMenu={toggleMenu}
                    mobMenuColaps={mobMenuColaps}
                    activeSubmenu={activeSubmenu}
                    toggleMobMenu={toggleMobMenu}
                    megamenuCloseEvent={megamenuCloseEvent}
                    activeMenuEvent={activeMenuEvent}
                />}
            </li>
            <li><a href="#" onClick={(e) => toggleMenu(e, 4)}>Support</a>
                {activeMenuId === 4 && <Support
                    isOpen={isOpen}
                    toggleMenu={toggleMenu}
                    mobMenuColaps={mobMenuColaps}
                    activeSubmenu={activeSubmenu}
                    toggleMobMenu={toggleMobMenu}
                    megamenuCloseEvent={megamenuCloseEvent}
                    activeMenuEvent={activeMenuEvent}
                />}
            </li>
        </ul>

    </div>)
}