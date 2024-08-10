import React from "react";
import "./poweskil.css";
import ButtonDark from "../Buttons/buttonDark";
import Claim_description from "../Description/claim_description";
import { usePopup } from "../Hoocks/PopupContext";

import fire_icon from "../../assets/svg/powerskill-fire-icon.svg";
import prof1 from "../../assets/prof1.webp";
import prof2 from "../../assets/prof2.webp";
import prof3 from "../../assets/prof3.webp";
import prof4 from "../../assets/prof4.webp";
import prof5 from "../../assets/prof5.webp";
import prof6 from "../../assets/prof6.webp";
import prof7 from "../../assets/prof7.webp";
import prof8 from "../../assets/prof8.webp";
import prof9 from "../../assets/prof9.webp";

import star_lg from "../../assets/svg/star-large-icon.svg";

function power_skills() {
  const { isPopupOpen, togglePopup } = usePopup();

  return (
    <div id="specialisation" className="power-skill-main">
      <h2 className="main-head-h2">
        <span className="wavy-underline-orange-small">Top</span>{" "}
        <span className="text-[#6617FF]">MBA Specializations</span> at CMBS
      </h2>

      <div className="power-skill-cards">
        {/* 1 */}
        <div className="power-skill-card">
          <svg
            className="power-skill-card-icon"
            width="85"
            height="86"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30.712" cy="30.712" r="30.712" fill="#FF66CC" />
            <path
              d="M30.7987 42.4404V22.9781C29.6929 23.7521 27.3707 24.3419 24.9748 24.4156V20.9507C28.3291 20.8401 30.2458 19.6237 30.983 17.1541H35.222V42.4404H30.7987Z"
              fill="white"
            />
          </svg>

          <img className="power-skill-card-img" src={prof4} alt="" />
          <div className="power-skill-card-main">
            <div className="power-skill-card-content">
              <img src={fire_icon} alt="" />
              <h3>MBA General</h3>
            </div>
            <p>
            Our MBA in Dubai provides the convenience of learning from anywhere, catering to busy professionals seeking broad business acumen.
            </p>
            <a
              target=""
              onClick={togglePopup}
              className="power-skill-button"
              //  onClick={(e) => {
              //   e.preventDefault();
              // }}
            >
              <span className="font-bold">Learn More</span>
              <svg
                className="pow-svg-icon"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="svg-circle"
                  cx="15.1176"
                  cy="14.7934"
                  r="14.6176"
                  fill="#93259D"
                  fill-opacity="0.2"
                />
                <mask
                  id="mask0_2007_165"
                  maskUnits="userSpaceOnUse"
                  x="3"
                  y="4"
                  width="23"
                  height="23"
                >
                  <rect
                    width="21.9265"
                    height="21.9265"
                    transform="matrix(-1 0 0 1 25.5586 4.35254)"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_2007_165)">
                  <path
                    className="svg-path"
                    d="M18.4094 16.2287L13.9327 20.7053C13.75 20.8881 13.6624 21.1012 13.6701 21.3449C13.6777 21.5885 13.7728 21.8017 13.9556 21.9844C14.1383 22.1519 14.3515 22.2394 14.5951 22.247C14.8387 22.2547 15.0519 22.1671 15.2346 21.9844L21.2644 15.9546C21.3557 15.8632 21.4205 15.7643 21.4585 15.6577C21.4966 15.5511 21.5156 15.4369 21.5156 15.3151C21.5156 15.1933 21.4966 15.0791 21.4585 14.9725C21.4205 14.8659 21.3557 14.7669 21.2644 14.6756L15.2346 8.64577C15.0671 8.47828 14.8577 8.39453 14.6065 8.39453C14.3553 8.39453 14.1383 8.47828 13.9556 8.64577C13.7728 8.82849 13.6815 9.04547 13.6815 9.29671C13.6815 9.54796 13.7728 9.76494 13.9556 9.94766L18.4094 14.4015H8.19986C7.94101 14.4015 7.72403 14.489 7.54892 14.6641C7.37381 14.8392 7.28626 15.0562 7.28626 15.3151C7.28626 15.5739 7.37381 15.7909 7.54892 15.966C7.72403 16.1411 7.94101 16.2287 8.19986 16.2287H18.4094Z"
                    fill="#55007D"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
        {/* 2 */}
        <div className="power-skill-card">
          <svg
            className="power-skill-card-icon"
            width="85"
            height="86"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30.712" cy="30.712" r="30.712" fill="#FF66CC" />
            <path
              d="M21.9746 42.4404V38.7175L34.1755 30.1659C35.7236 29.0969 36.7557 26.9959 36.7557 24.9317C36.7557 22.3146 34.6915 20.5453 31.5584 20.5453C28.4252 20.5453 26.361 22.9043 26.361 26.4798H22.1958C22.1958 20.5821 25.9556 16.638 31.5584 16.638C37.3455 16.638 41.179 19.9555 41.179 24.9317C41.179 28.2491 39.4097 31.6403 36.7557 33.4096L29.3836 38.5332H41.1421V42.4404H21.9746Z"
              fill="white"
            />
          </svg>

          <img className="power-skill-card-img" src={prof5} alt="" />
          <div className="power-skill-card-main">
            <div className="power-skill-card-content">
              <img src={fire_icon} alt="" />
              <h3>MBA in Finance</h3>
            </div>
            <p>
            MBA in Finance Program  Ideal for those looking for an Online MBA in UAE specializing in finance.
            </p>
            <a
              target=""
              onClick={togglePopup}
              className="power-skill-button"
              //  onClick={(e) => {
              //   e.preventDefault();
              // }}
            >
              <span className="font-bold">Learn More</span>
              <svg
                className="pow-svg-icon"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="svg-circle"
                  cx="15.1176"
                  cy="14.7934"
                  r="14.6176"
                  fill="#93259D"
                  fill-opacity="0.2"
                />
                <mask
                  id="mask0_2007_165"
                  maskUnits="userSpaceOnUse"
                  x="3"
                  y="4"
                  width="23"
                  height="23"
                >
                  <rect
                    width="21.9265"
                    height="21.9265"
                    transform="matrix(-1 0 0 1 25.5586 4.35254)"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_2007_165)">
                  <path
                    className="svg-path"
                    d="M18.4094 16.2287L13.9327 20.7053C13.75 20.8881 13.6624 21.1012 13.6701 21.3449C13.6777 21.5885 13.7728 21.8017 13.9556 21.9844C14.1383 22.1519 14.3515 22.2394 14.5951 22.247C14.8387 22.2547 15.0519 22.1671 15.2346 21.9844L21.2644 15.9546C21.3557 15.8632 21.4205 15.7643 21.4585 15.6577C21.4966 15.5511 21.5156 15.4369 21.5156 15.3151C21.5156 15.1933 21.4966 15.0791 21.4585 14.9725C21.4205 14.8659 21.3557 14.7669 21.2644 14.6756L15.2346 8.64577C15.0671 8.47828 14.8577 8.39453 14.6065 8.39453C14.3553 8.39453 14.1383 8.47828 13.9556 8.64577C13.7728 8.82849 13.6815 9.04547 13.6815 9.29671C13.6815 9.54796 13.7728 9.76494 13.9556 9.94766L18.4094 14.4015H8.19986C7.94101 14.4015 7.72403 14.489 7.54892 14.6641C7.37381 14.8392 7.28626 15.0562 7.28626 15.3151C7.28626 15.5739 7.37381 15.7909 7.54892 15.966C7.72403 16.1411 7.94101 16.2287 8.19986 16.2287H18.4094Z"
                    fill="#55007D"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>

        {/* 3 */}
        <div className="power-skill-card">
          <svg
            className="power-skill-card-icon"
            width="85"
            height="86"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30.712" cy="30.712" r="30.712" fill="#FF66CC" />
            <path
              d="M29.3004 42.9565C23.4764 42.9565 19.606 39.7496 19.606 34.9577H23.845C23.845 37.4274 26.0198 39.0493 29.3004 39.0493C32.839 39.0493 35.198 37.4643 35.198 35.1052C35.198 32.7461 32.839 31.1611 29.3004 31.1611H26.9413V27.2539H29.3004C32.3598 27.2539 34.424 25.9269 34.424 23.9364C34.424 21.9091 32.3598 20.5453 29.3004 20.5453C26.3515 20.5453 24.3979 22.4251 24.3979 25.2634H20.2327C20.2327 20.1029 23.845 16.638 29.3004 16.638C35.0137 16.638 38.8104 19.3289 38.8104 23.3835C38.8104 25.4846 37.2991 27.7699 35.0506 29.06C37.7414 30.2027 39.5107 32.8198 39.5107 35.5844C39.5107 40.0076 35.4192 42.9565 29.3004 42.9565Z"
              fill="white"
            />
          </svg>

          <img className="power-skill-card-img" src={prof7} alt="" />
          <div className="power-skill-card-main">
            <div className="power-skill-card-content">
              <img src={fire_icon} alt="" />
              <h3>MBA in Human Resource Management</h3>
            </div>
            <p>
              Designed for individuals aiming to lead HR functions, this MBA Course
              covers strategic HR management, employee relations, and talent
              management.
            </p>
            <a
              target=""
              onClick={togglePopup}
              className="power-skill-button"
              //  onClick={(e) => {
              //   e.preventDefault();
              // }}
            >
              <span className="font-bold">Learn More</span>
              <svg
                className="pow-svg-icon"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="svg-circle"
                  cx="15.1176"
                  cy="14.7934"
                  r="14.6176"
                  fill="#93259D"
                  fill-opacity="0.2"
                />
                <mask
                  id="mask0_2007_165"
                  maskUnits="userSpaceOnUse"
                  x="3"
                  y="4"
                  width="23"
                  height="23"
                >
                  <rect
                    width="21.9265"
                    height="21.9265"
                    transform="matrix(-1 0 0 1 25.5586 4.35254)"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_2007_165)">
                  <path
                    className="svg-path"
                    d="M18.4094 16.2287L13.9327 20.7053C13.75 20.8881 13.6624 21.1012 13.6701 21.3449C13.6777 21.5885 13.7728 21.8017 13.9556 21.9844C14.1383 22.1519 14.3515 22.2394 14.5951 22.247C14.8387 22.2547 15.0519 22.1671 15.2346 21.9844L21.2644 15.9546C21.3557 15.8632 21.4205 15.7643 21.4585 15.6577C21.4966 15.5511 21.5156 15.4369 21.5156 15.3151C21.5156 15.1933 21.4966 15.0791 21.4585 14.9725C21.4205 14.8659 21.3557 14.7669 21.2644 14.6756L15.2346 8.64577C15.0671 8.47828 14.8577 8.39453 14.6065 8.39453C14.3553 8.39453 14.1383 8.47828 13.9556 8.64577C13.7728 8.82849 13.6815 9.04547 13.6815 9.29671C13.6815 9.54796 13.7728 9.76494 13.9556 9.94766L18.4094 14.4015H8.19986C7.94101 14.4015 7.72403 14.489 7.54892 14.6641C7.37381 14.8392 7.28626 15.0562 7.28626 15.3151C7.28626 15.5739 7.37381 15.7909 7.54892 15.966C7.72403 16.1411 7.94101 16.2287 8.19986 16.2287H18.4094Z"
                    fill="#55007D"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>

        {/* 4 */}
        <div className="power-skill-card">
          <svg
            className="power-skill-card-icon"
            width="85"
            height="86"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30.712" cy="30.712" r="30.712" fill="#FF66CC" />
            <path
              d="M31.512 42.4404V35.9898H19.606V32.9304L30.5168 17.1541H35.9353V32.0826H39.5107V35.9898H35.9353V42.4404H31.512ZM24.9508 32.0826H31.512V21.946L24.9508 32.0826Z"
              fill="white"
            />
          </svg>
          <img className="power-skill-card-img" src={prof6} alt="" />
          <div className="power-skill-card-main">
            <div className="power-skill-card-content">
              <img src={fire_icon} alt="" />
              <h3>MBA in Health Management</h3>
            </div>
            <p>
             Our online masters program in healthcare specialization focuses on healthcare systems management, policy,
              and the economics of healthcare.
            </p>
            <a
              target=""
              onClick={togglePopup}
              className="power-skill-button"
              //  onClick={(e) => {
              //   e.preventDefault();
              // }}
            >
              <span className="font-bold">Learn More</span>
              <svg
                className="pow-svg-icon"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="svg-circle"
                  cx="15.1176"
                  cy="14.7934"
                  r="14.6176"
                  fill="#93259D"
                  fill-opacity="0.2"
                />
                <mask
                  id="mask0_2007_165"
                  maskUnits="userSpaceOnUse"
                  x="3"
                  y="4"
                  width="23"
                  height="23"
                >
                  <rect
                    width="21.9265"
                    height="21.9265"
                    transform="matrix(-1 0 0 1 25.5586 4.35254)"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_2007_165)">
                  <path
                    className="svg-path"
                    d="M18.4094 16.2287L13.9327 20.7053C13.75 20.8881 13.6624 21.1012 13.6701 21.3449C13.6777 21.5885 13.7728 21.8017 13.9556 21.9844C14.1383 22.1519 14.3515 22.2394 14.5951 22.247C14.8387 22.2547 15.0519 22.1671 15.2346 21.9844L21.2644 15.9546C21.3557 15.8632 21.4205 15.7643 21.4585 15.6577C21.4966 15.5511 21.5156 15.4369 21.5156 15.3151C21.5156 15.1933 21.4966 15.0791 21.4585 14.9725C21.4205 14.8659 21.3557 14.7669 21.2644 14.6756L15.2346 8.64577C15.0671 8.47828 14.8577 8.39453 14.6065 8.39453C14.3553 8.39453 14.1383 8.47828 13.9556 8.64577C13.7728 8.82849 13.6815 9.04547 13.6815 9.29671C13.6815 9.54796 13.7728 9.76494 13.9556 9.94766L18.4094 14.4015H8.19986C7.94101 14.4015 7.72403 14.489 7.54892 14.6641C7.37381 14.8392 7.28626 15.0562 7.28626 15.3151C7.28626 15.5739 7.37381 15.7909 7.54892 15.966C7.72403 16.1411 7.94101 16.2287 8.19986 16.2287H18.4094Z"
                    fill="#55007D"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>

        {/* 5 */}

        <div className="power-skill-card">
          <svg
            className="power-skill-card-icon"
            width="85"
            height="86"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30.712" cy="30.712" r="30.712" fill="#FF66CC" />
            <path
              d="M30.5584 42.9565C24.587 42.9565 20.606 39.639 20.606 33.7413H24.6607C24.8081 36.9113 27.0935 39.0493 30.4478 39.0493C33.2861 39.0493 36.1243 37.28 36.1243 33.6308C36.1243 30.2764 33.6547 28.0648 29.9318 28.0648C27.8307 28.0648 25.8771 29.1706 24.9924 30.8662L20.9746 30.3502L22.5965 17.1541H39.11V21.0613H26.2088L25.5822 26.0006C27.0566 24.8948 29.2314 24.1576 31.0007 24.1576C36.7141 24.1576 40.5107 27.9174 40.5107 33.5939C40.5107 39.1967 36.5298 42.9565 30.5584 42.9565Z"
              fill="white"
            />
          </svg>

          <img className="power-skill-card-img" src={prof3} alt="" />
          <div className="power-skill-card-main">
            <div className="power-skill-card-content">
              <img src={fire_icon} alt="" />
              <h3>MBA in Construction Management</h3>
            </div>
            <p>
              Aimed at professionals in the construction industry, this
              specialization addresses project management, sustainable
              construction practices, and strategic planning in construction
              businesses.
            </p>
            <a
              target=""
              onClick={togglePopup}
              className="power-skill-button"
              //  onClick={(e) => {
              //   e.preventDefault();
              // }}
            >
              <span className="font-bold">Learn More</span>
              <svg
                className="pow-svg-icon"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="svg-circle"
                  cx="15.1176"
                  cy="14.7934"
                  r="14.6176"
                  fill="#93259D"
                  fill-opacity="0.2"
                />
                <mask
                  id="mask0_2007_165"
                  maskUnits="userSpaceOnUse"
                  x="3"
                  y="4"
                  width="23"
                  height="23"
                >
                  <rect
                    width="21.9265"
                    height="21.9265"
                    transform="matrix(-1 0 0 1 25.5586 4.35254)"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_2007_165)">
                  <path
                    className="svg-path"
                    d="M18.4094 16.2287L13.9327 20.7053C13.75 20.8881 13.6624 21.1012 13.6701 21.3449C13.6777 21.5885 13.7728 21.8017 13.9556 21.9844C14.1383 22.1519 14.3515 22.2394 14.5951 22.247C14.8387 22.2547 15.0519 22.1671 15.2346 21.9844L21.2644 15.9546C21.3557 15.8632 21.4205 15.7643 21.4585 15.6577C21.4966 15.5511 21.5156 15.4369 21.5156 15.3151C21.5156 15.1933 21.4966 15.0791 21.4585 14.9725C21.4205 14.8659 21.3557 14.7669 21.2644 14.6756L15.2346 8.64577C15.0671 8.47828 14.8577 8.39453 14.6065 8.39453C14.3553 8.39453 14.1383 8.47828 13.9556 8.64577C13.7728 8.82849 13.6815 9.04547 13.6815 9.29671C13.6815 9.54796 13.7728 9.76494 13.9556 9.94766L18.4094 14.4015H8.19986C7.94101 14.4015 7.72403 14.489 7.54892 14.6641C7.37381 14.8392 7.28626 15.0562 7.28626 15.3151C7.28626 15.5739 7.37381 15.7909 7.54892 15.966C7.72403 16.1411 7.94101 16.2287 8.19986 16.2287H18.4094Z"
                    fill="#55007D"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>

        {/* 6 */}

        <div className="power-skill-card">
          <svg
            className="power-skill-card-icon"
            width="85"
            height="86"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30.712" cy="30.712" r="30.712" fill="#FF66CC" />
            <path
              d="M30.5584 42.9565C24.587 42.9565 20.606 37.6854 20.606 29.7973C20.606 21.9091 24.587 16.638 30.5952 16.638C35.3503 16.638 38.7046 19.1077 39.8841 23.4572H35.6451C34.9817 21.5774 33.1755 20.5453 30.5952 20.5453C27.5358 20.5453 25.361 23.2361 25.1399 27.2907C26.3563 25.3003 28.8628 23.9733 31.443 23.9733C36.8984 24.0102 40.5107 27.8068 40.5107 33.4465C40.5107 39.1598 36.5298 42.9565 30.5584 42.9565ZM30.8164 27.8436C27.7201 27.8436 25.6559 30.0921 25.6559 33.4833C25.6559 36.8376 27.7201 39.0861 30.7795 39.0861C33.9496 39.0861 36.0875 36.8376 36.0875 33.4465C36.0875 30.0921 33.9864 27.8436 30.8164 27.8436Z"
              fill="white"
            />
          </svg>

          <img className="power-skill-card-img" src={prof9} alt="" />
          <div className="power-skill-card-main">
            <div className="power-skill-card-content">
              <img src={fire_icon} alt="" />
              <h3>MBA in Transport Management</h3>
            </div>
            <p>
              Focused on the transport and logistics sector, our MBA degree covers
              supply chain management, transport policy, and logistics strategy.
            </p>
            <a
              target=""
              onClick={togglePopup}
              className="power-skill-button"
              //  onClick={(e) => {
              //   e.preventDefault();
              // }}
            >
              <span className="font-bold">Learn More</span>

              <svg
                className="pow-svg-icon"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="svg-circle"
                  cx="15.1176"
                  cy="14.7934"
                  r="14.6176"
                  fill="#93259D"
                  fill-opacity="0.2"
                />
                <mask
                  id="mask0_2007_165"
                  maskUnits="userSpaceOnUse"
                  x="3"
                  y="4"
                  width="23"
                  height="23"
                >
                  <rect
                    width="21.9265"
                    height="21.9265"
                    transform="matrix(-1 0 0 1 25.5586 4.35254)"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_2007_165)">
                  <path
                    className="svg-path"
                    d="M18.4094 16.2287L13.9327 20.7053C13.75 20.8881 13.6624 21.1012 13.6701 21.3449C13.6777 21.5885 13.7728 21.8017 13.9556 21.9844C14.1383 22.1519 14.3515 22.2394 14.5951 22.247C14.8387 22.2547 15.0519 22.1671 15.2346 21.9844L21.2644 15.9546C21.3557 15.8632 21.4205 15.7643 21.4585 15.6577C21.4966 15.5511 21.5156 15.4369 21.5156 15.3151C21.5156 15.1933 21.4966 15.0791 21.4585 14.9725C21.4205 14.8659 21.3557 14.7669 21.2644 14.6756L15.2346 8.64577C15.0671 8.47828 14.8577 8.39453 14.6065 8.39453C14.3553 8.39453 14.1383 8.47828 13.9556 8.64577C13.7728 8.82849 13.6815 9.04547 13.6815 9.29671C13.6815 9.54796 13.7728 9.76494 13.9556 9.94766L18.4094 14.4015H8.19986C7.94101 14.4015 7.72403 14.489 7.54892 14.6641C7.37381 14.8392 7.28626 15.0562 7.28626 15.3151C7.28626 15.5739 7.37381 15.7909 7.54892 15.966C7.72403 16.1411 7.94101 16.2287 8.19986 16.2287H18.4094Z"
                    fill="#55007D"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>

        {/* <div className="power-skill-card">
          <svg
            className="power-skill-card-icon"
            width="85"
            height="86"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30.712" cy="30.712" r="30.712" fill="#FF66CC" />
            <path
              d="M31.1161 16.638C37.0875 16.638 41.0684 21.9091 41.0684 29.7973C41.0684 37.6854 37.0875 42.9565 31.0792 42.9565C26.3242 42.9565 22.9699 40.4868 21.7903 36.1373H26.0293C26.6928 38.0172 28.499 39.0493 31.0792 39.0493C34.1386 39.0493 36.3134 36.3584 36.5346 32.3038C35.3182 34.2942 32.8116 35.6212 30.2314 35.6212C24.776 35.5844 21.1637 31.7877 21.1637 26.1481C21.1637 20.4347 25.1446 16.638 31.1161 16.638ZM30.858 31.7509C33.9543 31.7509 36.0185 29.5024 36.0185 26.1112C36.0185 22.7569 33.9543 20.5084 30.8949 20.5084C27.7249 20.5084 25.587 22.7569 25.587 26.1481C25.587 29.5024 27.688 31.7509 30.858 31.7509Z"
              fill="white"
            />
          </svg>


          <img className="power-skill-card-img" src={prof1} alt="" />
          <div className="power-skill-card-main">
            <div className="power-skill-card-content">
              <img src={fire_icon} alt="" />
              <h3>MBA in Educational Leadership</h3>
            </div>
            <p>
              This specialization is ideal for those aspiring to leadership
              roles within educational institutions. It covers strategic
              management, policy formulation, and the challenges unique to the
              education sector.
            </p>
            <a
              target=""
              onClick={togglePopup}
              className="power-skill-button"
            >
              <span className="font-bold">Learn More</span>
              <svg className="pow-svg-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle className="svg-circle" cx="15.1176" cy="14.7934" r="14.6176" fill="#93259D" fill-opacity="0.2"/>
<mask id="mask0_2007_165"  maskUnits="userSpaceOnUse" x="3" y="4" width="23" height="23">
<rect width="21.9265" height="21.9265" transform="matrix(-1 0 0 1 25.5586 4.35254)" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_2007_165)">
<path className="svg-path" d="M18.4094 16.2287L13.9327 20.7053C13.75 20.8881 13.6624 21.1012 13.6701 21.3449C13.6777 21.5885 13.7728 21.8017 13.9556 21.9844C14.1383 22.1519 14.3515 22.2394 14.5951 22.247C14.8387 22.2547 15.0519 22.1671 15.2346 21.9844L21.2644 15.9546C21.3557 15.8632 21.4205 15.7643 21.4585 15.6577C21.4966 15.5511 21.5156 15.4369 21.5156 15.3151C21.5156 15.1933 21.4966 15.0791 21.4585 14.9725C21.4205 14.8659 21.3557 14.7669 21.2644 14.6756L15.2346 8.64577C15.0671 8.47828 14.8577 8.39453 14.6065 8.39453C14.3553 8.39453 14.1383 8.47828 13.9556 8.64577C13.7728 8.82849 13.6815 9.04547 13.6815 9.29671C13.6815 9.54796 13.7728 9.76494 13.9556 9.94766L18.4094 14.4015H8.19986C7.94101 14.4015 7.72403 14.489 7.54892 14.6641C7.37381 14.8392 7.28626 15.0562 7.28626 15.3151C7.28626 15.5739 7.37381 15.7909 7.54892 15.966C7.72403 16.1411 7.94101 16.2287 8.19986 16.2287H18.4094Z" fill="#55007D"/>
</g>
</svg>
            </a>
          </div>
        </div>
        <div className="power-skill-card">
        <svg
            className="power-skill-card-icon"
            width="85"
            height="86"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30.712" cy="30.712" r="30.712" fill="#FF66CC" />
            <path
              d="M25.688 42.4404C25.688 35.9898 28.2314 29.1706 33.6868 21.0613H19.9746V17.1541H39.1421V20.5084C32.9864 28.9863 30.1113 36.0267 30.1113 42.4404H25.688Z"
              fill="white"
            />
          </svg>


          <img className="power-skill-card-img" src={prof2} alt="" />
          <div className="power-skill-card-main">
            <div className="power-skill-card-content">
              <img src={fire_icon} alt="" />
              <h3>MBA in Cultural Management</h3>
            </div>
            <p>
              Designed for professionals in the arts, heritage, and cultural
              sectors, this program focuses on managing cultural organizations,
              understanding policy and funding landscapes, and developing
              sustainable cultural initiatives.
            </p>
            <a
              target=""
              onClick={togglePopup}
              className="power-skill-button"
            >
              <span className="font-bold">Learn More</span>
              <svg className="pow-svg-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle className="svg-circle" cx="15.1176" cy="14.7934" r="14.6176" fill="#93259D" fill-opacity="0.2"/>
<mask id="mask0_2007_165"  maskUnits="userSpaceOnUse" x="3" y="4" width="23" height="23">
<rect width="21.9265" height="21.9265" transform="matrix(-1 0 0 1 25.5586 4.35254)" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_2007_165)">
<path className="svg-path" d="M18.4094 16.2287L13.9327 20.7053C13.75 20.8881 13.6624 21.1012 13.6701 21.3449C13.6777 21.5885 13.7728 21.8017 13.9556 21.9844C14.1383 22.1519 14.3515 22.2394 14.5951 22.247C14.8387 22.2547 15.0519 22.1671 15.2346 21.9844L21.2644 15.9546C21.3557 15.8632 21.4205 15.7643 21.4585 15.6577C21.4966 15.5511 21.5156 15.4369 21.5156 15.3151C21.5156 15.1933 21.4966 15.0791 21.4585 14.9725C21.4205 14.8659 21.3557 14.7669 21.2644 14.6756L15.2346 8.64577C15.0671 8.47828 14.8577 8.39453 14.6065 8.39453C14.3553 8.39453 14.1383 8.47828 13.9556 8.64577C13.7728 8.82849 13.6815 9.04547 13.6815 9.29671C13.6815 9.54796 13.7728 9.76494 13.9556 9.94766L18.4094 14.4015H8.19986C7.94101 14.4015 7.72403 14.489 7.54892 14.6641C7.37381 14.8392 7.28626 15.0562 7.28626 15.3151C7.28626 15.5739 7.37381 15.7909 7.54892 15.966C7.72403 16.1411 7.94101 16.2287 8.19986 16.2287H18.4094Z" fill="#55007D"/>
</g>
</svg>
            </a>
          </div>
        </div>

        <div className="power-skill-card">
          <svg
            className="power-skill-card-icon"
            width="85"
            height="86"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30.712" cy="30.712" r="30.712" fill="#FF66CC" />
            <path
              d="M29.5584 42.9565C23.6976 42.9565 19.7903 39.9339 19.7903 35.3632C19.7903 32.8198 21.6334 30.2027 24.361 28.8757C22.2231 27.6962 20.8224 25.4846 20.8224 23.3098C20.8224 19.292 24.3242 16.638 29.5584 16.638C34.7926 16.638 38.2943 19.292 38.2943 23.3098C38.2943 25.4846 36.8936 27.6962 34.7557 28.8757C37.4834 30.2027 39.3264 32.8198 39.3264 35.3632C39.3264 39.9339 35.4192 42.9565 29.5584 42.9565ZM29.5584 26.9221C32.1386 26.9221 33.8711 25.632 33.8711 23.7153C33.8711 21.7985 32.1386 20.5453 29.5584 20.5453C26.9781 20.5453 25.2457 21.7985 25.2457 23.7153C25.2457 25.632 26.9781 26.9221 29.5584 26.9221ZM29.5584 39.0493C32.7653 39.0493 34.9032 37.4274 34.9032 34.9577C34.9032 32.4881 32.7653 30.8294 29.5584 30.8294C26.3515 30.8294 24.2136 32.4881 24.2136 34.9577C24.2136 37.4274 26.3515 39.0493 29.5584 39.0493Z"
              fill="white"
            />
          </svg>

          <img className="power-skill-card-img" src={prof8} alt="" />
          <div className="power-skill-card-main">
            <div className="power-skill-card-content">
              <img src={fire_icon} alt="" />
              <h3>MBA in Sport Management</h3>
            </div>
            <p>
              Ideal for those pursuing careers in the sports industry, this
              specialization focuses on sports marketing, event management, and
              the business aspects of sports.
            </p>
            <a
              target=""
              onClick={togglePopup}
              className="power-skill-button"
              //  onClick={(e) => {
              //   e.preventDefault();
              // }}
            >
              <span className="font-bold">Learn More</span>
              <svg className="pow-svg-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle className="svg-circle" cx="15.1176" cy="14.7934" r="14.6176" fill="#93259D" fill-opacity="0.2"/>
<mask id="mask0_2007_165"  maskUnits="userSpaceOnUse" x="3" y="4" width="23" height="23">
<rect width="21.9265" height="21.9265" transform="matrix(-1 0 0 1 25.5586 4.35254)" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_2007_165)">
<path className="svg-path" d="M18.4094 16.2287L13.9327 20.7053C13.75 20.8881 13.6624 21.1012 13.6701 21.3449C13.6777 21.5885 13.7728 21.8017 13.9556 21.9844C14.1383 22.1519 14.3515 22.2394 14.5951 22.247C14.8387 22.2547 15.0519 22.1671 15.2346 21.9844L21.2644 15.9546C21.3557 15.8632 21.4205 15.7643 21.4585 15.6577C21.4966 15.5511 21.5156 15.4369 21.5156 15.3151C21.5156 15.1933 21.4966 15.0791 21.4585 14.9725C21.4205 14.8659 21.3557 14.7669 21.2644 14.6756L15.2346 8.64577C15.0671 8.47828 14.8577 8.39453 14.6065 8.39453C14.3553 8.39453 14.1383 8.47828 13.9556 8.64577C13.7728 8.82849 13.6815 9.04547 13.6815 9.29671C13.6815 9.54796 13.7728 9.76494 13.9556 9.94766L18.4094 14.4015H8.19986C7.94101 14.4015 7.72403 14.489 7.54892 14.6641C7.37381 14.8392 7.28626 15.0562 7.28626 15.3151C7.28626 15.5739 7.37381 15.7909 7.54892 15.966C7.72403 16.1411 7.94101 16.2287 8.19986 16.2287H18.4094Z" fill="#55007D"/>
</g>
</svg>
            </a>
          </div>
        </div> */}

        <img className="power-skill-star" src={star_lg} alt="" />
      </div>
      <ButtonDark
        duration={2500}
        containerStyle={{ justifyContent: "center" }}
      />
      <Claim_description color="rgba(53, 42, 82, 0.79)" />
    </div>
  );
}

export default power_skills;
