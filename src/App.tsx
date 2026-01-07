import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./pages/Layout/Layout"
import Home from "./pages/Layout/Home"
import Details from "./pages/Layout/Details"
import About from "./pages/Layout/About"
import Contact from "./pages/Layout/Contact"
import NotFound from "./pages/Layout/NotFound"

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="details" element={<Details />}/>
                <Route path="about" element={<About />}/>
                <Route path="contact" element={<Contact />}/>
            </Route>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
