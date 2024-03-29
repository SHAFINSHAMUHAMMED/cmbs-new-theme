import React from "react";
import './footer.css'

import footer_logo from "../../assets/svg/footer-logo.svg";
function footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-main">
      <img src={footer_logo} alt="footer-logo" />
      <p className="text-[#5C507E]">
        © {currentYear} Learners University College l All Rights Reserved <br />
        <a
          href="https://www.learnersuae.com/privacy-policy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          | Privacy Policy |
        </a>{" "}
      </p>
      <h6 className="text-[11px] md:text-[14px] text-[#1d1338] ">
        Landing Page & Digital Marketing By{" "}
        <a
          href="https://webqmedia.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1A0060] font-medium"
        >
          WebQ Media
        </a>
      </h6>
    </div>
  );
}

export default footer;
