import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormPage({ setFormData }) {
  const [NAME, setNAME] = useState("");
  const [fNAME, setfNAME] = useState("");
  const [cnic, setcnic] = useState("");
  const [COURSE, setCOURSE] = useState("");
  const [id, setId] = useState("");
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
    navigate("/display");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Registration Form
        </h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setNAME(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter F/Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setfNAME(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Your Course"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setCOURSE(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Your CNIC"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setcnic(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Your Roll Number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setId(e.target.value)}
          />
          <div className="flex items-center space-x-4">
            <input
              type="file"
              className="w-full text-gray-800"
              onChange={handleImageChange}
            />
            {img && (
              <img
                src={img}
                alt="Preview"
                className="w-12 h-12 rounded-full object-cover"
              />
            )}
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default FormPage;
