import React, { useState, useEffect, useRef } from "react";
import { NavbarSimple } from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router";
import {
  Button,
  Dialog,
  IconButton,
  Typography,
  Card,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { ToastContainer } from "react-toastify";
import whatsApp from "./assets/whatsapp-img.png";

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        console.log(data);
        toast.success("Message sent successfully");
        reset();
        handleOpen();
      } else {
        toast.error(result.message || "Failed to send message!!!");
      }
    } catch (error) {
      toast.error(error.message || "Internal Server Error, Please try again!!");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/50"
      >
        <div className="relative w-11/12 max-w-md mx-auto">
          <div className="relative bg-[#f4f5ff] rounded-lg shadow-xl">
            {/* Close button */}
            <div className="absolute right-3 top-3 z-10">
              <IconButton
                size="sm"
                variant="text"
                onClick={handleOpen}
                className="text-primary hover:bg-gray-200/50"
              >
                <XMarkIcon className="h-5 w-5 absolute top-[-7px] left-[-11px]" />
              </IconButton>
            </div>

            {/* Form content */}
            <Card className="px-6 py-8 bg-transparent shadow-none">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-md mx-auto"
              >
                <input
                  type="hidden"
                  value={import.meta.env.VITE_FORM_API_KEY}
                  {...register("access_key")}
                />
                <input type="hidden" {...register("subject")} />
                <input
                  type="hidden"
                  value="Mindblue Website"
                  {...register("from_name")}
                />
                <div className="mb-1 flex flex-col gap-6">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-3 text-primary"
                  >
                    Your Name
                  </Typography>
                  <input
                    placeholder="Type your name here..."
                    type="text"
                    {...register("name", { required: true })}
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900 h-10 rounded px-2"
                  />
                  <Typography variant="h6" className="-mb-3 text-primary">
                    Your Email
                  </Typography>
                  <input
                    placeholder="Type your email here..."
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email",
                      },
                    })}
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900 h-10 rounded px-2"
                  />
                  <Typography variant="h6" className="-mb-3 text-primary">
                    Your Mobile Number
                  </Typography>
                  <input
                    placeholder="Type your mobile number here..."
                    type="number"
                    {...register("mobile", {
                      required: true,
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Please enter a valid 10 digit mobile number",
                      },
                    })}
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900 h-10 rounded px-2"
                  />
                  <Typography variant="h6" className="-mb-3 text-primary">
                    Message
                  </Typography>
                  <textarea
                    rows={3}
                    placeholder="Type your query here..."
                    {...register("message", { required: true })}
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900 rounded p-2"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className={`mt-6 bg-orange-600 hover:bg-orange-500 hover:shadow hover:shadow-orange-500 text-lg text-[#f4f5ff] rounded-xl px-4 py-2 transition-all duration-300 w-full ${
                    isSubmitting ? "cursor-not-allowed" : ""
                  } `}
                >
                  {isSubmitting ? "Sending" : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </Dialog>
      <ScrollToTop />
      <div className="w-full bg-black">
      <NavbarSimple />
      </div>
      <div>
        <a href="https://wa.me/919036777463?text=Hello! I am writing this from Mindblue Website." target="_blank" rel="noreferrer">
          <img
            src={whatsApp}
            alt="whatsapp"
            className="fixed right-5 bottom-5 z-50 w-10 lg:w-14 h-10 lg:h-14 rounded-full"
          />
        </a>
      </div>
      <ToastContainer />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
