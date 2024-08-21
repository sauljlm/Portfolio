"use client"
import { useState, useEffect } from "react";
import Image from 'next/image'

function NavBar() {
    const [activeLink, setActiveLink] = useState(0);
    const [hamburguerActive, setHamburguerActive] = useState(false);
    const [pathname, setPathname] = useState('');

    useEffect(() => {
        // Este código solo se ejecutará en el cliente
        if (typeof window !== 'undefined') {
            setPathname(window.location.pathname);
        }
    }, []);

    const navigationLogged = [
        { title: "Proyectos", path: "#projects" },
        { title: "Experiencia", path: "#experience" },
        { title: "Tecnologías", path: "#technologies" }
    ];
    const navigationMain = [
        { title: "Proyectos", path: "#projects" },
        { title: "Experiencia", path: "#experience" },
        { title: "Tecnologías", path: "#technologies" }
    ];

    const handleLinkClick = (idx) => {
        setActiveLink(idx);
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
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default NavBar
