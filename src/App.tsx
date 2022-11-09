import React, { useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import "./App.scss"
import { Home } from "./pages/home/home"
import { useTheme } from "./components/theme/themeProvider"
import { storeDeviceData } from "./common/device-data"

function App() {
  const { theme } = useTheme()

  useEffect(storeDeviceData, [])

  return (
    <div className="App" style={{ ...theme } as React.CSSProperties}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </div>
  )
}

export default App
