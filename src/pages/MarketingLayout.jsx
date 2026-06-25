import { Outlet } from 'react-router-dom'
import MarketingNav from '@/components/MarketingNav.jsx'
import MarketingFooter from '@/components/MarketingFooter.jsx'

export default function MarketingLayout() {
  return (
    <div className="relative">
      <MarketingNav />
      <Outlet />
      <MarketingFooter />
    </div>
  )
}
