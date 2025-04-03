import Hero from '@/components/landing/Hero'
import PartnerSlider from '@/components/landing/PartnerSlider'
import TotalStatistics from '@/components/landing/TotalStatistics'

export default function LandingPage() {
  return (
    <main className="bg-[#F7F5EB] text-[#2B2B2B]">
      <Hero />
      <PartnerSlider />
      <TotalStatistics />
    </main>
  )
}