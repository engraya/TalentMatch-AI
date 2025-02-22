import React from 'react'

function HeroTopHeader() {
  return (
    <section className="w-full px-8 bg-gray-900 text-gray-700">
    <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
      <div className="relative flex flex-col md:flex-row">
        <div className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
          <span className="mx-auto text-xl font-black leading-none text-gray-100 select-none">TalentMatch<span className="text-sky-500">AI</span></span>
        </div>
      </div>
    </div>
      </section>
  )
}

export default HeroTopHeader