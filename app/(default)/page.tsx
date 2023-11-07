export const metadata = {
  title: 'Welcome to Green Tea DAO',
  description: 'Welcome to Green Tea Dao – an oasis for the tea enthusiast and the curious alike. Immerse yourself in the verdant world of green tea, where tradition meets tranquility.',
}

// import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
// import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      {/* <Features /> */}
      <Zigzag />
      {/* <Testimonials /> */}
      <Newsletter />
    </>
  )
}
