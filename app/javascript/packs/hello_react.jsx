import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HelloComponent() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Replace with the actual URL of your Rails API endpoint
    axios.get('/api/hello')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default HelloComponent;
