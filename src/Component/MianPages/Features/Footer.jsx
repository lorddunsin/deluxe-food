import React from "react";

function Footer() {
  return (
    <>
      <section className="bg-[url(/fast3.jpg)] from-red-500 to-red-800 text-white flex p-20 justify-between relative ">
        <div className="absolute top-0 left-0 bg-black/70 h-full w-full "></div>
        <div className="z-[10]">
          <p className="font-bold mb-5 text-xl ">DeluxeFood</p>
          <p>Connects you to the best restaurants in your area.</p>
        </div>
        <div className="z-[10]">
          <p className="font-bold mb-5 text-xl">Quick Link</p>
          <p className="mb-4">Restaurants</p>
          <p className="mb-4">How it works</p>
          <p>About us</p>
        </div>
        <div className="z-[10]">
          <p className="font-bold mb-5 text-xl">Contact</p>
          <p>Email:support@deluxefood.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
      </section>
      <nav className="bg-red-700 text-center text-xl py-7 text-white">
        © 2025 DeluxeFood. All rights reserved.
      </nav>
    </>
  );
}

export default Footer;
