import React from "react";

function TopSect({ header, subheader }) {
  return (
    <div className="relative bg-[url('/fast1.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed flex flex-col justify-center items-center text-center min-h-[70vh] rounded-b-lg px-4 sm:px-10 py-6">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-3xl flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          {header}
        </h1>
        <p className="text-lg sm:text-xl mt-4">{subheader}</p>

        {/* Centered Search Form */}
        <div className="mt-6 flex justify-center w-full">
          <form className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full max-w-xl">
            <input
              type="text"
              placeholder="Search for your favorite food"
              className="bg-white/20 border border-white/40 py-3 px-5 rounded-lg w-full sm:w-[300px] md:w-[400px] text-white placeholder-white focus:outline-none"
            />
            <button
              onClick={(e) => e.preventDefault()}
              className="bg-red-700 hover:bg-red-600 transition p-3 text-white w-full sm:w-auto font-bold rounded-lg"
            >
              Find Food
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TopSect;
