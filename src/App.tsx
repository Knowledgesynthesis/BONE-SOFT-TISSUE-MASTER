import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import useStore from './store/useStore'
import Layout from './components/Layout'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Normal from './pages/modules/Normal'
import Reactive from './pages/modules/Reactive'
import BoneTumors from './pages/modules/BoneTumors'
import Cartilage from './pages/modules/Cartilage'
import Fibrous from './pages/modules/Fibrous'
import Fat from './pages/modules/Fat'
import Vascular from './pages/modules/Vascular'
import MuscleNerve from './pages/modules/MuscleNerve'
import Spindle from './pages/modules/Spindle'
import SRBCT from './pages/modules/SRBCT'
import Molecular from './pages/modules/Molecular'
import Radiology from './pages/modules/Radiology'
import Triage from './pages/modules/Triage'
import Pitfalls from './pages/modules/Pitfalls'
import Cases from './pages/modules/Cases'
import Assessment from './pages/Assessment'

function App() {
  const { theme } = useStore()

  useEffect(() => {
    // Apply theme on mount
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/normal" element={<Normal />} />
          <Route path="/reactive" element={<Reactive />} />
          <Route path="/bone-tumors" element={<BoneTumors />} />
          <Route path="/cartilage" element={<Cartilage />} />
          <Route path="/fibrous" element={<Fibrous />} />
          <Route path="/fat" element={<Fat />} />
          <Route path="/vascular" element={<Vascular />} />
          <Route path="/muscle-nerve" element={<MuscleNerve />} />
          <Route path="/spindle" element={<Spindle />} />
          <Route path="/srbct" element={<SRBCT />} />
          <Route path="/molecular" element={<Molecular />} />
          <Route path="/radiology" element={<Radiology />} />
          <Route path="/triage" element={<Triage />} />
          <Route path="/pitfalls" element={<Pitfalls />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
