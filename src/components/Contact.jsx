import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

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
        toast.success("Message sent Successfully");
        reset();
        navigate("/");
      } else {
        toast.error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast.error(error.message || "Internal Server Error, Please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full py-16 lg:px-32 mt-[75px]">
      <ScrollToTop />
      <div>
        <h2
          data-aos="fade-down"
          className="text-3xl font-semibold text-primary font-secondary text-center mb-2"
        >
          Contact
        </h2>
        <p
          data-aos="fade-up"
          className="text-center text-primary font-semibold text-lg mt-4 mb-8"
        >
          Let Us Help You Reach Your Customer With No Hassle.
        </p>
        <div className=" lg:flex lg:gap-6 lg:justify-center  p-8 rounded-lg">
          <div
            data-aos="fade-down"
            className=" lg:w-[40%] flex flex-col gap-6 border-t-2 border-b-2 border-[#000080] py-8 font-secondary text-primary "
          >
            <div className="flex gap-4 items-center">
              <div className="text-primary text-2xl p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.25)] rounded-md">
                <FaLocationDot />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className=" text-xl font-semibold">Address</h3>
                <p className=" text-lg ">
                  Floor 6, Jain Heights Solus, No. 2, 1st A Cross J C Rd,
                  Bengaluru, Karnataka 560027
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="text-primary text-2xl p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.25)] rounded-md">
                <IoCall />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className=" text-xl font-semibold">Call</h3>
                <p className=" text-lg "> 08040935041</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="text-primary text-2xl p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.25)] rounded-md">
                <MdOutlineMailOutline />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className=" text-xl font-semibold">Email</h3>
                <p className=" text-lg">connect@mindblue.in</p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-down"
            className=" lg:w-[60%] p-6 border-t-2 border-b-2 border-[#000080] py-8 font-secondary text-primary"
          >
            <Card color="transparent" shadow={false}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" mb-2 w-80 max-w-screen-lg sm:w-96 "
              >
                <div className="mb-1 flex flex-col gap-6">
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
                    {...register("name", { required: true, maxLength: 40 })}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-10 rounded px-2 shadow-[0_0_10px_0_rgba(0,0,0,0.25)]"
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
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-10 rounded px-2 shadow-[0_0_10px_0_rgba(0,0,0,0.25)]"
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
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 h-10 rounded px-2 shadow-[0_0_10px_0_rgba(0,0,0,0.25)]"
                  />
                  <Typography variant="h6" className="-mb-3 text-primary">
                    Message
                  </Typography>
                  <textarea
                    rows={3}
                    placeholder="Type your query here..."
                    {...register("message", { required: true })}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 rounded p-2 shadow-[0_0_10px_0_rgba(0,0,0,0.25)]"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className={`mt-6  bg-orange-600 hover:bg-orange-500 hover:shadow hover:shadow-orange-500 text-lg text-[#f4f5ff] rounded-xl px-4 py-2  transition-all duration-300 ${
                    isSubmitting ? " cursor-not-allowed" : ""
                  }`}
                  fullWidth
                >
                  {isSubmitting ? "Sending" : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
