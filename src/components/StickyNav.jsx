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
                        <i class='bx  bx-home-alt'/> 
                        Home
                    </li>
                    <li onClick={() => window.location.href = "#projects"}>
                        <i class="bx  bx-code-alt"/>
                        Projects
                    </li>
                    <li onClick={() => window.location.href = "#work"}>
                        <i class='bx  bx-briefcase-alt'/> 
                        Work Experience
                    </li>
                    <li onClick={() => window.location.href = "#contact"}>
                        <i class="bx  bx-paper-plane"/> 
                        Contact
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default StickyNav