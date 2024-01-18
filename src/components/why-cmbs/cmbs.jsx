import React, { useEffect, useRef } from "react";
import "./cmbs.css";
import Lottie from "lottie-react";
import cmba1 from "../../assets/CMBA Lottie1.json";
import cmbaMob from "../../assets/CMBS Mobile Lottie.json";
import { usePopup } from "../Hoocks/PopupContext";

function swiss_school() {
  const { isPopupOpen } = usePopup();

  useEffect(() => {
    // Function for adjust lottie boxshadow issue
    const adjustFilterSize = (elementId) => {
      const filterElement = document.getElementById(elementId);
      if (filterElement) {
        filterElement.setAttribute('x', '-50%');
        filterElement.setAttribute('y', '-50%');
        filterElement.setAttribute('width', '200%');
        filterElement.setAttribute('height', '200%');
      }
    };
    adjustFilterSize('__lottie_element_881');
    adjustFilterSize('__lottie_element_1293');
  }, []);
  
  return (
    <div id="why-cmbs" className={`why-cmbs ${isPopupOpen ? "blur-effect" : ""}`}>
      <h2 className=" cmbs-h2 main-head-h2">
      <span className="wavy-underline-green">Why Choose </span>Central Mediterranean Business School (<span className="text-[#259D4A]">CMBS</span>)?
      </h2>
      <div className="cmbs-p-main">
        <p className="p-margine main-p">
        Welcome to Central Mediterranean Business School (CMBS), where your aspirations transform into reality. At Central Mediterranean Business School, we prioritize a comprehensive approach to business education. Since our inception in 2013, evolving from the Academy of Business Leaders, our focus has been on equipping students with both theoretical knowledge and practical skills. Our courses are meticulously designed to meet the needs of today's dynamic business environment, ensuring that our graduates are well-prepared to lead and innovate in their respective fields.
        </p>
      </div>
      <Lottie animationData={cmba1} loop={true}  className="cmba-lottie1" />
      <Lottie animationData={cmbaMob} loop={true} className="cmba-lottie-mob" />

    </div>
  );
}

export default swiss_school;
