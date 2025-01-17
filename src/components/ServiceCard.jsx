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

export function CardWithLink({ img, title, description, modalTitle, modalDescription }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className=" relative">
      <Card className="mt-6 w-72 text-primary bg-white h-[402px] font-secondary transform transition-transform duration-500 hover:-translate-y-3">
        <div className=" flex flex-col flex-grow">
          <CardBody>
            <div>
              <img
                src={img}
                alt="service-icon"
                className="w-[138px] bg-blend-overlay"
              />
            </div>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {title}
            </Typography>
            <div className=" line-clamp-5">{description}</div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              onClick={handleOpen}
              size="sm"
              variant="text"
              className="flex items-center gap-2  text-primary"
            >
              Read More
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
            <Dialog
              open={open}
              handler={handleOpen}
              className=" fixed inset-0 z-50 flex items-center justify-center bg-[#f4f5ff]/80"
              size="md"
              // animate={{
              //   mount: { scale: 1, opacity: 1, y: 0 },
              //   unmount: { scale: 0.9, opacity: 0, y: -100 },
              // }}
              // dismiss={{ outsidePress: true }}
            >
              <div className="relative w-full max-w-md p-6 bg-[#f4f5ff] rounded-lg shadow-xl">
                <DialogHeader className="text-primary">
                  {modalTitle}
                </DialogHeader>
                <DialogBody className=" text-base text-primary font-secondary">
                  {modalDescription}
                </DialogBody>
                <DialogFooter>
                  {/* <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-4 px-3 py-1.5 bg-red-400 text-white"
                  >
                    <span>Cancel</span>
                  </Button> */}
                  <Button
                    variant="gradient"
                    color="green"
                    onClick={handleOpen}
                    className="px-3 py-1.5 bg-green-400"
                  >
                    <span>Done</span>
                  </Button>
                </DialogFooter>
              </div>
            </Dialog>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}
