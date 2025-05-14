import '../style/navbar.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navbar">
                <a href="/"><img src="src/assets/logo.svg" alt="Logo" className="navbar__logo" /></a>
                <div className={`navbar__burger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`navbar__list ${isOpen ? 'active' : ''}`}>
                    <li className="navbar__item"><Link to="/" className="navbar__link" onClick={toggleMenu}>Hjem</Link></li>
                    <li className="navbar__item"><Link to="/about-us" className="navbar__link" onClick={toggleMenu}>Om os</Link></li>
                    <li className="navbar__item"><Link to="/sponsor" className="navbar__link" onClick={toggleMenu}>Tilmeld som sponsor</Link></li>
                    <li className="navbar__item"><Link to="/thankyou" className="navbar__link" onClick={toggleMenu}>Børnelejren takker</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;