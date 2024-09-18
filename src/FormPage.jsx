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
    setFormData({ NAME, fNAME, cnic, COURSE, id, img });
    navigate('/display');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">User Information Form</h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="ENTER YOUR NAME"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setNAME(e.target.value)}
          />
          <input
            type="text"
            placeholder="ENTER F/NAME"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setfNAME(e.target.value)}
          />
          <input
            type="text"
            placeholder="ENTER YOUR COURSE"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setCOURSE(e.target.value)}
          />
          <input
            type="number"
            placeholder="ENTER YOUR CNIC"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setcnic(e.target.value)}
          />
          <input
            type="number"
            placeholder="ENTER YOUR ROLL NUMBER"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="file"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleImageChange}
          />
          {img && (
            <div className="flex justify-center mt-4">
              <img src={img} alt="Uploaded Preview" className="w-32 h-32 object-cover rounded-lg border" />
            </div>
          )}
          <button
            className="w-full p-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
