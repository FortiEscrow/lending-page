import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Solution } from '@/components/sections/Solution'
import { Architecture } from '@/components/sections/Architecture'
import { Security } from '@/components/sections/Security'
import { UseCases } from '@/components/sections/UseCases'
import { Ecosystem } from '@/components/sections/Ecosystem'
import { GetStarted } from '@/components/sections/GetStarted'

export default function Home() {
  return (
    <main className="w-full bg-bg-primary">
      <Hero />
      <Problem />
      <Solution />
      <Architecture />
      <Security />
      <UseCases />
      <Ecosystem />
      <GetStarted />
    </main>
  )
}
