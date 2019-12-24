import React from 'react';
import './App.css';

function App() {
  const guestRoutes = <></>
  const userRoutes = <></>
  const isAuthenticated = false;
  return (
    isAuthenticated ? userRoutes : guestRoutes
  );
}

export default App;
