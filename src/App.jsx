import { Routes, Route } from 'react-router-dom';
import Forside from './pages/index.jsx';
import About from './pages/about.jsx';
import './style/style.scss';
import Sponsor from './pages/sponsor.jsx';
import ThankYou from './pages/thankyou.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </>


  )
}

export default App
