import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Landing from './pages/Landing'
import ThankYou from './pages/ThankYou'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

function PageTracker() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: location.pathname })
    }
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <PageTracker />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  )
}
