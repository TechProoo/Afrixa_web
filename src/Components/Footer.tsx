import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-20 mx-5 py-5 flex justify-between'>
      <p>
        © {new Date().getFullYear()} AFRIXA. All rights reserved.
      </p>
      <div className="flex gap-4">
        <p >Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookies Settings</p>
      </div>
    </footer>
  )
}

export default Footer
