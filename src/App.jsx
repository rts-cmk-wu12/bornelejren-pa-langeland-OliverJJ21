import { Routes, Route } from 'react-router-dom';
import Forside from './pages/index.jsx';
import './style/style.scss';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Forside />} />
        
      </Routes>
    </>


  )
}

export default App
