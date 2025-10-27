import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import AboutPage from './pages/aboutUs/AboutPage';
import VisionPage from './pages/aboutUs/VisionPage';
import LeadershipPage from './pages/aboutUs/LeadershipPage';
import HistoryPage from './pages/aboutUs/HistoryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="vision" element={<VisionPage />} />
          <Route path="leadership" element={<LeadershipPage />} />
          <Route path="history" element={<HistoryPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
