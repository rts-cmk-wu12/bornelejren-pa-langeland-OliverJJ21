import '../style/navbar.scss';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <>
            <nav className="navbar">
                <img src="/Billeder/Logo/logo.svg" alt="Logo" className="navbar__logo" />
                <ul className="navbar__list">
                    <li className="navbar__item"><Link to="/" className="navbar__link">Hjem</Link></li>
                    <li className="navbar__item"><Link to="/about" className="navbar__link">Om os</Link></li>
                    <li className="navbar__item"><Link to="/sponsor" className="navbar__link">Tilmeld som sponsor</Link></li>
                    <li className="navbar__item"><Link to="/thankyou" className="navbar__link">Børnelejren takker</Link></li>
                </ul>
            </nav>
            </>
    );
}

export default Navbar;