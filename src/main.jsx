import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Reduxstore from './Pages/CentralStore/store.js'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
    <Provider store={Reduxstore}>
    <App />
     </Provider>
    </BrowserRouter>
 // </StrictMode>,
)
