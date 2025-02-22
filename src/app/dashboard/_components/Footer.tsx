import React from 'react'

function Footer() {
  return (
    <footer className="flex flex-col justify-center py-3">
        <p className="text-center text-md text-gray-900 font-semibold">© {new Date().getFullYear()} TalentMatchAI. All rights reservered.</p>
    </footer>

  )
}

export default Footer