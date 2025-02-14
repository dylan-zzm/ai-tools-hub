import { Hero } from '@/components/Hero'
import { HolidayCountdown } from '@/components/HolidayCountdown'
import { ToolsList } from '@/components/ToolsList'
import { RecentTools } from '@/components/RecentTools'

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <HolidayCountdown />
        <RecentTools />
        <ToolsList />
      </div>
    </div>
  )
} 