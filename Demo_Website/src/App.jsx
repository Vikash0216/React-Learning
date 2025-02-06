import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"

function App() {
  return (
    <>
     <Router >
      <Header />
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
     </Router >
    </> 
  )
}

export default App
