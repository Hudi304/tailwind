import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ThemeProvider } from './components/theme/ThemeProvider'
import { ModalProvider } from './context/modal-context'
import './index.scss'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ModalProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ModalProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
