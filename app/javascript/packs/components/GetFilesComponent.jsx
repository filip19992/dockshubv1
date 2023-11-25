import React, { useState, useEffect } from 'react';

const API_FILES_ENDPOINT = '/api/file/get';

const GetFilesComponent = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = () => {
    fetch(API_FILES_ENDPOINT)
      .then(response => response.json())
      .then(data => {
        setFiles(data);
      })
      .catch(error => {
        console.error('Error fetching files:', error);
        // Handle error, show message, etc.
      });
  };

  console.log(files)
  return (
    <div>
      <h2>List of Uploaded Files</h2>
      {files.length > 0 ? (
        <ul>
          {files.map((file, index) => (
  <li key={index}>{file.file_name}</li>
))}
        </ul>
      ) : (
        <p>No files available</p>
      )}
    </div>
  );
};

export default GetFilesComponent;
