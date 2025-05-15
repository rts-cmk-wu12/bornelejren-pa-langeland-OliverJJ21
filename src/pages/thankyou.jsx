import Footer from "../components/footer";
import Navbar from "../components/navbar";
import '../style/thankyou.scss';
function ThankYou() {
    const formDataArray = JSON.parse(localStorage.getItem('sponsorFormData')) || [];
    return (
        <>
            <Navbar />
            <section className="thankyou">
                <div className="thankyou__container">
                    <h1 className="thankyou__title">Tak for din støtte</h1>
                    <p className="thankyou__text">Børnelejren på Langeland takker alle, der på den ene eller anden måde, har støttet foreningens arbejde med at sende dårligt stillede børn på et ophold på Søgård Hovedgård - det være sig ved naturaliesponsorater eller økonomisk støtte fra støttemedlemmer, virksomhedssponsorer og donationer fra fonde</p>
                    {formDataArray.map((formData, index) => (
                        <div className="thankyou__content" key={index}>
                            <div className="thankyou__details">
                                <div className="thankyou__detail">
                                    <div className="thankyou__detail">
                                    <span className="thankyou__label">Firma navn:</span>
                                    {formData?.companyName}
                                </div>
                                    <span className="thankyou__label">Støtte type:</span>
                                    {formData?.supportType}
                                </div>
                                <div className="thankyou__detail">
                                    <span className="thankyou__label">Beløb:</span>
                                    {formData?.amount}kr
                                </div>
                               
                                <div className="thankyou__detail">
                                    <span className="thankyou__label">Telefon:</span>
                                    {formData?.phone}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default ThankYou;