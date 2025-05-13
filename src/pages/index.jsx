import { Link } from "react-router";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import '../style/media.scss';
function Forside() {
    return (
        <>
            <Navbar />
            <h1 className="forside__title">Velkommen Til Børnelejren</h1>
            <Link to="/sponsor" className="forside__button">Bliv Sponsor</Link>
            <div className="forside__content">
                <section className="forside__intro">
                    <h2 className="forside__start-title">Starten</h2>
                    <div className="forside__flex-container">
                        <div className="forside__image-container">
                            <img className="forside__image" src="Billeder/Fotos/foto1.jpg" alt="Børnelejren på Langeland" />
                        </div>
                        <p className="forside__intro-text">Børnelejren på Langeland er en forening, der udelukkende har til formål at sende dårligt stillede børn og unge sammen med deres pædagoger på et ophold i landlige omgivelser på det naturskønne Sydlangeland. Foreningen Børnelejren på Langeland samler penge ind fra erhvervslivet, fonde og private til at sende dårligt stillede børn på et velfortjent lejrophold på Søgård.</p>
                    </div>
                </section>

                <section className="forside__mission">
                    <h2 className="forside__mission-title">Vores Mission</h2>
                    <div className="forside__flex-container">
                        <p className="forside__mission-text">Der er mange børn i verden, der ikke har det så godt, som de burde have det. Det gælder desværre også i Danmark. Der er børn med medfødte handicap, børn der er blevet alvorligt syge, børn der lider under omsorgssvigt eller bliver udsat for overgreb, børn der er tvangsfjernet fra deres hjem og familie, børn der vokser op i meget fattige familier - vi kender nok alle sammen et barn, der tilhører en af disse grupper, og det er disse børn, vi gerne vil gøre noget for.</p>
                        <div className="forside__image-container">
                            <img className="forside__image" src="Billeder/Logo/favicon.png" alt="Vores Mission" />
                        </div>
                    </div>
                </section>

                <section className="forside__purpose">
                    <h2 className="forside__purpose-title">Formål med Lejrene</h2>
                    <div className="forside__flex-container">
                        <div className="forside__image-container">
                            <img className="forside__image" src="Billeder/Fotos/foto3.jpg" alt="Formål med Lejrene" />
                        </div>
                        <p className="forside__purpose-text">Meningen med lejrene er, at give børnene et ophold på vores gamle bondegård med fokus på fællesskab, natur, kultur og gode fælles oplevelser, da mange af børnene er fattige på oplevelser. For nogle af børnene er opholdet det tætteste de kommer på en ferie, da de ikke kommer på ferie med deres egne familier, ofte pga. få ressourcer i familien, både menneskelige og økonomiske.</p>
                    </div>
                </section>

                <section className="forside__impact">
                    <h2 className="forside__impact-title">Betydning og Resultater</h2>
                    <div className="forside__flex-container">
                        <div>
                            <p className="forside__impact-text">Ligeledes betyder det noget for det sociale liv og sammenhold, at de har fælles oplevelser at kunne referere til. Personalet kan med deres faglighed og kendskab til børnene og de unge tilbyde andre aktiviteter end de vil få i hjemmet, da forældrene ofte er voldsom presset og det vil være et dejligt afbræk fra hverdagen for børnene, at få et ophold på Søgård Hovedgård.</p>
                            <p className="forside__impact-text">Desuden skulle børnene gerne komme hjem fyldt af glade minder og gode oplevelse, som gerne skulle give dem det overskud, der skal til, for at komme helskindet gennem deres ofte lidt triste hverdag. Mange af dem knytter bånd og venskaber under lejrene, der gerne skulle give dem et nyt netværk til støtte i fremtiden.</p>
                        </div>
                        <div className="forside__image-container">
                            <img className="forside__image" src="Billeder/Fotos/foto5.jpg" alt="Betydning og Resultater" />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Forside;