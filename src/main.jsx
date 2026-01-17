import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '../components/App.jsx'
import Footer from "../components/Footer.jsx"
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
    <Footer />
  </HashRouter>,
)

