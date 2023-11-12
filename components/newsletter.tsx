
import Image from 'next/image'

import teaBox from '@/public/images/teaMapJapan.png'

export default function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" >

        {/* CTA box */}
        <div className="relative bg-gray-900 py-10 px-8 md:py-16 md:px-12 border border-gray-700" data-aos="fade-up">


          {/* Image section */}
          <div className="w-full flex justify-center mb-6">
            <Image src={teaBox} alt="Descriptive Alt Text" className="max-w-xs sm:max-w-md lg:max-w-lg" />
          </div>
          {/* <div className="relative flex flex-col lg:flex-row justify-between items-center"> */}

            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-white mb-2">Want to join?</h3>
              <p className="text-gray-200 text-lg">First Drop Will Include Green Tea from all 47 prefectures in Japan.</p>
              <br></br>
              <p className="text-gray-200 text-lg">It will also include:</p>
              <br></br>
              <ul className="text-gray-200 text-lg list-disc pl-5">
                <li>Custom US Made Wooden Box With Japan Map Engraved on Top</li>
                <li>Unique NFT of matcha in beaitufl japanese settignss</li>
                <li>A matcha kit</li>
                <li>Early Access to future drops</li>
                <li>15% of funds go to a treasury to fund things the community votes on!</li>
              </ul>
            </div>
            <div className="w-full flex justify-center mt-6">
              <a href="https://mint.greenteadao.eth.limo/" target="_blank" rel="noopener noreferrer">
                <button className="btn text-gray-600 bg-gray-100 hover:bg-white shadow">Mint NFT</button>
              </a>
            </div>
            {/* CTA form
            <form className="w-full lg:w-1/2" action="https://submit-form.com/IIrzyJ0r">
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <input type="text" id="name" name="name" placeholder="Name" className="w-full appearance-none bg-gray-700 border border-gray-500 focus:border-gray-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-400" required="" />
                <input type="email" id="email" name="email" className="w-full appearance-none bg-gray-700 border border-gray-500 focus:border-gray-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-400" placeholder="Your best email…" aria-label="Your best email…" />
                <button className="btn text-gray-600 bg-gray-100 hover:bg-white shadow" type="submit">Subscribe</button>
              </div>
              Success message
              <p className="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p>
            </form> */}

          {/* </div> */}

        </div>

      </div>
    </section>
  )
}
