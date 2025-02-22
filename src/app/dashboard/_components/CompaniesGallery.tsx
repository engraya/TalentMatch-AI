import React from 'react'
import Image from 'next/image'

function CompaniesGallery() {
  return (
    <div className="mx-auto mt-16 grid max-w-[1040px] grid-cols-3 gap-8 py-20 sm:grid-cols-2 sm:gap-12 md:grid-cols-5">
    <div className="mx-auto">
      <Image src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a267_Microsoft%20Logo.svg" alt="" width={70} height={70} className="inline-block" />
    </div>
    <div className="mx-auto">
      <Image src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26a_PayPal%20Logo.svg" width={70} height={70}  alt="" className="inline-block" />
    </div>
    <div className="mx-auto">
      <Image src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a268_Google%20Logo.svg" width={70} height={70}  alt="" className="inline-block" />
    </div>
    <div className="mx-auto">
      <Image src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a269_Chase%20Logo.svg" width={70} height={70}  alt="" className="inline-block" />
    </div>
    <div className="mx-auto">
      <Image src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26b_Walmart%20Logo.svg" width={70} height={70}  alt="" className="inline-block" />
    </div>
        </div>
  )
}

export default CompaniesGallery