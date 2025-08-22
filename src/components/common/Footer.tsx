import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-3">
      <div className="container p-8 mx-auto bg-white text-dark rounded-xl border-2 border-dark shadow-[6px_6px_0px_rgba(0,0,0,1)] mb-3">
        <div className="-mx-4 flex flex-wrap justify-between">
          {/* Logo & Description */}
          <div className="px-4 my-4 w-full xl:w-1/5">
            <a href="/" className="block mb-5">
              <img
                src="./images/Logo.png"
                alt="Logo"
                className="aspect-auto w-auto"
              />
            </a>
            <p className="text-sm text-start">
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
            </p>
          </div>

          <div className="px-4 my-4 w-full sm:w-auto">
            <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-dark font-semibold">
              Home
            </h2>
            <ul className="leading-8">
              <li>
                <a href="/">Our Benefits</a>
              </li>
              <li>
                <a href="/">Our Testimonials</a>
              </li>
              <li>
                <a href="/">Navigate through our Pages</a>
              </li>
            </ul>
          </div>

          <div className="px-4 my-4 w-full sm:w-auto">
            <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-dark font-semibold">
              About US
            </h2>
            <ul className="leading-8">
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">OverView</a>
              </li>
              <li>
                <a href="/">Our Mission & Vision</a>
              </li>
              <li>
                <a href="/">Our Awards and Recognitions</a>
              </li>
            </ul>
          </div>
          {/* academic Links */}
          <div className="px-4 my-4 w-full sm:w-auto">
            <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-dark font-semibold ">
              Academic
            </h2>
            <ul className="leading-8">
              <li>
                <a href="#">Our Special Features</a>
              </li>
              <li>
                <a href="#">What Students Learn</a>
              </li>
              <li>
                <a href="#">Our Rooms Gallery</a>
              </li>
              <li>
                <a href="/">See More</a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
            <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-dark font-semibold">
              Connect With Us
            </h2>
            <div className="flex space-x-2">
              <a
                href="#"
                className="inline-flex items-center justify-center h-8 w-8 border border-gray-300 rounded-full"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center h-8 w-8 border border-gray-300 rounded-full hover:text-morning hover:border-morning"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center h-8 w-8 border border-gray-300 rounded-full hover:text-morning hover:border-morning"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center h-8 w-8 border border-gray-300 rounded-full hover:text-morning hover:border-morning"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center h-8 w-8 border border-gray-300 rounded-full hover:text-morning hover:border-morning"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-300 py-4 text-dark">
          <div className="container mx-auto px-4">
            <div className="-mx-4 flex flex-wrap justify-between">
              <div className="px-4 w-full text-center sm:w-auto sm:text-left">
                Copyright © {new Date().getFullYear()} ITI. All Rights Reserved.
              </div>
              <div className="px-4 w-full text-center sm:w-auto sm:text-left">
                Made with ❤️ by AATH.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
