import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Principal from './principal';
import Mesero from './mesero';
import Cliente from './cliente';
import Propina from './propina';

function App () {
    
    return (
      <Routes>
        <Route path = "/" element={<Principal />} />
        <Route path = "/mesero" element={<Mesero />} />
        <Route path = "/cliente" element={<Cliente />} />
        <Route path = "/propina" element={<Propina />} />
      </Routes>
    );
}
export default App;