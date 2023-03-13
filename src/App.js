/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import React, { useState } from 'react';
import './App.css';
import ImageMapper from 'react-image-mapper';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div className="App">
      <h1>Upload an Image</h1>
      <form>
        <label htmlFor="image-upload">Select Image:</label>
        <input type="file" id="image-upload" name="image" accept="image/*" onChange={handleImageSelect} />
      </form>
      <div className="image-container">
        {selectedImage && (
          /*<img src={selectedImage} alt="Uploaded Image" />*/
          <ImageMapper src={selectedImage} MAP = {
  name: "my-map",
  areas: [
    { name: "1", "shape": "poly", "coords": [25,33,27,300,128,240,128,94]/>
          
          
        
        )}
        {selectedImage && (
          <div className="image-details">
            <p><u><b>Mohanlal</b></u>{selectedImage.name}</p>
            <p> Actor {selectedImage.type}</p>
            <p>09:00 AM {selectedImage.size} </p>
            <p>36.3<sup>0</sup>C {selectedImage.size} </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
/*import React, { useState } from 'react';
import Photo from './Photo';

function App() {
   return (
    <div className="App">
<Photo />
    </div>
        
  );
}
export default App;
import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="App">
      <h1>Upload an Image</h1>
      <form>
        <label htmlFor="image-upload">Select Image:</label>
        <input type="file" id="image-upload" name="image" accept="image/*" onChange={handleFileChange} />
      </form>
    
      
      {selectedFile && (
        <div className="image-container">
          <img
            className="image-upload"
            src={URL.createObjectURL(selectedFile)}
            alt="Selected file"
          />
          <div className="overlay">
            <div className="person person-1" />
            <p><u><b>Mohanlal</b></u>{selectedFile.name}</p>
            <p> Actor {selectedFile.type}</p>
            <p>09:00 AM {selectedFile.size} </p>
            <p>36.3<sup>0</sup>C {selectedFile.size} </p></div>
            <div className="person person-2" />
            <div className="person person-3" />
            { add more person divs as needed }
          </div>
      )}
        </div>
      
    
  );
}

export default App;*/
