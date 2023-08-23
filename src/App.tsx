import { useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import "./App.scss"
import { Home } from "./pages/home/home"
import { storeDeviceData } from "./common/device-data"

export function App() {
  useEffect(storeDeviceData, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </div>
  )
}
