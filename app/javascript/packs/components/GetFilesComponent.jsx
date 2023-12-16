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
    fetch(`/api/file/delete/${fileName}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log('File deleted successfully:', data);
        fetchFiles();
      })
      .catch(error => {
        console.error('Error deleting file:', error);
      });
  };

  return (
    <div style={styles.getFilesContainer}>
      <h2 style={styles.heading}>List of Uploaded Files</h2>
      {loading ? (
        <p>Loading...</p>
      ) : files.length > 0 ? (
        <ul style={styles.filesList}>
          {files.map(file => (
            <li key={file._id} style={styles.fileItem}>
              <a href={`/file_uploads/${file.file_name}`} download={file.file_name} style={styles.fileName}>
                {file.file_name}
              </a>
              <button onClick={() => handleDelete(file.file_name)} style={styles.deleteButton}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No files available</p>
      )}
    </div>
  );
};

const styles = {
  getFilesContainer: {
    marginTop: '20px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: '#3498db',
  },
  filesList: {
    listStyle: 'none',
    padding: 0,
  },
  fileItem: {
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fileName: {
    color: '#3498db',
    textDecoration: 'none',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default GetFilesComponent;
