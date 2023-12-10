import React, { useState } from 'react';

const API_UPLOAD_ENDPOINT = '/api/upload';

const UploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      console.log('Selected File:', selectedFile);
      console.log('FormData:', formData);

      fetch(API_UPLOAD_ENDPOINT, {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log('File uploaded successfully:', data);
         console.log(formData)
        })
        .catch(error => {
          console.error('Error uploading file:', error);
          // Handle error, show message, etc.
        });
    } else {
      console.log('No file selected');
      // Handle case where no file is selected
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      handleUpload();
    } else {
      console.log('Select a file first');
      // Optionally, you can show a message to select a file before upload
    }
  };

  return (
    <div>
      <label htmlFor="fileInput">Choose File:</label>
      <input
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <div>
        {selectedFile ? (
          <p>Selected File: {selectedFile.name}</p>
        ) : (
          <p>No file selected</p>
        )}
      </div>
      <label htmlFor="fileInput" style={{ cursor: 'pointer', color: 'blue' }}>
        Choose File
      </label>
      <button onClick={handleFileUpload}>Upload File</button>
    </div>
  );
};

export default UploadComponent;
