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
          // Reload the entire page to reflect changes
          window.location.reload();
        })
        .catch(error => {
          console.error('Error uploading file:', error);
        });
    } else {
      console.log('No file selected');
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      handleUpload();
    } else {
      console.log('Select a file first');
    }
  };

  return (
    <div style={styles.uploadContainer}>
      <label htmlFor="fileInput" style={styles.fileInputLabel}>
        Choose File
      </label>
      <input
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        style={styles.fileInput}
      />
      <div style={styles.selectedFileContainer}>
        {selectedFile ? (
          <p style={styles.selectedFileText}>Selected File: {selectedFile.name}</p>
        ) : (
          <p>No file selected</p>
        )}
      </div>
      <button onClick={handleFileUpload} style={styles.uploadButton}>Upload File</button>
    </div>
  );
};

const styles = {
  uploadContainer: {
    marginBottom: '20px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  fileInputLabel: {
    cursor: 'pointer',
    color: '#3498db',
  },
  fileInput: {
    display: 'none',
  },
  selectedFileContainer: {
    marginTop: '10px',
  },
  selectedFileText: {
    color: '#27ae60',
  },
  uploadButton: {
    backgroundColor: '#2ecc71',
    color: '#fff',
    border: 'none',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default UploadComponent;
