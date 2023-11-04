
import Image from 'next/image'

import FeatImage01 from '@/public/images/tranquilGarden.png'
import FeatImage02 from '@/public/images/teaTime.png'
import FeatImage03 from '@/public/images/zen.png'
import FeatImage04 from '@/public/images/Tea.png'
import FeatImage05 from '@/public/images/japanMap.png'
import FeatImage06 from '@/public/images/samurai.png'
import FeatImage07 from '@/public/images/samuraiTea.png'
import FeatImage08 from '@/public/images/samuraiTeaDrinking.png'
import MainImage from '@/public/images/matcha-view.png'


export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <div className="mb-8">
                <Image src={MainImage} alt="Descriptive Alt Text" className="mx-auto" />
              </div>
              <h1 className="h2 mb-4">We think green tea is awesome.</h1>
              <p className="text-xl text-gray-400">You might want to scroll down if you think so too</p>
            </div>
            <div className="animate-bounce flex items-center justify-center w-full">
              <svg className="w-6 h-6 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>




          {/* Items with adjusted padding-top to start below the frame of the first opening */}
          <div className="grid gap-20 pt-16"> {/* Adjust this pt-16 value as needed */}

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage05} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                  <h3 className="h3 mb-3"></h3>
                  <p className="text-xl text-gray-300 mb-4"> In the land of rising sun, green tea isn't just a beverage, it's a lifestyle. And let's be honest, your current green tea experience?</p> <br></br> <p className="text-xl text-gray-300 mb-4">It’s about as authentic as a sushi roll from a gas station.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage04} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                  <h3 className="h3 mb-3"></h3>
                  <p className="text-xl text-gray-300 mb-4">You might think, "But It’s organic..."</p> <br></br> <p className="text-xl text-gray-300 mb-4">Sure, Karen. And I’m the Emperor of Japan.</p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage06} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                  {/* <h3 className="h3 mb-3">Keep projects on schedule</h3> */}
                  <p className="text-xl text-gray-300 mb-4">Welcome to Green Tea DAO, where we revere the leaf as a samurai respects their blade.</p> <br></br> <p className="text-xl text-gray-300 mb-4">Because here, every leaf tells a story—steeped in history, not pesticides.</p>
                </div>
              </div>
            </div>

            {/* 4th item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                  {/* <h3 className="h3 mb-3">Keep projects on schedule</h3> */}
                  <p className="text-xl text-gray-300 mb-4">Your tea corner isn't just a tea corner... It's a silent dojo where every sip is a kata, perfecting the art of relaxation.</p> 
                </div>
              </div>
            </div>

            {/* 5th item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                  {/* <h3 className="h3 mb-3">Keep projects on schedule</h3> */}
                  <p className="text-xl text-gray-300 mb-4">And at Green Tea DAO, we don't have influencers; we have leaf-luencers. They don't push products; they push petals. Green tea petals, steeped in hot water, not in hot gossip.</p>
                </div>
              </div>
            </div>

            {/* 6th item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                  {/* <h3 className="h3 mb-3">Keep projects on schedule</h3> */}
                  <p className="text-xl text-gray-300 mb-4">Oh, and we’re also about those smooth lines and minimalist vibes that’ll make your tea corner look like a Zen master’s Pinterest board.</p>
                </div>
              </div>
            </div>

            {/* 7th item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage08} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                  {/* <h3 className="h3 mb-3">Keep projects on schedule</h3> */}
                  <p className="text-xl text-gray-300 mb-4">So, grab your favorite mug, pinky up, and join us. It’s not just a cup of tea, it’s a movement steeped in tradition and a hint of rebellion.</p>
                </div>
              </div>
            </div>


          </div>


        </div>
      </div>
    </section>
  )
}
