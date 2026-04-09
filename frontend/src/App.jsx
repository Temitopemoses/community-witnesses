import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import OurWork from './pages/OurWork'
import Donate from './pages/Donate'
import GetInvolved from './pages/GetInvolved'
import Contact from './pages/Contact'
import Founder from './pages/Founder'
import ScrollToTop from './components/ScrollToTop'

import FloatingDonateButton from './components/FloatingDonateButton'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingDonateButton />
    </div>
  )
}

export default App
