// import React from "react";
// import Sidebar from "./Sidebar";
// import Main from "./Main";
// import { Outlet } from "react-router-dom";

// function Auth() {
//   return (
//     <section className="flex flex-col overflow-hidden ">
//       <div className=" flex  w-full items-center content-center justify-center bg-gradient-to-b from-red-500 to-red-900 h-[30vh]">
//         <Sidebar />
//       </div>
//       <div className="flex mx-auto w-full self-center items-center h-[70vh] ">
//         <div className="flex flex-col items-center">
//           <Outlet />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Auth;

import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Auth() {
  return (
    <section className="flex flex-col md:flex-row flex-grow min-h-screen overflow-hidden bg-red-900">
      {/* Header with Sidebar */}
      <div className="flex w-full items-center justify-center bg-gradient-to-b from-red-500 to-red-900 h-[30vh] md:h-[100vh]">
        <Sidebar />
      </div>

      {/* Main Content Area with Centered Outlet */}
      <div className="flex w-full bg-white justify-center items-center">
        <div className="flex items-center justify-center mb-5">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default Auth;
