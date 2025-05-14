import Footer from "../components/footer";
import Navbar from "../components/navbar";
import '../style/about.scss';

function About() {
    return (
        <>
            <Navbar />
            <div className="about-container">
                <div className="about-content">

                    <div className="about-header">
                        <div className="image-container">
                            <img src="/Billeder/Fotos/foto1.jpg" alt="Om Os" />
                            <h1 className="about-title overlay-text">Om Os</h1>
                        </div>

                    </div>
                    <div className="about-text">
                        <div>
                            <img src="Billeder/Logo/favicon.png" alt="" />
                        </div>
                        <div className="about-text-content">
                            <p>Børnelejren på Langeland er en velgørende, non-profit forening, som afholder finansierede lejre for dårligt stillede børn og unge fra hele landet.</p>
                            <p>Børnelejrene bliver afholdt på foreningens bondegård, Søgård Hovedgård, som ligger i naturskønne omgivelser på sydspidsen af Langeland.</p>
                            <p>Samtlige omkostninger til alle børns ophold og transport til/fra lejren bliver finansieret af foreningen, og det er et krav fra foreningens side, at der ikke opkræves brugerbetaling af børnenes forældre for opholdet på Søgård.</p>
                        </div>

                    </div>
                    <div className="about-features">
                        <div className="feature-card">
                            <h3>Vores Arbejde</h3>
                            <p>Foreningens bestyrelse og frivillige hjælpere arbejder ulønnet for Foreningen. Medarbejderne fra institutionerne på foreningens lejre, får ikke kolonitillæg udbetalt af Foreningen.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Finansiering</h3>
                            <p>Det er primært virksomheder og støttemedlemmer, der finansierer foreningens drift og aktiviteter. Vi har heldigvis erfaret, at rigtig mange virksomheder er villige til at bakke op omkring lejren.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Kontakt</h3>
                            <p>Alle henvendelser bedes sendt til Knud Bro Alle 1, st. mf., 3660 Stenløse eller ring til sekretariatet på telefon 38711260. Foreningens formand er dagligt at træffe i sekretariatet.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;