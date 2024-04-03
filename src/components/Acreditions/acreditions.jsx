import React from "react";
import './acredition.css'
import ButtonDark from "../Buttons/buttonDark";
import Marquee from "react-fast-marquee";
import Claim_description from "../Description/claim_description";

import malta from "../../assets/svg/malta.svg"
import wes from "../../assets/svg/wes.svg"
import leadership from "../../assets/svg/leadership.svg"
import dcu from "../../assets/svg/dcu.svg"
import tqUk from "../../assets/svg/tqUK.svg"
import acca from "../../assets/svg/acca.svg"
import othm from "../../assets/svg/othm.svg"


function acreditions() {
  return (
    <div id="acredition" class="accredit-main">
      <div className="accredit-overlay"></div>
      <div class="accredit-content w-screen z-10">
        <h1 class="accredit-h1 text-center">
          Globally <span className="wavy-underline-green">Recognised</span> &{" "}
          <span className="wavy-underline-green">Accredited</span> By
        </h1>
        <p className="main-p acredit-p">CMBS is an accredited center of several world-renowned educational institutions and professional bodies, including DCU, ILM, City & Guilds, CIM, ACCA, TQUK, and OTHM. Our accreditations stand as a testament to the quality and rigor of our academic programs.</p>
        <div className=" acredits-marquee-1">
          <Marquee speed={200}>
            <div class="accredit-cards">
              <div class="accredit-card">
                <img src={malta} alt="" />
              </div>
              <div class="accredit-card">
                <img src={wes} alt="" />
              </div>
              <div class="accredit-card">
                <img src={leadership} alt="" />
              </div>
              <div class="accredit-card">
                <img src={dcu} alt="" />
              </div>
              <div class="accredit-card">
                <img src={tqUk} alt="" />
              </div>

              <div class="accredit-card">
                <img src={acca} alt="" />
              </div>
              <div class="accredit-card">
                <img src={othm} alt="" />
              </div>
              <div class="accredit-card">
                <img src={malta} alt="" />
              </div>
              <div class="accredit-card">
                <img src={wes} alt="" />
              </div>
              <div class="accredit-card">
                <img src={leadership} alt="" />
              </div>
              <div class="accredit-card">
                <img src={dcu} alt="" />
              </div>
              <div class="accredit-card">
                <img src={tqUk} alt="" />
              </div>

              <div class="accredit-card">
                <img src={acca} alt="" />
              </div>
              <div class="accredit-card">
                <img src={othm} alt="" />
              </div>
            </div>
          </Marquee>
        </div>

        {/* //only for mobile screens */}
        <div className=" acredits-marquee-2 block  pb-5 pt-5">
          <Marquee>
            <div class="accredit-cards">
              <div class="accredit-card">
                <img className="accredit-card-img" src={malta} alt="" />
              </div>
              <div class="accredit-card">
                <img className="accredit-card-img" src={wes} alt="" />
              </div>
              <div class="accredit-card">
                <img className="accredit-card-img" src={leadership} alt="" />
              </div>
              <div class="accredit-card">
                <img className="accredit-card-img" src={dcu} alt="" />
              </div>
              <div class="accredit-card">
                <img className="accredit-card-img" src={tqUk} alt="" />
              </div>
              <div class="accredit-card">
                <img className="accredit-card-img" src={acca} alt="" />
              </div>
            </div>
          </Marquee>
          <Marquee direction="right">
            <div class="accredit-cards">
              <div class="accredit-card">
                <img className="accredit-card-img" src={dcu} alt="" />
              </div>
              <div class="accredit-card">
                <img className="accredit-card-img" src={othm} alt="" />
              </div>
              <div class="accredit-card">
                <img className="accredit-card-img" src={malta} alt="" />
              </div>
              <div class="accredit-card">
                <img className="accredit-card-img" src={tqUk} alt="" />
              </div>
              <div class="accredit-card">
                <img className="accredit-card-img" src={leadership} alt="" />
              </div>
              <div class="accredit-card">
                <img className="accredit-card-img" src={wes} alt="" />
              </div>
            </div>
          </Marquee>
        </div>
        <ButtonDark
          duration={2500}
          containerStyle={{ justifyContent: "center" }}
        />
        <Claim_description color="rgba(53, 42, 82, 0.79)" />
      </div>
      {/* </div> */}
    </div>
  );
}

export default acreditions;
