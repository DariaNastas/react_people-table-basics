import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PeoplePage } from './components/PeoplePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Navbar } from './components/Navbar';

export const App: React.FC = () => (
  <div data-cy="app">
    <Navbar />
    <main className="section">
      <div className="container">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Redirect from /home to / */}
          <Route path="/home" element={<Navigate to="/" replace />} />

          {/* People Page */}
          <Route path="/people" element={<PeoplePage />} />

          {/* NotFound Page for any other route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </main>
  </div>
);
