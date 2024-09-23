"use client"
import { useState, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

function NavBar() {
    const [hamburguerActive, setHamburguerActive] = useState(false);
    const pathname = usePathname();

    const languageImg = pathname === '/es' ? '/img/language/english.png' : '/img/language/spanish.png';

    const spanishNav = [
        { title: "Proyectos", path: "#projects" },
        { title: "Experiencia", path: "#experience" },
        { title: "Tecnologías", path: "#technologies" },
        { title: "Sobre mí", path: "#about-me" }
    ];

    const englishNav = [
        { title: "Projects", path: "#projects" },
        { title: "Experience", path: "#experience" },
        { title: "Technologies", path: "#technologies" },
        { title: "About me", path: "#about-me" }
    ];

    const handleLinkClick = () => {
        setHamburguerActive(!hamburguerActive);
    };
    
    const renderMenuItems = (navigationItems) => {
        return navigationItems.map((item, idx) => (
            <li
                key={idx}
                className={`menu__link ${item.path === pathname ? ' menu__link--active' : ''}`}
            >
                <a href={item.path} onClick={() => handleLinkClick()}>
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
                <Image src="/img/icon.svg" className="menu__icon block md:hidden" width={65} height={65} alt='Logo'/>
                <nav className={`menu ${hamburguerActive ? ' menu--show' : ''}`}>
                    <button
                        className="menu__right-menu-item button-language w-10 h-6 bg-no-repeat bg-cover bg-center active:scale-105"
                        style={{ backgroundImage: `url(${languageImg})` }}
                        onClick={() => setHamburguerActive(!hamburguerActive)}
                    >
                        <Link href={pathname === '/es' ? '/' : '/es'} className="inline-block w-full h-full active:scale-105"></Link>
                    </button>
                    <ul className="menu__container">
                    {pathname === '/es' ? renderMenuItems(spanishNav) : renderMenuItems(englishNav)}
                    </ul>
                </nav>
            </div>
            <div className="desktop-nav">
                <nav className="menu">
                    <Image src="/img/icon.svg" className="menu__icon" width={65} height={65} alt='Logo'/>
                    <ul className="menu__container">
                    {pathname === '/es' ? renderMenuItems(spanishNav) : renderMenuItems(englishNav)}
                    </ul>
                    <div className="menu__right-menu-container">
                        <button className="menu__right-menu-item hidden md:block"><a href="https://www.linkedin.com/in/saul-lopez-715536165/">LinkedIn</a></button>
                        <button className="menu__right-menu-item hidden md:block"><a href="https://github.com/sauljlm">GitHub</a></button>
                        <button
                            className="menu__right-menu-item button-language w-10 h-6 bg-no-repeat bg-cover bg-center active:scale-105"
                            style={{ backgroundImage: `url(${languageImg})` }}
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
