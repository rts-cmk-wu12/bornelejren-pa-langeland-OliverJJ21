import '../style/footer.scss';
function Footer() {
    return (
        <>
        <footer className="footer">
                        <div className="footer__content">
                            <div className="footer__section">
                                <h3 className="footer__heading">Kontakt</h3>
                                <p className="footer__text">Sekretariatet og administration:</p>
                                <p className="footer__text">Knud Bro Alle 1, st. mf.</p>
                                <p className="footer__text">3660 Stenløse</p>
                                <p className="footer__text">Telefon: <a href="tel:38711260">38711260</a></p>
                                <p className="footer__text">E-mail: <a href="mailto:info@lejren.dk">info@lejren.dk</a></p>
                            </div>
                            <div className="footer__section">
                                <h3 className="footer__heading">Lejren</h3>
                                <p className="footer__text">Søgård Hovedgård</p>
                                <p className="footer__text">Søgårdsvej 8A</p>
                                <p className="footer__text">5935 Bagenkop</p>
                            </div>
                            <div className="footer__section">
                                <h3 className="footer__heading">Bank Information</h3>
                                <p className="footer__text">SE-nr. 26917425</p>
                                <p className="footer__text">Danske Bank: reg.nr. 1551 konto 10008182</p>
                                <p className="footer__text">Merkur Bank: reg.nr. 8401 konto 1077819</p>
                                <p className="footer__text">Merkur Bank: reg.nr. 8401 konto 4215119</p>
                                <p className="footer__text">MobilePay 27231</p>
                            </div>
                        </div>
                        <div className="footer__bottom">
                            <small className="footer__copyright">&copy; 2025 Børnelejren på Langeland. All rights reserved.</small>
                        </div>
                    </footer>
        
        </>
    );
}

export default Footer;