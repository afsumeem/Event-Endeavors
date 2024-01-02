import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      className="min-h-80 mt-4 md:mt-20 px-2 md:px-10 pt-5 md:pt-10"
      style={{ backgroundColor: "black" }}
    >
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <div className="px-5 pt-4 text-white">
            <h5 className="text-uppercase mb-3 text-2xl font-bold font-mono">
              Event Endeavors
            </h5>
            <p className="text-base mb-8 text-justify">
              Explore a diverse range of events curated just for you. From
              captivating cultural festivals to heart-pounding live
              performances, we have got something for every taste and interest.
              Our events promise to captivate your senses and leave you craving
              for more.
            </p>
          </div>
        </div>

        <div className="px-5 pt-4 text-start md:text-center text-white col-span-4">
          <h5 className="text-uppercase mb-3 text-2xl font-bold font-mono">
            Quick Links
          </h5>
          <Link href="/services">
            <button className="text-white text-base underline">Services</button>
          </Link>
          <br />

          <Link href="/projects">
            <button className="text-white text-base underline">Projects</button>
          </Link>
          <br />

          <button className="text-white text-base underline">Logout</button>
        </div>

        <div className="px-5 py-4 text-white col-span-4">
          <h5 className="text-uppercase mb-3 text-2xl font-bold font-mono">
            Address
          </h5>

          <p className="text-base mb-8">
            127/10 - Dhaka <br /> Bangladesh
          </p>

          <h6 className="font-bold mb-2">Follow us-</h6>
          <hr className="mb-2" />
          <a href="https://twitter.com/?lang=en">Twitter</a>

          <a className=" mx-4" href="https://www.facebook.com/">
            Facebook
          </a>

          <a href="https://www.instagram.com/">Instagram</a>

          <a className=" mx-4" href="https://www.skype.com/en/">
            Skype
          </a>
        </div>
      </div>
      <hr />

      <p className="text-center mt-4 pb-4 text-white">
        Copyright &copy;2024 All Rights Reserved | This Website is made with
        &#x003C;&#10083;&#x003E; by Afsana Meem{" "}
      </p>
    </div>
  );
};

export default Footer;
