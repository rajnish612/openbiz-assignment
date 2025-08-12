import React from "react";

const Footer = () => {
  return (
    <section className="bg-gradient-to-r py-10  overflow-hidden flex flex-col items-center from-purple-900 to-purple-500 w-screen">
      <div className="flex flex-col w-[90%] items-center ">
        <div className="flex flex-wrap  space-y-7 items-start space-x-7">
          <div className="flex flex-col space-y-4 justify-start">
            <span className="text-xl">UDYAM REGISTRATION</span>
            <span>Ministry of MSME Udyog bhawan - New Delhi</span>
            <span>Email: champions@gov.in</span>
            <span>Contact Us For Grievances / Problems</span>
          </div>
          <div className="flex flex-col space-y-4 cursor-pointer justify-start">
            <span className="text-xl font-black">
              <a href="#">Our Services</a>
            </span>
            <span className="hover:underline ">
              {" "}
              <a href="#">&rarr; Champions</a>
            </span>
            <span className="hover:underline ">
              {" "}
              <a href="#"> &rarr; MSE Samadhaan</a>
            </span>
            <span className="hover:underline ">
              {" "}
              <a href="#">&rarr; MSE Samabandh</a>
            </span>
            <span className="hover:underline ">
              {" "}
              <a href="#">&rarr; MSE Dashboard</a>
            </span>
            <span className="hover:underline ">
              &rarr; Entrepreneurship Skill Development Programme (ESDP)
            </span>
          </div>
          <div className="flex flex-col w-full md:w-fit  space-y-2">
            <span className="font-black"> Video</span>
            <iframe
              className="w-[100%] h-50"
              src="https://www.youtube.com/embed/wrV5qS46-e4?si=ewQRuTDAED7ngGjN"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <hr class="border-2 w-full mt-10 border-black" />
        <div className="flex mt-5 text-center">
          <span className=" text-wrap">
            © Copyright Udyam Registration. All Rights Reserved, Website Content
            Managed by Ministry of Micro Small and Medium Enterprises, GoI
            Website hosted & managed by National Informatics Centre, Ministry of
            Communications and IT, Government of India
          </span>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
