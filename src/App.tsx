import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home"
import Details from "./pages/Details"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

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
