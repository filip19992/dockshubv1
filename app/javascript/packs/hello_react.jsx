import React from 'react';
import { createRoot } from 'react-dom';
import HelloComponent from './components/HelloComponent';

document.addEventListener('DOMContentLoaded', () => {
  const reactRoot = document.getElementById('react-root');
  const root = createRoot(reactRoot);
  root.render(<HelloComponent />);
});
