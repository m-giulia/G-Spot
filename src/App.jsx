import {Routes, Route, useLocation} from "react-router-dom"; 

import Home from './pages/Home';
import About from "./pages/About";
import Blog from "./pages/Blog";
import Donations from "./pages/Donations";
import './App.css'

import Header from "./components/Header";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <main>
          <Header/>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home/>} />
              <Route path="/about" element={<About/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/donations" element={<Donations/>}/>
            </Routes>
          </AnimatePresence>
          <Footer/>
      </main>
    </>
  )
}

export default App


