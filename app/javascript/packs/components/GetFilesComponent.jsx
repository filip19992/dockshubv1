import React, { useState, useEffect } from 'react';

const API_FILES_ENDPOINT = '/api/file/get';

const GetFilesComponent = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = () => {
    fetch(API_FILES_ENDPOINT)
      .then(response => response.json())
      .then(data => {
        setFiles(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching files:', error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>List of Uploaded Files</h2>
      {loading ? (
        <p>Loading...</p>
      ) : files.length > 0 ? (
        <ul>
          {files.map(file => (
            <li key={file._id}>
              <a href={`/file_uploads/${file.file_name}`} download={file.file_name}>
                {file.file_name}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No files available</p>
      )}
    </div>
  );
};

export default GetFilesComponent;
