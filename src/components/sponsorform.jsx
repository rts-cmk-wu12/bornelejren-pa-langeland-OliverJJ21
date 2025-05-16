import '../style/form.scss';
import { useState } from 'react';

function SponsForm() {
    const [formData, setFormData] = useState({
        supportType: 'Børnesponsorat',
        amount: '',
        companyName: '',
        address: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const existingData = JSON.parse(localStorage.getItem('sponsorFormData')) || [];
        existingData.push(formData);
        localStorage.setItem('sponsorFormData', JSON.stringify(existingData));
        window.location.href = '/thankyou';
    };

    return (
        <>
            <div className="form-container">
                <form className="sponsor-form" onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Støtte type</label>
                        <select
                            name="supportType"
                            value={formData.supportType}
                            onChange={handleChange}
                            required
                        >
                            <option value="Børnesponsorat">Børnesponsorat</option>
                            <option value="Lejrsponsorat">Lejrsponsorat</option>
                            <option value="Foreningsstøtte">Støtte til foreningen</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Beløb</label>
                        <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Firma navn</label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Adresse</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Telefon</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">Tilmeld</button>
                </form>
            </div>
        </>
    );
}

export default SponsForm;