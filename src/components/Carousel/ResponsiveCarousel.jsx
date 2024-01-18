import React from "react";
import "./responsiveCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { usePopup } from "../Hoocks/PopupContext";

import facultyIcon from "../../assets/svg/faculty-icon.svg";
import moneyIcon from "../../assets/svg/money-icon.svg";
import balancedIcon from "../../assets/svg/balanced-icon.svg";
import timerIcon from "../../assets/svg/timer-icon.svg";
import capIcon from "../../assets/svg/cap-icon.svg";
import moneyIcon2 from "../../assets/svg/money-icon-2.svg";

function ResponsiveCarousel() {
  // const { isPopupOpen } = usePopup();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2,
    },
  };

  const Divider = () => (
    <div
      className="divider mx- h-[200px] bg-gray-300"
      style={{ width: "1px" }}
    ></div>
  );
  return (
    <div className={`carousel`}>
      <div className="hidden lg:flex justify-between items-center w-[100%]   ">
        <div className="carousel-card ">
          <svg
            className="mb-2 carousel-svg"
            width="74"
            height="73"
            viewBox="0 0 74 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="37.0323"
              cy="36.4366"
              r="36.4366"
              fill="#259D4A"
              fill-opacity="0.15"
            />
            <g clip-path="url(#clip0_440_515)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M54.4151 48.8522C54.4151 51.5949 52.1917 53.8183 49.449 53.8183H24.6184C21.8757 53.8183 19.6523 51.5949 19.6523 48.8522L19.6523 24.0216C19.6523 21.2789 21.8757 19.0555 24.6184 19.0555L49.449 19.0555C52.1917 19.0555 54.4151 21.2789 54.4151 24.0216V48.8522ZM49.449 48.8522H26.3741L49.449 25.7774V48.8522Z"
                fill="#0C434B"
              />
            </g>
            <defs>
              <clipPath id="clip0_440_515">
                <rect
                  width="35.5023"
                  height="35.5023"
                  fill="white"
                  transform="translate(19.2812 18.6854)"
                />
              </clipPath>
            </defs>
          </svg>

          <h4 className="text-sm sm:text-base">Balanced Work-Life Structure</h4>
        </div>
        {/* <Divider /> */}
        <div className="carousel-card ">
          <svg
            className="mb-2 carousel-svg"
            width="74"
            height="73"
            viewBox="0 0 74 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 40813">
              <circle
                id="Ellipse 203"
                cx="37.0323"
                cy="36.4366"
                r="36.4366"
                fill="#EE9B4E"
                fill-opacity="0.23"
              />
              <g id="hourglass--hourglass-loading-measure-clock-time">
                <path
                  id="Union"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.1077 20C23.1313 20 22.3398 20.7915 22.3398 21.7679C22.3398 22.7442 23.1313 23.5357 24.1077 23.5357H27.6436V28.7356C27.6436 31.956 29.2582 34.7993 31.722 36.5001C29.2583 38.201 27.6438 41.0442 27.6438 44.2644V49.4643H24.1099C23.1335 49.4643 22.342 50.2558 22.342 51.2321C22.342 52.2085 23.1335 53 24.1099 53H50.0384C51.0147 53 51.8062 52.2085 51.8062 51.2321C51.8062 50.2558 51.0147 49.4643 50.0384 49.4643H46.5005V44.2644C46.5005 41.0441 44.8859 38.2009 42.4222 36.5C44.8859 34.7991 46.5003 31.9559 46.5003 28.7356V23.5357H50.0363C51.0126 23.5357 51.8041 22.7442 51.8041 21.7679C51.8041 20.7915 51.0126 20 50.0363 20H24.1077Z"
                  fill="#0C434B"
                />
              </g>
            </g>
          </svg>

          <h4 className="text-sm sm:text-base">
            Complete in <br /> 12 Months
          </h4>
        </div>
        {/* <Divider /> */}
        <div className="carousel-card">
          <svg
            className="mb-2 carousel-svg"
            width="74"
            height="73"
            viewBox="0 0 74 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 40813">
              <circle
                id="Ellipse 203"
                cx="37.0323"
                cy="36.4366"
                r="36.4366"
                fill="#EDE6D8"
                fill-opacity="0.39"
              />
              <g id="graduation-cap--graduation-cap-education">
                <path
                  id="Union"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M38.1518 19.135C37.7365 18.955 37.2652 18.955 36.8499 19.135L15.5645 28.3574C14.9657 28.6168 14.5781 29.2071 14.5781 29.8598C14.5781 30.5124 14.9657 31.1027 15.5645 31.3621L18.4875 32.6286V50.9375C17.0652 51.5685 16.0731 52.993 16.0731 54.6493C16.0731 56.8908 17.8902 58.7079 20.1318 58.7079C22.3733 58.7079 24.1904 56.8908 24.1904 54.6493C24.1904 52.9913 23.1965 51.5655 21.772 50.9355V34.0517L36.8499 40.5845C37.2652 40.7645 37.7365 40.7645 38.1518 40.5845L59.4372 31.3621C60.0358 31.1027 60.4236 30.5124 60.4236 29.8598C60.4236 29.2071 60.0358 28.6168 59.4372 28.3574L38.1518 19.135ZM24.257 47.3793L24.2406 39.583L35.221 44.3405C36.6746 44.9703 38.3241 44.9703 39.7776 44.3405L50.76 39.5821L50.7616 47.3755C50.7616 47.7334 50.6444 48.0814 50.4279 48.3663L49.1243 47.3759C50.4279 48.3663 50.4276 48.367 50.427 48.3678L50.4257 48.3693L50.423 48.3728L50.4168 48.381L50.4001 48.4024L50.35 48.4645C50.3094 48.5142 50.2541 48.5802 50.1833 48.6601C50.0422 48.8198 49.8401 49.0354 49.5752 49.288C49.0454 49.7926 48.2604 50.4476 47.2027 51.0966C45.0767 52.4012 41.8774 53.664 37.5 53.664C33.1223 53.664 29.9271 52.4012 27.805 51.0956C26.7492 50.4463 25.9665 49.791 25.4382 49.2858C25.174 49.033 24.9726 48.8172 24.832 48.6573C24.7616 48.5773 24.7063 48.5113 24.6658 48.4614L24.616 48.3992L24.5993 48.3777L24.593 48.3695L24.5904 48.366L24.5892 48.3644C24.5886 48.3637 24.588 48.363 25.8943 47.376L24.588 48.363C24.374 48.0796 24.2578 47.7344 24.257 47.3793Z"
                  fill="#0C434B"
                />
              </g>
            </g>
          </svg>

          <h4 className="text-sm sm:text-base">Industry-Leading Faculties</h4>
        </div>
        {/* <Divider /> */}
        <div className="carousel-card">
          <svg
            className="mb-2 carousel-svg"
            width="74"
            height="73"
            viewBox="0 0 74 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 40813">
              <circle
                id="Ellipse 203"
                cx="37.0323"
                cy="36.4366"
                r="36.4366"
                fill="#0B434B"
                fill-opacity="0.12"
              />
              <g id="bag-dollar--bag-payment-cash-money-finance">
                <path
                  id="Subtract"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M53.7745 42.6136C53.7745 50.4702 46.658 54 36.6949 54C26.7318 54 19.6152 50.4702 19.6152 42.6705C19.6152 34.1307 23.8851 29.8036 32.425 25.4767L29.4008 19.8469C29.2204 19.5648 29.12 19.239 29.1102 18.9043C29.1004 18.5695 29.1817 18.2384 29.3453 17.9462C29.5089 17.6541 29.7488 17.4118 30.0393 17.2452C30.3298 17.0786 30.6601 16.994 30.9949 17.0003H43.0645C43.3784 17.0083 43.6851 17.096 43.9557 17.2553C44.2263 17.4145 44.452 17.6399 44.6114 17.9104C44.7708 18.1809 44.8588 18.4875 44.8672 18.8014C44.8754 19.1153 44.8035 19.4261 44.6587 19.7046L40.9648 25.4767C49.5047 29.7466 53.7745 34.0738 53.7745 42.6136ZM38.3466 29.9166C38.3466 29.0044 37.6071 28.2648 36.6948 28.2648C35.7826 28.2648 35.043 29.0044 35.043 29.9166V31.5725C32.5931 31.6752 30.6383 33.6939 30.6383 36.1691C30.6383 38.3312 32.1438 40.2015 34.2559 40.6635L38.1491 41.5152C38.9068 41.6809 39.4479 42.3529 39.4479 43.1298C39.4479 44.0427 38.7076 44.7827 37.7961 44.7827H35.5937C34.8771 44.7827 34.263 44.3255 34.0355 43.6817C33.7315 42.8216 32.7878 42.3708 31.9277 42.6748C31.0675 42.9788 30.6167 43.9224 30.9207 44.7827C31.5417 46.5394 33.1261 47.8442 35.043 48.0562V49.7381C35.043 50.6504 35.7826 51.3899 36.6948 51.3899C37.6071 51.3899 38.3466 50.6504 38.3466 49.7381V48.0562C40.8249 47.7821 42.7515 45.6797 42.7515 43.1298C42.7515 40.8016 41.1306 38.7856 38.855 38.2879L34.9618 37.4362C34.3664 37.306 33.9419 36.7786 33.9419 36.1691C33.9419 35.4527 34.5226 34.872 35.239 34.872H37.7961C38.2852 34.872 38.7229 35.0825 39.0277 35.423C39.1709 35.583 39.2824 35.7696 39.3543 35.9731C39.6583 36.8332 40.602 37.284 41.4622 36.98C42.3223 36.676 42.7731 35.7323 42.4691 34.8722C42.2509 34.2549 41.9149 33.6953 41.4893 33.2198C40.699 32.3368 39.592 31.7367 38.3466 31.5987V29.9166Z"
                  fill="#0C434B"
                />
              </g>
            </g>
          </svg>

          <h4 className="text-sm sm:text-base">
            Scholarships Available: Save Up to 30%
          </h4>
        </div>
      </div>

      <div className=" carousel-main lg:hidden overflow-visible h-auto">
        <Carousel
          responsive={responsive}
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={2000}
        >
          <div className=" carousel-card  ">
            <img
              src={balancedIcon}
              alt="Work-Life"
              className=" carousel-svg mb-2"
            />
            <h4 className="text-sm sm:text-base">
              Balanced Work-Life Structure
            </h4>
          </div>
          {/* Slide 2 */}
          <div className="carousel-card ">
            <img
              src={timerIcon}
              alt="12 Months"
              className=" carousel-svg mb-2"
            />
            <h4 className="text-sm sm:text-base">Complete in 12 Months</h4>
          </div>
          {/* Slide 3 */}
          <div className="carousel-card ">
            <img src={capIcon} alt="12 Months" className=" carousel-svg mb-2" />
            <h4 className="text-sm sm:text-base">Industry-Leading Faculties</h4>
          </div>
          {/* Slide 4 */}
          <div className="carousel-card ">
            <img
              src={moneyIcon2}
              alt="12 Months"
              className=" carousel-svg mb-2"
            />
            <h4 className="text-sm sm:text-base">
              Scholarships Available: Save Up to 30%
            </h4>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default ResponsiveCarousel;
