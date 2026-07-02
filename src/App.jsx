import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { MeshBackground } from '@/components/ui'
import MarketingLayout from '@/pages/MarketingLayout.jsx'
import Home from '@/pages/Home.jsx'

const Planner = lazy(() => import('@/pages/Planner.jsx'))
const Services = lazy(() => import('@/pages/Services.jsx'))
const Learn = lazy(() => import('@/pages/Learn.jsx'))
const Platforms = lazy(() => import('@/pages/Platforms.jsx'))
const Features = lazy(() => import('@/pages/Features.jsx'))
const Dtc = lazy(() => import('@/pages/Dtc.jsx'))
const Agency = lazy(() => import('@/pages/Agency.jsx'))
const Pricing = lazy(() => import('@/pages/Pricing.jsx'))
const Docs = lazy(() => import('@/pages/Docs.jsx'))
const Download = lazy(() => import('@/pages/Download.jsx'))

function Fallback() {
  return (
    <div className="grid min-h-dvh place-items-center">
      <span className="h-6 w-6 animate-spin rounded-full border-2 border-fg-subtle border-t-transparent" />
    </div>
  )
}

export default function App() {
  return (
    <>
      <MeshBackground />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route element={<MarketingLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/services" element={<Services />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/platforms" element={<Platforms />} />
            <Route path="/features" element={<Features />} />
            <Route path="/solutions/dtc" element={<Dtc />} />
            <Route path="/solutions/agency" element={<Agency />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/download" element={<Download />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  )
}
