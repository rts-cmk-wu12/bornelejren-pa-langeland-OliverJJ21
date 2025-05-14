import '../style/form.scss';

function SponsForm() {
    return (
        <>
            <div className="form-container">
                <form className="sponsor-form">
                    <div className='form-group'>
                        <label>Støtte type</label>
                        <select name="supportType" id="supportType" required>
                            <option value="børnesponsorat">Børnesponsorat</option>
                            <option value="lejrsponsorat">Lejrsponsorat</option>
                            <option value="foreningsstøtte">Støtte til foreningen</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Beløb</label>
                        <input type="number" id="amount" name="amount" required />
                    </div>
                    <div className="form-group">
                        <label >Firma navn</label>
                        <input type="text" id="companyName" name="companyName" required />
                    </div>
                    <div className="form-group">
                        <label>Adresse</label>
                        <input type="text" id="adress" name="adress" required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label>Telefon</label>
                        <input type="tel" id="phone" name="phone" required />
                    </div>
                    <button type="submit" className="submit-btn">Tilmeld</button>
                </form>
            </div>
        </>
    );
}

export default SponsForm;