export const metadata = {
  title: 'Welcome to Green Tea DAO',
  description: 'Welcome to Green Tea Dao – an oasis for the tea enthusiast and the curious alike. Immerse yourself in the verdant world of green tea, where tradition meets tranquility.',
}

import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'

export default function Home() {
  return (
    <>
      <Zigzag />
      <Newsletter />
    </>
  )
}
