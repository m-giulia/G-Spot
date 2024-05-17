import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./scrollTop";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>

      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<App/> } />
      </Routes>
    </Router>
  </React.StrictMode>,
)
