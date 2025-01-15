import { useState, useEffect } from "react";
import "../Icf_certification/icf.css";
import Claim_description from "../Description/claim_description";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import Lottie from "lottie-react";
import { ClipLoader } from "react-spinners";
import arrow from "../../assets/arrow.json";
import MultiStepProgressBar from "../Progress_bar/MultiStepProgressBar";
import axios from "axios";
import { parsePhoneNumberFromString } from "libphonenumber-js"; // Import libphonenumber-js
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";


const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showAnimation, setShowAnimation] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [otpStep, setOtpStep] = useState(false); // State to handle OTP input step
  const [otp, setOtp] = useState("");
  const [otpVerifiedPopup, setOtpVerifiedPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    jobRole: "",
    // location: "",
    email: "",
    whatsapp: "",
    countryCode: "AE"

  });

  const [formErrors, setFormErrors] = useState({});

  const validateWhatsAppNumber = (phone, countryCode) => {
    const isManuallyValid = phone.length > 8;

    if (!isManuallyValid) {
      return false;
    }
    try {
      const parsedNumber = parsePhoneNumberFromString(phone, countryCode);
      return parsedNumber ? parsedNumber.isValid() : false;
    } catch (error) {
      console.error("Phone validation error:", error);
      return false;
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const validateCurrentStep = () => {
    let errors = {};
    let isValid = true;

    switch (currentStep) {
      case 1:
        if (!formData.name.trim()) {
          errors.name = "Name is required";
          isValid = false;
        }
        break;
      case 2:
        if (!formData.specialization.trim()) {
          errors.specialization = "Specialization is required";
          isValid = false;
        }
        break;
      case 3:
        if (!formData.jobRole.trim()) {
          errors.jobRole = "Job role is required";
          isValid = false;
        }
        break;
      // case 4:
      //   if (!formData.location.trim()) {
      //     errors.location = "Location is required";
      //     isValid = false;
      //   }
      //   break;
      case 4:
        if (!formData.email.trim()) {
          errors.email = "Email is required";
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = "Email address is invalid";
          isValid = false;
        }
        break;
      case 5:
        if (!validateWhatsAppNumber(formData.whatsapp, formData.countryCode)) {
          errors.whatsapp = "Invalid WhatsApp number";
          isValid = false;
        }
        break;
      default:
        break;
    }

    setFormErrors(errors);
    return isValid;
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      if (currentStep < 5) {
        setCurrentStep(currentStep + 1);
        setShowAnimation(currentStep + 1 < 5);
      } else {
        sendOtp(); // Send OTP when final step is completed
      }
    }
  };

  const sendOtp = async () => {
    setIsLoading(true);
    try {
      const token = await executeRecaptcha("submit");
      if (!token) {
        alert("Please complete the reCAPTCHA.");
        setIsLoading(false);
        return;
      }
      const response = await axios.post(
        "https://googlerecaptchaserver.onrender.com/verify-recaptcha",
        { token }
      );

      if (response.data.success) {

        const ipAddress = await axios.get("https://api.ipify.org?format=json");
        const dataToSend = {
          ...formData,
          currentUrl: currentUrl,
          ipAddress: ipAddress.data.ip,
          otpVerified: false,
        };

        const webhookResponse = await axios.post(
          "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTZiMDYzNTA0MzA1MjZhNTUzNjUxMzUi_pc",
          // "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTZiMDYzNTA0MzA1MjZhNTUzNjUxMzUi_pc", //test link
          dataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (webhookResponse.status === 200) {
          const otpResponse = await axios.post("https://googlerecaptchaserver.onrender.com/send-otp", {
            phone: formData.whatsapp,
            name: formData.name,
            heading: "OTP Verification",
          });

          const otp = otpResponse.data.otp;
          // Store OTP in localStorage with expiry
          const expiryTime = Date.now() + 10 * 60 * 1000; // 10 minutes
          localStorage.setItem(
            "otp_data",
            JSON.stringify({ otp, expiry: expiryTime })
          );

          setOtpStep(true); // Show OTP input page
          setIsLoading(false);
        } else {
          console.error("Failed to send form data");
        }
      } else {
        alert("reCAPTCHA verification failed. Please try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setIsLoading(false);
    }
  };
  const specializationOptions = [
    "MBA in General",
    "MBA in Finance",
    "MBA in HR Management",
    "MBA in Health Management",
    "MBA in Construction Management ",
    "MBA in Transport Management",

    // Add optins
  ];

  if (!executeRecaptcha) {
    console.error("reCAPTCHA has not been initialized correctly");
    return;
  }

  const verifyOtp = (enteredOtp) => {
    const otpData = JSON.parse(localStorage.getItem("otp_data"));
    if (!otpData || Date.now() > otpData.expiry) {
      return false; // OTP expired
    }
    return otpData.otp == enteredOtp;
  };

  const handleOtpSubmit = async () => {
    if (verifyOtp(otp)) {
      setOtpVerifiedPopup(true); // Show the OTP Verified popup
  
      // Redirect after 2 seconds
      setTimeout(() => {
        window.location.href = "https://offer.learnersuae.com/confirmation/";
      }, 2000);
    } else {
      alert("Invalid OTP or OTP has expired. Please request a new one.");
    }
  };
  

  const handleSubmit = async (verified = false) => {
    setIsLoading(true);

    try {
      const ipAddress = await axios.get("https://api.ipify.org?format=json");
      const dataToSend = {
        ...formData,
        currentUrl: currentUrl,
        ipAddress: ipAddress.data.ip,
        otpVerified: verified,
      };

      const webhookResponse = await axios.post(
        "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZmMDYzMDA0MzQ1MjZkNTUzMzUxM2Ei_pc",
        // "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTZiMDYzNTA0MzA1MjZhNTUzNjUxMzUi_pc", //test link
        dataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (webhookResponse.status === 200) {
        window.location.href = "https://offer.learnersuae.com/confirmation/";
      } else {
        console.error("Failed to send form data");
      }
    } catch (error) {
      console.error("Error sending form data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderError = (fieldName) => {
    if (formErrors[fieldName]) {
      return <p className="form-error">{formErrors[fieldName]}</p>;
    }
    return null;
  };

  const renderForm = () => {
    if (otpStep) {
      return (
        <>
          <h2>Enter the OTP sent to your phone</h2>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
          />
          <button type="button" onClick={handleOtpSubmit}>
            {isLoading ? (
              <ClipLoader color={"#ffffff"} size={20} />
            ) : "Verify OTP"}
          </button>
        </>
      );
    }
    switch (currentStep) {
      case 1:
        return (
          <>
            <h2 className="form-question">
              Let’s take your career higher. But first, what's your name?
            </h2>
            <p>This will only take 10 seconds (or less!)</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Type Here..."
            />
            {renderError("name")}
          </>
        );
      case 2:
        return (
          <>
            <h2>
              Awesome, {formData.name}! Which specialization sparks your
              interest?
            </h2>
            <p>We want to make sure your journey is tailored just for you.</p>
            <div className="custom-select">
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
              >
                <option value="">Select Specialization</option>
                {specializationOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {renderError("specialization")}
          </>
        );
      case 3:
        return (
          <>
            <h2>What's your current job role?</h2>
            <p>It's great to know where you're starting from!</p>
            <input
              type="text"
              name="jobRole"
              value={formData.jobRole}
              onChange={handleChange}
              placeholder="Type Here..."
            />
            {renderError("jobRole")}
          </>
        );
      // case 4:
      //   return (
      //     <>
      //       <h2>
      //         We'd love to know your location. Where are you currently based?
      //       </h2>
      //       <input
      //         type="text"
      //         name="location"
      //         value={formData.location}
      //         onChange={handleChange}
      //         placeholder="Type Here..."
      //         onKeyUp={handleKeyPress}
      //       />
      //       {renderError("location")}
      //     </>
      //   );
      case 4:
        return (
          <>
            <h2>
              For seamless communication, may we have your preferred email,{" "}
              {formData.name}?
            </h2>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Type Here..."
            />
            {renderError("email")}
          </>
        );
      case 5:
        return (
          <>
            <h2>And Phone Number?</h2>
            <PhoneInput
              country={formData.countryCode.toLowerCase()}
              excludeCountries={"in,pk"}
              value={formData.whatsapp}
              placeholder={"Type Here..."}
              onChange={(phone, country) =>
                setFormData({ ...formData, whatsapp: phone, countryCode: country.countryCode.toUpperCase() })
              }
            />
            {renderError("whatsapp")}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="icf-form-main" id="contactForm">
      {/* progress steps */}
      <MultiStepProgressBar currentStep={currentStep} />
      <form className="icf-form" onSubmit={(e) => e.preventDefault()}>
        {renderForm()}
        {!otpStep && (
          <div className="button-wrapper">
            <button type="button" onClick={nextStep}>
              {currentStep < 5 && "CONTINUE"}
              {currentStep === 5 &&
                !isLoading &&
                "Claim Your Free Consultation Now"}
              {currentStep === 5 && isLoading && (
                <ClipLoader color={"#ffffff"} size={20} />
              )}
            </button>
          </div>
        )}
      </form>
      <div className="form-svg-bg">
        <svg
          className="icf-form-main-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="156"
          height="75"
          viewBox="0 0 76 156"
          fill="none"
        >
          <path
            d="M39.2891 1L39.2891 128"
            stroke="#1E1E1E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.9297 110.985L39.2003 129.256L57.4709 110.985"
            stroke="#1E1E1E"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            cx="37.7907"
            cy="118.209"
            r="36.7907"
            transform="rotate(-90 37.7907 118.209)"
            stroke="#DE66C0"
            stroke-width="2"
          />
        </svg>
      </div>
      <Claim_description color="rgba(76, 70, 91, 0.79)" />
      {otpVerifiedPopup && (
  <div className="otp-verified-overlay">
    <div className="otp-verified-popup">
      <div className="tick-animation">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="80"
          height="80"
        >
          <circle cx="25" cy="25" r="23" stroke="#1A0060" strokeWidth="3" fill="none" />
          <path
            d="M15 25L22 32L35 18"
            stroke="#1A0060"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>
      <h2>OTP Verified Successfully!</h2>
    </div>
  </div>
)}

    </div>
  );
};

export default MultiStepForm;
