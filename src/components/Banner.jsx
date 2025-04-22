import React from "react";

// function Banner() {
//   return (
//     <div className=' container mx-auto'>
//     <div className=' bg-gradient-to-r from-[#6366f1] to-[#3b82f6] rounded-2xl h-[265px] pl-10 flex flex-wrap w-full flex-row items-center justify-center'>
//         <div>
//             <h1 className=' text-3xl font-medium mb-1 text-white'>
//             Ready to Launch Your Next Marketing Campaign?
//             </h1>
//             <h2 className=' text-2xl font-light text-white max-w-[70%]'>
//             We use data-backed strategies to help you reach the perfect audience without overspending
//             </h2>
//         </div>
//         <div className=' relative'>
//             <div className=' absolute top-0 left-[-20%]'>
//                 <div className=' w-[1px] h-[1px] m-[3em] p-[100%] border-circle'></div>
//             </div>
//             <img src="https://ik.imagekit.io/ajoy/brainstorm.png?updatedAt=1745318681911" alt="banner-image"
//             className=' relative block bg-transparent right-[18%] top-[3px] w-[274px] h-[252px]'  loading='lazy'/>
//         </div>
//     </div>
//     </div>
//   )
// }

function Banner() {
  return (
    //   <div className="container mx-auto px-4 my-8">
    //     <div className="bg-gradient-to-r from-[#6366f1] to-[#3b82f6] rounded-2xl overflow-hidden shadow-lg">
    //       <div className="flex flex-row items-center justify-between py-6 md:py-8 px-4 md:px-10">
    //         {/* Text Content */}
    //         <div className="w-3/5 pr-2 md:pr-4">
    //           <h1 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 md:mb-3 text-white">
    //             Ready to Launch Your Next Marketing Campaign?
    //           </h1>
    //           <h2 className="text-sm sm:text-base md:text-xl font-light text-white">
    //             We use data-backed strategies to help you reach the perfect audience without overspending
    //           </h2>
    //         </div>

    //         {/* Image Container */}
    //         <div className="w-2/5 flex justify-center">
    //           <img
    //             src="https://ik.imagekit.io/ajoy/brainstorm.png?updatedAt=1745318681911"
    //             alt="Marketing campaign ideas"
    //             className="w-24 sm:w-36 md:w-48 lg:w-64 h-auto object-contain"
    //             loading="lazy"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    <div className="container mx-auto px-4 my-8">
      <div className="bg-gradient-to-r from-[#6366f1] to-[#3b82f6] rounded-2xl overflow-hidden shadow-lg">
        <div className="flex flex-row items-center justify-between py-6 md:py-8 px-4 md:px-10">
          {/* Text Content */}
          <div className="w-3/5 pr-2 md:pr-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 md:mb-3 text-white">
              Ready to Launch Your Next Marketing Campaign?
            </h1>
            <h2 className="text-sm sm:text-base md:text-xl font-light text-white">
              We use data-backed strategies to help you reach the perfect
              audience without overspending
            </h2>
          </div>

          {/* Image Container */}
          <div className="w-2/5 flex justify-center relative">
            {/* Background circle - hidden on mobile, visible on sm and up */}
            <div className=' absolute top-0 md:top-[-68px] lg:top-0 xl:top-[-10px] left-[-20%] md:left-[-3%] lg:left-[12%] xl:left-[20%] 2xl:left-[25%]'>
//                 <div className=' w-[1px] h-[1px] m-[3em] p-[100%] border-circle'></div>
//           </div>
            <img
              src="https://ik.imagekit.io/ajoy/brainstorm.png?updatedAt=1745318681911"
              alt="Marketing campaign ideas"
              className="w-32 sm:w-36 md:w-48 lg:w-64 h-auto object-contain relative z-10"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
