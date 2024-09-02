import React, { useEffect } from "react";
import "./possibilities.css";
import ButtonDark from "../Buttons/buttonDark";
import Claim_description from "../Description/claim_description";
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "../Popup_page/popupTwo";
import { usePopup } from "../Hoocks/PopupContext";

import university_icon_large from "../../assets/svg/university-icon-large.svg";
import up_graph from "../../assets/svg/up-graph-icon.svg";
import sales_icon from "../../assets/svg/sales-icon.svg";
import target2 from "../../assets/svg/target-2-icon.svg";
import scolar from "../../assets/svg/scolar-icon.svg";
import dotted from "../../assets/svg/dottet-curve-icon.svg";
import swisMba from "../../assets/swiss-mba.webp";
import swisMbaTab from "../../assets/swiss-mba-tab.webp";

function world_of_possibilities() {
  const { isPopupOpen, togglePopup } = usePopup();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div id="whyLuc" className={isPopupOpen ? "blur-effect" : ""}>
      <div className="world-of-possibilities-main">
        <h1>
          <span className="wavy-underline-green">A World of</span>{" "}
          <span className="wavy-underline-green "> Possibilities: </span>
          Journey Beyond the Ordinary with Learners University College
        </h1>
        <div className="world-of-possibilities-sub-1">
          <img
            className="w-[316px] h-[316px] breathing-image"
            src={university_icon_large}
            alt=""
          />
          <div className="world-of-possibilities-cards ">
            <div className="world-of-possibilities-card">
              <svg
                className="world-of-possibilities-card-svg "
                width="82"
                height="82"
                viewBox="0 0 82 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40.8113" cy="40.8113" r="40.8113" fill="#FF66CC" />
                <g clip-path="url(#clip0_2086_2928)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.7977 23.9022C27.5242 23.1757 28.5095 22.7676 29.5369 22.7676H46.3232C46.6657 22.7676 46.9941 22.9036 47.2363 23.1458L56.2752 32.1846C56.5172 32.4267 56.6533 32.7552 56.6533 33.0977V55.0491C56.6533 56.0764 56.2453 57.0619 55.5188 57.7883C54.7924 58.5148 53.8069 58.9228 52.7795 58.9228H29.5369C28.5095 58.9228 27.5242 58.5148 26.7977 57.7883C26.0712 57.0619 25.6631 56.0764 25.6631 55.0491V26.6414C25.6631 25.614 26.0712 24.6287 26.7977 23.9022ZM40.056 39.743C40.4628 40.1498 41.1582 39.8617 41.1582 39.2865V26.6414H30.8281V39.2865C30.8281 39.8617 31.5236 40.1498 31.9303 39.743L35.0801 36.5932C35.5844 36.089 36.402 36.089 36.9062 36.5932L40.056 39.743Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2086_2928">
                    <rect
                      width="36.9245"
                      height="36.9245"
                      fill="white"
                      transform="translate(22.6963 22.3828)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div>
                <h1>120+</h1>
                <span>Courses</span>
              </div>
            </div>
            <div className="world-of-possibilities-card">
              <svg
                className="world-of-possibilities-card-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="83"
                height="82"
                viewBox="0 0 83 82"
                fill="none"
              >
                <circle cx="41.2566" cy="41.1707" r="40.8113" fill="#FF66CC" />
                <path
                  d="M40.5024 47.0828C37.3169 47.1286 34.2771 48.425 32.0389 50.6922C29.8007 52.9594 28.5436 56.0156 28.5388 59.2015C28.5388 59.4586 28.641 59.7052 28.8228 59.887C29.0046 60.0688 29.2512 60.171 29.5083 60.171H51.8067C52.0638 60.171 52.3104 60.0688 52.4922 59.887C52.674 59.7052 52.7762 59.4586 52.7762 59.2015C52.7737 57.5976 52.4534 56.0102 51.8338 54.5308C51.2142 53.0515 50.3076 51.7096 49.1663 50.5828C48.025 49.4559 46.6717 48.5664 45.1846 47.9657C43.6975 47.3649 42.1061 47.0649 40.5024 47.0828Z"
                  fill="white"
                />
                <path
                  d="M54.9293 24.3177L41.0074 19.1018C40.8478 19.0346 40.6764 19 40.5032 19C40.3301 19 40.1587 19.0346 39.9991 19.1018L26.0772 24.3177L25.3791 24.8024C25.3707 24.8408 25.3707 24.8804 25.3791 24.9188V25.0933C25.3711 25.1382 25.3711 25.1841 25.3791 25.229V32.5584C25.3791 32.9441 25.5323 33.314 25.8051 33.5867C26.0778 33.8594 26.4477 34.0126 26.8334 34.0126C27.2191 34.0126 27.5889 33.8594 27.8617 33.5867C28.1344 33.314 28.2876 32.9441 28.2876 32.5584V27.7691L32.5728 29.3784V36.32C32.5728 37.4175 32.7889 38.5042 33.2089 39.5181C33.6289 40.532 34.2445 41.4533 35.0205 42.2293C35.7965 43.0054 36.7178 43.6209 37.7317 44.0409C38.7456 44.4609 39.8323 44.6771 40.9298 44.6771C42.0273 44.6771 43.114 44.4609 44.1279 44.0409C45.1418 43.6209 46.0631 43.0054 46.8391 42.2293C47.6151 41.4533 48.2307 40.532 48.6507 39.5181C49.0707 38.5042 49.2868 37.4175 49.2868 36.32V29.2427L55.1038 27.0323C55.3781 26.9267 55.6141 26.7406 55.7805 26.4983C55.9469 26.256 56.036 25.9689 56.036 25.675C56.036 25.381 55.9469 25.094 55.7805 24.8517C55.6141 24.6094 55.3781 24.4232 55.1038 24.3177H54.9293ZM40.6777 40.8185C40.0879 40.8185 39.5039 40.702 38.9592 40.4757C38.4145 40.2494 37.9199 39.9177 37.5037 39.4997C37.0875 39.0818 36.758 38.5857 36.534 38.04C36.3101 37.4944 36.1961 36.9098 36.1987 36.32V35.2148L40.0767 36.4364C40.2183 36.4536 40.3616 36.4536 40.5032 36.4364C40.6448 36.4553 40.7882 36.4553 40.9298 36.4364L45.1568 35.1566V36.32C45.1568 37.5097 44.6855 38.651 43.8461 39.4941C43.0067 40.3371 41.8674 40.8133 40.6777 40.8185Z"
                  fill="white"
                />
                <ellipse
                  cx="41.214"
                  cy="37.3171"
                  rx="5.94073"
                  ry="4.45555"
                  fill="white"
                />
              </svg>
              <div>
                <h1>4000+</h1>
                <span>Students</span>
              </div>
            </div>
            <div className="world-of-possibilities-card">
              <svg
                className="world-of-possibilities-card-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="83"
                height="82"
                viewBox="0 0 83 82"
                fill="none"
              >
                <circle cx="41.7235" cy="41.1707" r="40.8113" fill="#FF66CC" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M44.7987 27.2336C42.1242 24.386 38.8322 21 33.8087 21C30.439 21 27.841 22.6584 26.0855 24.4407C25.2051 25.3345 24.5134 26.281 24.0129 27.1195C23.527 27.9335 23.1736 28.7261 23.0359 29.3221C23.0121 29.4249 23.0001 29.5301 23.0001 29.6357V37.9042C23.2798 37.6441 23.5772 37.3782 23.8905 37.112C26.028 35.2957 29.2218 33.1875 32.7501 33.1875C37.8356 33.1875 41.7285 36.458 44.8914 39.1804L45.3349 39.5628C46.8153 40.8399 48.1496 41.9909 49.5072 42.8679C50.4664 43.4875 51.3662 43.9212 52.2468 44.1477C52.7156 44.2684 53.1791 44.3304 53.643 44.3304C55.3253 44.3304 57.4377 43.4858 59.2949 42.4794C60.188 41.9955 60.9588 41.5096 61.5056 41.1447C61.702 41.0138 61.8683 40.8992 62.0001 40.8068V29.6357C62.0001 29.0219 61.5984 28.4805 61.0109 28.3026C60.4234 28.1247 59.7888 28.3524 59.4484 28.8631C58.6074 30.1245 56.2601 32.5886 52.6401 32.5886C51.2473 32.5886 50.0043 32.0382 48.7266 31.0634C47.5346 30.1539 46.416 28.9598 45.1711 27.6308L44.7987 27.2336ZM62.0001 44.9469C61.6745 45.1402 61.3237 45.3405 60.9538 45.541C59.0069 46.5959 56.2443 47.8125 53.643 47.8125C51.3768 47.8125 49.382 46.9324 47.6178 45.7928C46.0445 44.7765 44.5225 43.4623 43.0817 42.2181L42.6197 41.8196C39.3098 38.9706 36.3573 36.6696 32.7501 36.6696C30.5162 36.6696 28.1386 38.0717 26.1453 39.7655C25.1855 40.5811 24.3879 41.4015 23.8301 42.0191C23.5522 42.3268 23.3365 42.5811 23.1927 42.7554C23.1208 42.8425 23.0671 42.9094 23.0328 42.9527L23.0001 42.9941V54.2614C23.0001 54.9696 23.5315 55.5651 24.2351 55.6454C24.9387 55.7256 25.5906 55.2651 25.75 54.5751C25.796 54.3762 25.9912 53.8659 26.4049 53.1731C26.8039 52.5045 27.3627 51.7395 28.0701 51.0214C29.4901 49.5795 31.4161 48.4114 33.8087 48.4114C37.4779 48.4114 40.0006 50.8197 42.7681 53.7664L43.1565 54.1809C44.3666 55.4743 45.6482 56.8443 47.0369 57.9038C48.607 59.1019 50.4319 60 52.6401 60C57.5873 60 60.6758 56.67 61.7661 55.0342C61.9188 54.8052 62.0001 54.5364 62.0001 54.2614V44.9469Z"
                  fill="white"
                />
              </svg>
              <div>
                <h1>65+</h1>
                <span>Nationalities</span>
              </div>
            </div>
          </div>
        </div>
        <div className="world-of-possibilities-sub-2">
          <div className="world-of-possibilities-cards-2">
            <div className=" world-of-possibilities-2-card">
              <div className="world-of-possibilities-2-card-head ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="40"
                  viewBox="0 0 42 40"
                  fill="none"
                >
                  <path
                    d="M18.1758 23.6015L9.88727 15.313L7.0625 18.1006L18.1758 29.2139L42.0005 5.38917L39.2129 2.60156L18.1758 23.6015Z"
                    fill="#FF66CC"
                  />
                  <circle
                    cx="19.6991"
                    cy="19.6991"
                    r="18.5104"
                    stroke="#1A0060"
                    stroke-width="2.37735"
                  />
                </svg>
                <h3>Globally Recognised & Accredited</h3>
              </div>
              <p>
                Our programs hold both national and international accreditation,
                ensuring your degree has global relevance.
              </p>
            </div>
            <div className=" world-of-possibilities-2-card">
              <div className="world-of-possibilities-2-card-head">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="40"
                  viewBox="0 0 42 40"
                  fill="none"
                >
                  <path
                    d="M18.1758 23.6015L9.88727 15.313L7.0625 18.1006L18.1758 29.2139L42.0005 5.38917L39.2129 2.60156L18.1758 23.6015Z"
                    fill="#FF66CC"
                  />
                  <circle
                    cx="19.6991"
                    cy="19.6991"
                    r="18.5104"
                    stroke="#1A0060"
                    stroke-width="2.37735"
                  />
                </svg>
                <h3>Unbeatable Affordability</h3>
              </div>
              <p>
                Experience top-tier education without breaking the bank, thanks
                to our tailored, cost-efficient easy monthly payments.
              </p>
            </div>
            <div className=" world-of-possibilities-2-card">
              <div className="world-of-possibilities-2-card-head">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="40"
                  viewBox="0 0 42 40"
                  fill="none"
                >
                  <path
                    d="M18.1758 23.6015L9.88727 15.313L7.0625 18.1006L18.1758 29.2139L42.0005 5.38917L39.2129 2.60156L18.1758 23.6015Z"
                    fill="#FF66CC"
                  />
                  <circle
                    cx="19.6991"
                    cy="19.6991"
                    r="18.5104"
                    stroke="#1A0060"
                    stroke-width="2.37735"
                  />
                </svg>
                <h3>Flexible Learning Modes</h3>
              </div>
              <p>
                Learn from anywhere through our digital libraries and live
                online classrooms.
              </p>
            </div>
            <div className=" world-of-possibilities-2-card">
              <div className="world-of-possibilities-2-card-head">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="40"
                  viewBox="0 0 42 40"
                  fill="none"
                >
                  <path
                    d="M18.1758 23.6015L9.88727 15.313L7.0625 18.1006L18.1758 29.2139L42.0005 5.38917L39.2129 2.60156L18.1758 23.6015Z"
                    fill="#FF66CC"
                  />
                  <circle
                    cx="19.6991"
                    cy="19.6991"
                    r="18.5104"
                    stroke="#1A0060"
                    stroke-width="2.37735"
                  />
                </svg>
                <h3>Fast-Track Your Degree</h3>
              </div>
              <p>
                Choose accelerated options to complete your MBA or other degrees
                at your own pace.
              </p>
            </div>
            <div className=" world-of-possibilities-2-card">
              <div className="world-of-possibilities-2-card-head">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="40"
                  viewBox="0 0 42 40"
                  fill="none"
                >
                  <path
                    d="M18.1758 23.6015L9.88727 15.313L7.0625 18.1006L18.1758 29.2139L42.0005 5.38917L39.2129 2.60156L18.1758 23.6015Z"
                    fill="#FF66CC"
                  />
                  <circle
                    cx="19.6991"
                    cy="19.6991"
                    r="18.5104"
                    stroke="#1A0060"
                    stroke-width="2.37735"
                  />
                </svg>
                <h3>Expert Faculty</h3>
              </div>
              <p>
                Learn from seasoned professionals with deep industry insights.
              </p>
            </div>
            <div className=" world-of-possibilities-2-card">
              <div className="world-of-possibilities-2-card-head">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="40"
                  viewBox="0 0 42 40"
                  fill="none"
                >
                  <path
                    d="M18.1758 23.6015L9.88727 15.313L7.0625 18.1006L18.1758 29.2139L42.0005 5.38917L39.2129 2.60156L18.1758 23.6015Z"
                    fill="#FF66CC"
                  />
                  <circle
                    cx="19.6991"
                    cy="19.6991"
                    r="18.5104"
                    stroke="#1A0060"
                    stroke-width="2.37735"
                  />
                </svg>
                <h3>Multiple Starting Dates</h3>
              </div>
              <p>
                Unlike traditional programs, a student can join the academic
                year more than twice every year.
              </p>
            </div>
            <div className=" world-of-possibilities-2-card">
              <div className="world-of-possibilities-2-card-head">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="40"
                  viewBox="0 0 42 40"
                  fill="none"
                >
                  <path
                    d="M18.1758 23.6015L9.88727 15.313L7.0625 18.1006L18.1758 29.2139L42.0005 5.38917L39.2129 2.60156L18.1758 23.6015Z"
                    fill="#FF66CC"
                  />
                  <circle
                    cx="19.6991"
                    cy="19.6991"
                    r="18.5104"
                    stroke="#1A0060"
                    stroke-width="2.37735"
                  />
                </svg>
                <h3>Career-Focused Programs</h3>
              </div>
              <p>
                Our courses are designed to meet the specific needs of working
                professionals.
              </p>
            </div>
            <div className=" world-of-possibilities-2-card">
              <div className="world-of-possibilities-2-card-head">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="40"
                  viewBox="0 0 42 40"
                  fill="none"
                >
                  <path
                    d="M18.1758 23.6015L9.88727 15.313L7.0625 18.1006L18.1758 29.2139L42.0005 5.38917L39.2129 2.60156L18.1758 23.6015Z"
                    fill="#FF66CC"
                  />
                  <circle
                    cx="19.6991"
                    cy="19.6991"
                    r="18.5104"
                    stroke="#1A0060"
                    stroke-width="2.37735"
                  />
                </svg>
                <h3>Hassle-Free Migration</h3>
              </div>
              <p>
                During the course of the program, you can also opt to migrate
                between multiple campuses on a quarterly basis.
              </p>
            </div>
          </div>
        </div>
        <ButtonDark
          duration={2500}
          containerStyle={{ justifyContent: "center" }}
        />
        <Claim_description color="rgba(53, 42, 82, 0.79)" />
        <div className="world-of-possibilities-bottom">
          <div className="world-of-possibilities-icons">
            <img
              className="world-of-possibilities-icon-1 "
              src={up_graph}
              alt=""
            />
            <img
              className="world-of-possibilities-icon-2 animated-icon2"
              src={sales_icon}
              alt=""
              data-aos="fade-in"
              data-aos-delay="800"
            />
            <img
              className="world-of-possibilities-icon-3 animated-icon2"
              src={target2}
              alt=""
              data-aos="fade-in"
              data-aos-delay="0"
            />
            <img
              className="world-of-possibilities-icon-4 animated-icon2"
              src={scolar}
              alt=""
              data-aos="fade-in"
              data-aos-delay="400"
            />
            <img
              className="world-of-possibilities-icon-dot"
              src={dotted}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="world-of-possibilities-brochure ">
        <div className="world-of-possibilities-brochure-left">
          <h1>
            Get Instant Access To &nbsp;
            <span className="wavy-underline-violet">The CMBS MBA</span>{" "}
            <span className="wavy-underline-violet">Brochure</span>
          </h1>
          <p>
            Get an inside look at our prestigious programs, faculty, and the
            unique benefits that set us apart in the business education
            landscape. Your first step toward a transformative MBA experience
            starts here.
          </p>
          <div className="flex gap-3 sm:gap-6 items-center ">
            <a
              onClick={togglePopup}
              className="flex gap-3 sm:gap-6 items-center cursor-pointer"
            >
              <h3 className="underline underline-offset-[3px]">Download Free Brochure Now</h3>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="30"
                viewBox="0 0 35 30"
                fill="none"
              >
                <path
                  d="M16.0404 23.778C16.0882 23.8281 16.6674 24.3469 17.3778 24.3469C18.0882 24.3469 18.6113 23.8866 18.7224 23.7704L25.9089 16.7046C26.6238 16.0016 26.6238 14.8618 25.9096 14.1588C25.1947 13.4552 24.0348 13.4559 23.3205 14.1582L19.2087 18.2007V1.80026C19.2087 0.806468 18.3885 0 17.3778 0C16.3671 0 15.547 0.806468 15.547 1.80026V18.2L11.4364 14.1582C10.7215 13.4559 9.56228 13.4559 8.84673 14.1582C8.13182 14.8612 8.13182 16.001 8.84673 16.7046L16.0404 23.778Z"
                  fill="#E496E8"
                />
                <path
                  d="M34.747 19.8729V19.7256H34.7321C34.6534 19.0505 34.0773 18.5254 33.3708 18.5254C32.6643 18.5254 32.0882 19.0505 32.0101 19.7256H32.0017V19.8056C32.0004 19.8303 31.9939 19.8538 31.9939 19.8792C31.9939 19.9046 32.0004 19.9281 32.0017 19.9529V23.2708C32.0017 25.1035 30.9322 26.6516 29.6658 26.6516H5.08961C3.82318 26.6516 2.75308 25.1035 2.75308 23.2708V19.7256H2.73823C2.65945 19.0505 2.08339 18.5254 1.37687 18.5254C0.67036 18.5254 0.0949494 19.0505 0.0161609 19.7256H0.00776513V19.8024C0.00647352 19.8284 0 19.8532 0 19.8792C0 19.9053 0.00647352 19.93 0.00776513 19.9561V23.2708C0.00776513 26.6237 2.28811 29.3517 5.09026 29.3517H29.6664C32.4686 29.3517 34.7483 26.6237 34.7483 23.2708V19.8856C34.7483 19.8837 34.7489 19.8811 34.7489 19.8792C34.7489 19.8773 34.747 19.8748 34.747 19.8729Z"
                  fill="#E496E8"
                />
              </svg>
            </a>
          </div>
        </div>
        <img className="swiss-img-1" src={swisMba} alt="" />
        <img className="swiss-img-2" src={swisMbaTab} alt="" />
      </div>
      {isPopupOpen && <Popup />}
    </div>
  );
}

export default world_of_possibilities;
