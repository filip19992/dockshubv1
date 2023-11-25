import React from 'react';
import { createRoot } from 'react-dom';
import UploadComponent from './components/UploadComponent';

document.addEventListener('DOMContentLoaded', () => {
  const reactRoot = document.getElementById('react-root-2');
  const root = createRoot(reactRoot);
  root.render(<UploadComponent />);
});
