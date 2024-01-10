import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "@nextui-org/react";

//
const Footer = () => {
  return (
    <div className="pt-10 mt-10">
      {/* <!-- Footer container --> */}
      <footer className="bg-[#ffcbc3] text-center text-black lg:text-left">
        <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between bg-[#faa092]">
          <div className="mr-12 hidden lg:block font-bold">
            <span>Get connected with us on social networks:</span>
          </div>

          <div className="flex justify-center ">
            <a href="#!" className="mr-6 text-black text-xl">
              <FaFacebookF />
            </a>
            <a href="#!" className="mr-6 text-black text-xl">
              <FaTwitter />
            </a>
            <a href="#!" className="mr-6 text-black text-xl">
              <FaGooglePlusG />
            </a>
            <a href="#!" className="mr-6 text-black text-xl">
              <FaInstagram />
            </a>
            <a href="#!" className="mr-6 text-black text-xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start text-[#fd614a] text-xl">
                Event Endeavors
              </h6>
              <p className="text-justify">
                Explore a diverse range of events curated just for you. From
                captivating cultural festivals to heart-pounding live
                performances, we have got something for every taste and
                interest.
              </p>
            </div>

            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-[#fd614a]">
                Categories
              </h6>
              <p className="mb-4">Tech Conference</p>
              <p className="mb-4">Music Concert</p>
              <p className="mb-4">Food Festival</p>
              <p>Sports Event</p>
            </div>

            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-[#fd614a]">
                Useful links
              </h6>
              <p className="mb-4">
                <Link href="/" className="text-black">
                  Home
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/about" className="text-black">
                  About{" "}
                </Link>
              </p>
              <p className="mb-4">
                <Link href="/events" className="text-black">
                  Events{" "}
                </Link>
              </p>
              <p>
                <Link href="/venues" className="text-black">
                  Venues{" "}
                </Link>
              </p>
            </div>

            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-[#fd614a]">
                Contact
              </h6>
              <p className="mb-4 flex items-center gap-2 justify-center md:justify-start">
                <FaLocationDot />
                Dhaka, Bangladesh
              </p>
              <p className="mb-4 flex items-center gap-2 justify-center md:justify-start">
                <MdEmail />
                info@example.com
              </p>
              <p className="mb-4 flex items-center gap-2 justify-center md:justify-start">
                <FaPhoneAlt />+ 01 234 567 88
              </p>
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <FaPhoneAlt />+ 01 234 567 89
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#faa092] p-6 text-center dark:bg-neutral-700">
          Copyright &copy;2024 All Rights Reserved | This Website is made with
          &#x003C;&#10083;&#x003E; by Afsana Meem
        </div>
      </footer>
    </div>
  );
};

export default Footer;
