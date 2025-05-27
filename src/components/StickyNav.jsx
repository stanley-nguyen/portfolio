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
                        Home
                    </li>
                    <li onClick={() => window.location.href = "#projects"}>
                        <i className="bx  bx-code-alt"/>
                        Projects
                    </li>
                    <li onClick={() => window.location.href = "#work"}>
                        <i className='bx  bx-briefcase-alt'/> 
                        Work Experience
                    </li>
                    <li onClick={() => window.location.href = "#contact"}>
                        <i className="bx  bx-paper-plane"/> 
                        Contact
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default StickyNav