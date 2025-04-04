import ConnectWithDePIN from '@/components/landing/ConnectWithDePIN'
import FlywheelFirst from '@/components/landing/FlywheelFirst'
import FlywheelSecond from '@/components/landing/FlywheelSecond'
import FlywheelThird from '@/components/landing/FlywheelThird'
import Hero from '@/components/landing/Hero'
import PartnerSlider from '@/components/landing/PartnerSlider'
import TotalStatistics from '@/components/landing/TotalStatistics'

export default function LandingPage() {
  return (
    <main className="bg-[#F7F5EB] text-[#2B2B2B]">
      <Hero />
      <PartnerSlider />
      <TotalStatistics />
      <FlywheelFirst />
      <FlywheelSecond />
      <FlywheelThird />
      <ConnectWithDePIN />
    </main>
  )
}