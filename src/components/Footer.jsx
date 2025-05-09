import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="relative w-full text-white shadow-[0_0_10px_0_rgba(0,0,0,0.25)] bg-black/90">
      <div className="mx-auto w-full max-w-7xl px-8 lg:px-4 xl:px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 lg:gap-6 xl:gap-8 py-12 md:grid-cols-2 lg:grid-cols-6 ">
          <div className="w-full">
            <Typography
              variant="small"
              className="mb-4 text-white font-bold uppercase opacity-60"
            >
              Comapany
            </Typography>
            <ul className="space-y-1">
              <Typography as="li" color="blue-gray" className="font-normal">
                <Link
                  to="/"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                >
                  Home
                </Link>
              </Typography>
              <Typography as="li" color="blue-gray" className="font-normal">
                <Link
                  to="/about"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                >
                  About
                </Link>
              </Typography>
              {/* <Typography as="li" color="blue-gray" className="font-normal">
                <Link
                  to="#"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                >
                  Events
                </Link>
              </Typography> */}
              <Typography as="li" color="blue-gray" className="font-normal">
                <Link
                  to="/contact"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                >
                  Contacts
                </Link>
              </Typography>
            </ul>
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              className="mb-4 text-white font-bold uppercase opacity-60"
            >
              Services
            </Typography>
            <ul className="space-y-1">
              <Typography as="li" color="blue-gray" className="font-normal">
                <Link
                  // to="/digital-service"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                >
                  Digital
                </Link>
              </Typography>
              <Typography as="li" color="blue-gray" className="font-normal">
                <Link
                  // to="/magazine-service"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                >
                  Magazine
                </Link>
              </Typography>
              <Typography as="li" color="blue-gray" className="font-normal">
                <Link
                  // to="/radio-service"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                >
                  Radio
                </Link>
              </Typography>
              <Typography as="li" color="blue-gray" className="font-normal">
                <Link
                  // to="/newspaper-service"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                >
                  Newspaper
                </Link>
              </Typography>
            </ul>
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              className="mb-4 text-white font-bold uppercase opacity-60 "
            >
              Services
            </Typography>
            <ul className="space-y-1">
              <Typography as="li" color="blue-gray" className="font-normal">
                <Link
                  // to="/outdoor-service"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                >
                  Outdoor
                </Link>
              </Typography>
              <Typography as="li" color="blue-gray" className="font-normal">
                <Link
                  // to="/airline-service"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                >
                  Airline
                </Link>
              </Typography>
              {/* <Typography as="li" color="blue-gray" className="font-normal">
                <Link
                  to="/hyperlocal-service"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                >
                  Hyperlocal
                </Link>
              </Typography> */}
              <Typography as="li" color="blue-gray" className="font-normal">
                <Link
                  // to="/nontraditional-service"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                >
                  Non-Traditional
                </Link>
              </Typography>
            </ul>
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              className="mb-4 text-white font-bold uppercase opacity-60 "
            >
              Services
            </Typography>
            <ul className="space-y-1">
              <Typography as="li" color="blue-gray" className="font-normal">
                <Link
                  // to="/cinema-service"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                >
                  Cinema
                </Link>
              </Typography>
              <Typography as="li" color="blue-gray" className="font-normal">
                <Link
                  // to="/influencer-service"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                >
                  Influencer
                </Link>
              </Typography>
              <Typography as="li" color="blue-gray" className="font-normal">
                <Link
                  // to="/television-service"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                >
                  Television
                </Link>
              </Typography>
              {/* <Typography as="li" color="blue-gray" className="font-normal">
                <Link
                  to="/deals-service"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                >
                  Deals
                </Link>
              </Typography> */}
            </ul>
          </div>
          <div className="w-full">
            <Typography
              variant="small"
              className="mb-4 text-white font-bold uppercase opacity-60 "
            >
              Policy
            </Typography>
            <ul className="space-y-1">
              <Typography as="li" color="blue-gray" className="font-normal">
                <Link
                  to="/disclaimer"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                >
                  Disclaimer
                </Link>
              </Typography>
              <Typography as="li" color="blue-gray" className="font-normal">
                <Link
                  to="/terms-and-conditions"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                >
                  T&C
                </Link>
              </Typography>
              <Typography as="li" color="blue-gray" className="font-normal">
                <Link
                  to="/privacy-policy"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                >
                  Privacy Policy
                </Link>
              </Typography>
              <Typography as="li" color="blue-gray" className="font-normal">
                <Link
                  to="/returns-refunds"
                  className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                >
                  Refund Policy
                </Link>
              </Typography>
            </ul>
          </div>

          <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 gap-6">
            <div>
              <Typography
                variant="small"
                className="mb-4 text-center font-normal text-blue-300 md:mb-0"
              >
                &copy; {currentYear}{" "}
                <Link to="/" className="font-semibold text-blue-300">
                  Mindblue
                </Link>
                . <br />
                All Rights Reserved.
              </Typography>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-4 text-center font-normal text-blue-300 md:mb-0"
              >
                Floor 6, Jain Heights Solus, <br /> No. 2, 1st A Cross J C Rd,
                Bengaluru, Karnataka 560027
              </Typography>
            </div>
            <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
              <Typography
                as="a"
                href="https://www.facebook.com/MindBlue.in"
                target="_blank"
                className=" transition-opacity hover:opacity-60"
              >
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Typography>
              <Typography
                as="a"
                href="https://www.instagram.com/mindbluellp/"
                target="_blank"
                className=" transition-opacity hover:opacity-60"
              >
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Typography>
              {/* <Typography
                as="a"
                href="https://twitter.com/ajoy_paul11"
                target="_blank"
                className=" transition-opacity hover:opacity-60"
              >
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Typography> */}
              <Typography
                as="a"
                href="https://in.linkedin.com/company/mindbluellp"
                target="_blank"
                className=" transition-opacity hover:opacity-60"
              >
                <svg
                  className="w-8 h-8"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clipRule="evenodd"
                  />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
