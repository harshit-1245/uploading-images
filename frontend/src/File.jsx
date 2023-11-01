import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', image);

    try {
      await axios.post('http://localhost:3001/upload', formData);
      alert('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <h1>Image Upload App</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Image</button> 
      {image && <img src={`http://localhost:3001/uploads/${image.name}`} alt="Uploaded" />}
    </div>
  );
}

export default App;
