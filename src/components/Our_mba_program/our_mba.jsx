import React from "react";
import "./our_mba.css";
import { Link, Element } from "react-scroll";

import ourMba from "../../assets/our-mba.webp";
function from_writing() {
  return (
    <div id="our-mba" className="our-mba-main">
      <div className="our-mba-inner">
        <div className=" our-mba-inner-1">
          <h2 className="main-head-h2">
            Our MBA Programs: Diverse, In-Depth, and{" "}
            <span className="text-[#8E24ED]">Globally Connected</span>
          </h2>
          <img className="our-mba-img-1" src={ourMba} alt="" />

          <p className="main-p our-mba-p">
            CMBS offers a range of MBA programs, each focusing on different
            sectors of the business world. From Educational Leadership to
            Transport Management, our programs are structured to provide an
            in-depth understanding of specific industries, alongside a broad
            comprehension of business management principles.
          </p>
          <p className="main-p our-mba-p">
            Our faculty comprises distinguished academics and industry
            professionals, bringing a wealth of knowledge and experience to our
            classrooms. The partnership with Learners University College enables
            us to offer our MBA programs online, making them accessible to a
            global student body.
          </p>

          {/* //this button only here others are components */}
          <div
            id="NewRootRoot"
            className="flex flex-row w-full darkButton2 our-mba-button"
          >
            <Link
              to="contactForm"
              // spy={true}
              smooth={true}
              duration={2800}
              delay={200}
              className="light-effect-button button bg-[#0b434b] w-[95%] sm:w-[539px]  rounded-[56px] sm:rounded-[91px] pt-[25px] pb-[25px] text-[15px] md:text-[15px] xl:text-[23px] font-bold cursor-pointer"
            >
              Claim Your Free Consultation Now
            </Link>
          </div>
          <p className="claim-description-2">
            Claim Your Free Consultation With Our Career Coach & Get
            Scholarships Of Upto 30% <br />
          </p>
        </div>
        <img className=" our-mba-img-2" src={ourMba} alt="" />
      </div>
      {/* </div> */}
    </div>
  );
}

export default from_writing;
