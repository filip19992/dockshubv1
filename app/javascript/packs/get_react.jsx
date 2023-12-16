import React from 'react';
import { createRoot } from 'react-dom';
import GetFilesComponent from './components/GetFilesComponent';

document.addEventListener('DOMContentLoaded', () => {
  const reactRoot = document.getElementById('get-files-component');
  const root = createRoot(reactRoot);
  root.render(<GetFilesComponent />);
});
