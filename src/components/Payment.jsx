import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import useStore from "../store";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [amount, setAmount] = useState(0);
  const minSpend = useStore((state) => state.minSpend);

  const navigate = useNavigate();

  useEffect(() => {
    setAmount(minSpend);
  }, [minSpend]);

  const formatAmount = (amount) => {
    const num = Number.parseFloat(amount);
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(num);
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  }, []);

  const handlePayment = async () => {

    try {
      const orderResponse = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/create-order`,
       {amount}
      );
      const data = orderResponse.data;

      console.log(data);

      const { id, amount: orderAmount, currency } = orderResponse.data;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: orderAmount,
        currency: currency,
        name: "Mindblue LLP",
        description: "Payment Details",
        order_id: id,
        handler: function (response) {
          axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/v1/verify-payment`,
            {
              order_id: response.razorpay_order_id,
              payment_id: response.razorpay_payment_id,
              signature: response.razorpay_signature,
            }
          ).then((res) => {
            if (res?.data?.success) {
              toast.success("Payment Successful. Our Team will contact you soon.", {theme: "colored"});
              navigate("/");
            } else {
              toast.error("Payment Failed");
            }
          }).catch((error) => {
            console.error(error);
            toast.error("Payment Failed");
          });
        },
        theme: {
          color: "#000080"
        }
      }

      const paymentObject = new window.Razorpay(options);

      paymentObject.open();
      
    } catch (error) {
      console.error(error);
      toast.error("Payment did not Initiate");
    }
  };

  return (
    <div className=" container mx-auto py-10 px-4 mt-[65px]">
      <h1 className="text-3xl font-bold text-[#000080] mb-8">
        Complete Your Payment
      </h1>
      <div className=" grid lg:grid-cols-5 gap-8">
        <div className=" lg:col-span-3">
          <div className=" bg-white rounded-lg shadow-lg overflow-hidden">
            <div className=" p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-[#000080]">
                Payment Summary
              </h2>
              <p className="text-gray-600 mt-1">
                Review your payment details before proceeding
              </p>
            </div>
            <div className=" p-6 space-y-6">
              <div className=" p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-[#000080] mb-4">
                  Order Summary
                </h3>
                <div className=" space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatAmount(amount)}</span>
                  </div>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="flex justify-between text-xl font-semibold">
                    <span>Total Amount</span>
                    <span className="text-[#000080]">
                      {formatAmount(amount)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                <p className="text-sm text-blue-700">
                  You will be redirected to Razorpay's secure payment gateway to
                  complete your payment.
                </p>
              </div>
              <div className="p-6 border-t border-gray-200">
                <button
                  onClick={handlePayment}
                  className="w-full bg-[#000080] hover:bg-[#000060] text-white text-lg font-medium py-4 px-6 rounded-md transition duration-200"
                >
                  Pay Now {formatAmount(amount)}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:col-span-2">
          <div className="lg:w-full flex flex-col gap-6 border-t-2 border-b-2 border-[#000080] py-8 font-secondary text-[#000080]">
            <div className="flex gap-4 items-center">
              <div className="text-[#000080] text-2xl p-4 outline outline-[1px] outline-[#000080] rounded-md">
                <FaLocationDot />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-lg">
                  Floor 6, Jain Heights Solus, No. 2, 1st A Cross J C Rd,
                  Bengaluru, Karnataka 560027
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="text-[#000080] text-2xl p-4 outline outline-[1px] outline-[#000080] rounded-md">
                <IoCall />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">Call</h3>
                <p className="text-lg">08040935041</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="text-[#000080] text-2xl p-4 outline outline-[1px] outline-[#000080] rounded-md">
                <MdOutlineMailOutline />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-lg">connect@mindblue.in</p>
              </div>
            </div>
          </div>
          <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-[#000080] mb-4">
              Payment Information
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-medium">•</span>
                <span>Your payment is secure and encrypted</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="font-medium">•</span>
                <span>
                  For any payment issues, please contact our support team
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
