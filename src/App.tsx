// src/App.tsx

import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Labs from './Labs';
import Kanbas from './Kanbas';

export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          {/* Default route redirects to Kanbas */}
          <Route path="/" element={<Navigate to="/Kanbas" />} />

          {/* Labs route */}
          <Route path="/Labs/*" element={<Labs />} />

          {/* Kanbas route */}
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
