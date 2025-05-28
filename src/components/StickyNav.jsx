import { useEffect } from 'react';
import './StickyNav.css';

const StickyNav = () => {
    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('.sticky-nav');
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className="sidebar">
            <nav className="sticky-nav">
                <ul>
                    <li onClick={() => window.location.href = "#"}>
                        <i className='bx  bx-home-alt'/> 
                        <span>Home</span>
                    </li>
                    <li onClick={() => window.location.href = "#projects"}>
                        <i className="bx  bx-code-alt"/>
                        <span>Projects</span>
                    </li>
                    <li onClick={() => window.location.href = "#work"}>
                        <i className='bx  bx-briefcase-alt'/> 
                        <span className="nav-long">Work Experience</span>
                        <span className="nav-short">Work</span>
                    </li>
                    <li onClick={() => window.location.href = "#contact"}>
                        <i className="bx  bx-paper-plane"/> 
                        <span>Contact</span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default StickyNav