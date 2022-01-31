import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {AuthPage} from './pages/AuthPage';
import {HomePage} from './pages/HomePage';
import {ProfilePage} from './pages/ProfilePage';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Routes>

        <Route path="/home" element={<HomePage />} />
       
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="*" element={<Navigate to="/home" />} />
        
      </Routes>
    )
}

    return (
      <Routes>
        <Route path="/" element={<AuthPage />} />
       
        <Route path="*" element={<Navigate to="/" />} />      
      </Routes>
    )
}