import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { RxCross1 } from "react-icons/rx";

export function CardWithLink({
  img,
  title,
  description,
  modalTitle,
  modalDescription,
}) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  // return (
  //   <div className=" relative">
  //     <Card className="mt-6 w-72 text-primary bg-white h-[402px] font-secondary transform transition-transform duration-500 hover:-translate-y-3 shadow-[0_0_10px_0_rgba(0,0,0,0.25)]">
  //       <div className=" flex flex-col flex-grow">
  //         <CardBody>
  //           <div>
  //             <img
  //               src={img}
  //               alt="service-icon"
  //               className="w-[138px] bg-blend-overlay"
  //             />
  //           </div>
  //           <Typography variant="h5" color="blue-gray" className="mb-2">
  //             {title}
  //           </Typography>
  //           <div className=" line-clamp-5">{description}</div>
  //         </CardBody>
  //         <CardFooter className="pt-0">
  //           <Button
  //             onClick={handleOpen}
  //             size="sm"
  //             variant="text"
  //             className="flex items-center gap-2  text-primary"
  //           >
  //             Read More
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               strokeWidth={2}
  //               stroke="currentColor"
  //               className="h-4 w-4"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
  //               />
  //             </svg>
  //           </Button>
  //           <Dialog
  //             open={open}
  //             handler={handleOpen}
  //             className=" fixed inset-0 z-50 flex items-center justify-center bg-[#f4f5ff]/80"
  //             size="md"
  //           >
  //             <div className="relative w-full max-w-md p-6 bg-[#f4f5ff] rounded-lg shadow-xl">
  //               <DialogHeader className="text-primary">
  //                 {modalTitle}
  //               </DialogHeader>
  //               <DialogBody className=" text-base text-primary font-secondary">
  //                 {modalDescription}
  //               </DialogBody>
  //               <DialogFooter className=" absolute top-4 right-3">
  //                 <Button
  //                   variant="gradient"
  //                   color="green"
  //                   onClick={handleOpen}
  //                   className="p-1 rounded-full bg-blue-700"
  //                 >
  //                   <RxCross1 />
  //                 </Button>
  //               </DialogFooter>
  //             </div>
  //           </Dialog>
  //         </CardFooter>
  //       </div>
  //     </Card>
  //   </div>
  // );
  return (
    <div className="h-[400px] w-full">
      {/* Card container with perspective */}
      <div className="relative w-full h-full" style={{ perspective: "1000px" }}>
        {/* Flipping container */}
        <div
          className={`relative w-full h-full transition-transform duration-700 ease-in-out`}
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front of Card */}
          <div
            className="absolute w-full h-full bg-white rounded-xl shadow-md hover:shadow-xl"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="flex flex-col h-full">
              <div className="p-6 pb-4 flex justify-center">
                <div className="w-24 h-24 flex items-center justify-center">
                  <img
                    src={img}
                    alt={`${title} icon`}
                    className="w-full object-contain"
                  />
                </div>
              </div>
              <div className="px-6 pt-0 pb-4 flex-grow">
                <Typography
                  variant="h5"
                  className="mb-3 text-primary font-bold text-center"
                >
                  {title}
                </Typography>
                <Typography className="text-gray-700 text-center mb-4 line-clamp-3">
                  {description}
                </Typography>
              </div>
              <div className="pt-0 pb-6 flex justify-center">
                <Button
                  onClick={handleFlip}
                  size="sm"
                  className="bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-colors duration-300 flex items-center gap-2 px-4 py-2 rounded-full"
                >
                  READ MORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Back of Card */}
          <div
            className="absolute w-full h-full bg-white rounded-xl shadow-md flex flex-col"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="bg-gradient-to-r to-yellow-400 from-pink-500 py-4 px-6 flex justify-between items-center rounded-tl-md rounded-tr-md">
              <h3 className="text-xl font-bold text-white">{modalTitle}</h3>
              <button
                onClick={handleFlip}
                className="p-2 rounded-full bg-transparent hover:bg-white/20 text-white transition-colors flex items-center justify-center"
              >
                <RxCross1 size={18} />
              </button>
            </div>
            <div className="p-6 text-primary font-secondary flex-grow overflow-y-auto">
              {modalDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
