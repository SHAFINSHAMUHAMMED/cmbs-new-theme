import React from 'react'
import './collaboration.css'
import Marquee from "react-fast-marquee";

import loreal from "../../assets/icon1-loreal.webp";
import mashreeq from "../../assets/icon2-mashreeq.webp";
import rakbank from "../../assets/icon3-rakbank.webp";
import almarai from "../../assets/icon4-almarai.webp";
import emiratesNBD from "../../assets/icon5-emirates-nbd.webp";
import standard_chartered from "../../assets/icon6-standard-chartered.webp";
import emirates from "../../assets/icon7-emirates.webp";
import unilever from "../../assets/icon8-unilever.webp";
import nestle from "../../assets/icon9-nestle.webp";

function collaboration_carousel() {
  return (
    <div class="collab-main">
        <h2 class=" main-head-h2 collab-h1 text-center">
        After the Cap and Gown: Discover Where <span className='text-[#8E24ED]'>Our Alumni Thrive</span>
        </h2>
        <div className=" acredits-marquee-1">
          <Marquee speed={200} pauseOnClick="true">
            <div class="collab-cards">
              <div class="collab-card">
                <img src={loreal} alt="" />
              </div>
              <div class="collab-card">
                <img src={mashreeq} alt="" />
              </div>
              <div class="collab-card">
                <img src={rakbank} alt="" />
              </div>
              <div class="collab-card">
                <img src={almarai} alt="" />
              </div>
              <div class="collab-card">
                <img src={emiratesNBD} alt="" />
              </div>

              <div class="collab-card">
                <img src={standard_chartered} alt="" />
              </div>
              <div class="collab-card">
                <img src={emirates} alt="" />
              </div>
              <div class="collab-card">
                <img src={unilever} alt="" />
              </div>
              <div class="collab-card">
                <img src={nestle} alt="" />
              </div>
            </div>
          </Marquee>
        </div>

        {/* //only for mobile screens */}
        <div className=" acredits-marquee-2  pb-5 pt-5">
          <Marquee pauseOnClick="true">
            <div class="collab-cards">
              <div class="collab-card">
                <img className="collab-card-img" src={loreal} alt="" />
              </div>
              <div class="collab-card">
                <img className="collab-card-img" src={mashreeq} alt="" />
              </div>
              <div class="collab-card">
                <img className="collab-card-img" src={rakbank} alt="" />
              </div>
              <div class="collab-card">
                <img className="collab-card-img" src={emiratesNBD} alt="" />
              </div>
              <div class="collab-card">
                <img className="collab-card-img" src={almarai} alt="" />
              </div>
              {/* <div class="collab-card">
                <img className="collab-card-img" src={standard_chartered} alt="" />
              </div>
              <div class="collab-card">
                <img className="collab-card-img" src={emirates} alt="" />
              </div> */}
            </div>
          </Marquee>
          <Marquee direction="right" pauseOnClick="true">
            <div class="collab-cards">
            <div class="collab-card">
                <img className="collab-card-img" src={almarai} alt="" />
              </div>
              <div class="collab-card">
                <img className="collab-card-img" src={unilever} alt="" />
              </div>
              <div class="collab-card">
                <img className="collab-card-img" src={nestle} alt="" />
              </div>
              <div class="collab-card">
                <img className="collab-card-img" src={emirates} alt="" />
              </div>
              <div class="collab-card">
                <img className="collab-card-img" src={standard_chartered} alt="" />
              </div>
              {/* <div class="collab-card">
                <img className="collab-card-img" src={emiratesNBD} alt="" />
              </div>
              <div class="collab-card">
                <img className="collab-card-img" src={rakbank} alt="" />
              </div> */}
            </div>
          </Marquee>
        </div>
      </div>
  )
}

export default collaboration_carousel
