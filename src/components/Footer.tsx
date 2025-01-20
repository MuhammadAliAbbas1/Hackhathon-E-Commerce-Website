import React from 'react'

function Footer() {
  return (
    <div>

    <footer className="bg-white h-[505px] w-screen mx-auto py-12 px-10">
      <div className="grid grid-cols-4 gap-16">
        <div>
          <h2 className="text-xl font-bold mb-6">Funiro.</h2>
          <address className="not-italic text-sm leading-6">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </address>
        </div>

        <div>
          <h3 className="text-sm font-bold mb-6">Links</h3>
          <ul className="space-y-4 text-sm">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold mb-6">Help</h3>
          <ul className="space-y-4 text-sm">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold mb-6">Newsletter</h3>
          <div className="flex items-center space-x-3 border-b border-black pb-3">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 text-sm outline-none"
            />
            <button className="text-sm font-bold">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="relative w-full max-w-lg">
          <div className="border-t border-dotted border-black absolute inset-0" />
          <div className="w-2 h-2 bg-black absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="mt-12 text-center text-sm">
        2023 Funiro. All rights reserved
      </div>
    </footer>
    </div>
  )
}

export default Footer
