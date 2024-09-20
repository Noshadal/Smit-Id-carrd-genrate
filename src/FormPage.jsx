import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormPage({ setFormData }) {
  const [NAME, setNAME] = useState('');
  const [fNAME, setfNAME] = useState('');
  const [cnic, setcnic] = useState('');
  const [COURSE, setCOURSE] = useState('');
  const [id, setId] = useState('');
  const [img, setImg] = useState(null);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(URL.createObjectURL(file)); // Generate a URL to preview the image
    }
  };

  const handleSubmit = () => {
    // Set the form data and navigate to the display page
    setFormData({ NAME, fNAME, cnic, COURSE, id, img });
    navigate('/display');
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="ENTER YOUR NAME" 
        onChange={(e) => setNAME(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="ENTER F/NAME" 
        onChange={(e) => setfNAME(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="ENTER YOUR COURSE" 
        onChange={(e) => setCOURSE(e.target.value)}
      />
      <input 
        type="number" 
        placeholder="ENTER YOUR CNIC" 
        onChange={(e) => setcnic(e.target.value)}
      />
      <input 
        type="number" 
        placeholder="ENTER YOUR ROLL NUMBER" 
        onChange={(e) => setId(e.target.value)}
      />
      <input 
        type="file" 
        onChange={handleImageChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default FormPage;
