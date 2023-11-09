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
          <div className="relative flex flex-col lg:flex-row justify-between items-center">

            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-white mb-2">Want to join?</h3>
              <p className="text-gray-200 text-lg">First Drop Will Include Green Tea from all 47 prefectures in Japan.</p>
              <br></br>
              <p className="text-gray-200 text-lg">It will also include:</p>
              <br></br>
              <ul className="text-gray-200 text-lg list-disc pl-5">
                <li>Custom US Made Wooden Box With Japan Map Engraved on Top</li>
                <li>Unique NFT of the map of Japan</li>
                <li>A matcha kit</li>
                <li>Early Access to future drops</li>
                <li>15% of funds go to a treasury to fund things the community votes on!</li>
                <li>They will only be released 47 at a time.</li>
              </ul>
            </div>

            {/* CTA form */}
            <form className="w-full lg:w-1/2" action="https://submit-form.com/IIrzyJ0r">
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                {/* <input type="text" id="name" name="name" placeholder="Name" className="w-full appearance-none bg-gray-700 border border-gray-500 focus:border-gray-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-400" required="" /> */}
                <input type="email" id="email" name="email" className="w-full appearance-none bg-gray-700 border border-gray-500 focus:border-gray-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-400" placeholder="Your best email…" aria-label="Your best email…" />
                <button className="btn text-gray-600 bg-gray-100 hover:bg-white shadow" type="submit">Subscribe</button>
              </div>
              {/* Success message */}
              {/* <p className="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
            </form>



          </div>
          {/* Embed NFT Minting here */}
          {/* <div className="w-full flex justify-center mb-6">
            <iframe
              src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x39a043A14c20B5AfAD884738BC9C01c9Ae58afD9&chain=%7B%22name%22%3A%22Optimism+Goerli+Testnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Foptimism-goerli.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Goerli+Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22ogor%22%2C%22chainId%22%3A420%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22optimism-goerli%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Foptimism%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=485234e076aa338b179b85c89a062260&theme=dark&primaryColor=purple"
              style={{
                width: '75%', // This sets the width to 75% of its container
                height: '600px', // You can adjust the height as needed
                maxWidth: '100%', // Ensures the iframe is not wider than its container
                borderRadius: '8px' // This applies rounded corners. The value can be adjusted to your preference
              }}
            ></iframe>
          </div> */}

        </div>

      </div>
    </section>
  )
}
