"use client"
import { useState, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

function NavBar() {
    const [activeLink, setActiveLink] = useState(0);
    const [hamburguerActive, setHamburguerActive] = useState(false);
    const pathname = usePathname();

    const imageUrl = pathname === '/es' ? '/img/language/english.png' : '/img/language/spanish.png';

    const navigationMain = [
        { title: "Proyectos", path: "#projects" },
        { title: "Experiencia", path: "#experience" },
        { title: "Tecnologías", path: "#technologies" },
        { title: "Sobre mí", path: "#about-me" },
    ];

    const handleLinkClick = (idx) => {
        setActiveLink(idx);
        setHamburguerActive(!hamburguerActive);
    };
    
    const renderMenuItems = (navigationItems) => {
        return navigationItems.map((item, idx) => (
            <li
                key={idx}
                className={`menu__link ${item.path === pathname ? ' menu__link--active' : ''}`}
            >
                <a href={item.path} onClick={() => handleLinkClick(idx)}>
                {item.title}
                </a>
            </li>
        ));
    };

    return (
        <header className="header">
            <div className="mobile-nav">
                <div className="hamburguer" onClick={() => setHamburguerActive(!hamburguerActive)}>
                    <svg className={`hamburguer__btn ${hamburguerActive ? ' hamburguer__btn--active' : ''}`}>
                        <path className="line line-top" d="M0,9h30"/>
                        <path className="line line-center" d="M0,15h30"/>
                        <path className="line line-bottom" d="M0,21h30"/>
                    </svg>
                </div>
                <nav className={`menu ${hamburguerActive ? ' menu--show' : ''}`}>
                    <ul className="menu__container">
                    {renderMenuItems(navigationMain)}
                    </ul>
                </nav>
            </div>
            <div className="desktop-nav">
                <nav className="menu">
                    <Image src="/img/icon.svg" className="menu__icon" width={65} height={65} alt='Logo'/>
                    <ul className="menu__container">
                    {renderMenuItems(navigationMain)}
                    </ul>
                    <div className="menu__right-menu-container">
                        <button className="menu__right-menu-item"><a href="https://www.linkedin.com/in/saul-lopez-715536165/">LinkedIn</a></button>
                        <button className="menu__right-menu-item"><a href="https://github.com/sauljlm">GitHub</a></button>
                        <button
                            className="menu__right-menu-item button-language w-10 h-6 bg-no-repeat bg-cover bg-center active:scale-105"
                            style={{ backgroundImage: `url(${imageUrl})` }}
                        >
                            <Link href={pathname === '/es' ? '/' : '/es'} className="inline-block w-full h-full active:scale-105"></Link>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default NavBar
