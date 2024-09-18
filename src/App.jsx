import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormPage from './FormPage';
import DisplayPage from './DisplayPage';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage setFormData={setFormData} />} />
        <Route path="/display" element={<DisplayPage formData={formData} />} />
      </Routes>
    </Router>
  );
}

export default App;
