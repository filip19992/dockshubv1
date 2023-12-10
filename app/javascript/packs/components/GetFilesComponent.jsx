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

  const handleDelete = (fileName) => {
    // Make a DELETE request to your API endpoint to delete the file by name
    // Example: /api/file_uploads/destroy/:file_name
    fetch(`/api/file/delete/${fileName}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log('File deleted successfully:', data);
        // Fetch the updated list of files after deletion
        fetchFiles();
      })
      .catch(error => {
        console.error('Error deleting file:', error);
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
              <button onClick={() => handleDelete(file.file_name)}>Delete</button>
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
