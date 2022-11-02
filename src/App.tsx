import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import './App.scss'
import { Home } from './pages/home/Home'
import { useTheme } from './components/theme/ThemeProvider';
import { Login } from './pages/login/Login';
import { storeDeviceData } from './common/device-data';
import { UserBar } from './components/user-bar/User-bar';

function withUserBar(element: React.ReactNode): React.ReactNode {
  return (
    <>
      <UserBar />
      <div className="content">
        {element}
      </div>
    </>
  );
}

function App() {
  const { theme } = useTheme();

  useEffect(storeDeviceData, []);

  return (
    <div className="App" style={{...theme} as React.CSSProperties}>
      <Routes >
        <Route path="/" element={withUserBar(<Home />)} />
        <Route path="/login" element={withUserBar(<Login />)} />
        <Route path="/account/:address/*" element={withUserBar(<div>account</div>)} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  )
}

export default App
