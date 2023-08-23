import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./components/theme/themeProvider"
import { ModalProvider } from "./context/modal-context"
import App from "./App"
import "./index.scss"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
