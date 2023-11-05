import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createRoot } from 'react-dom/client';

function HelloComponent() {
  const [message, setMessage] = useState('');

  useEffect(() => {
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

const root = createRoot(document.getElementById('hello-message'));
root.render(<HelloComponent />);

export default HelloComponent;
