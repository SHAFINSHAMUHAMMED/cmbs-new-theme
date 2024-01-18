import React, { useState, useEffect, Suspense } from 'react';
import { debounce } from 'lodash';
import { ClipLoader } from 'react-spinners';
import { PopupProvider, usePopup } from './components/Hoocks/PopupContext';
import './App.css';

// Lazy loading components
const Header = React.lazy(() => import('./components/Header/header'));
const Hero = React.lazy(() => import('./components/Hero/hero'));
const WhyCmbs = React.lazy(() => import('./components/why-cmbs/cmbs'))
const TheoryIntegration = React.lazy(() => import('./components/Therory_integration/theory_integration'))
const Carousel = React.lazy(() => import('./components/Carousel/ResponsiveCarousel'));
const OurMba = React.lazy(() => import('./components/Our_mba_program/our_mba'))
const Powerskills = React.lazy(() => import('./components/Power_skills/power_skills'));
const Accredition = React.lazy(() => import('./components/Acreditions/acreditions'))
const WorldOfPossibilities = React.lazy(() => import('./components/World_of_possibilities/world_of_possibilities'));
const CollaborationCarousel = React.lazy(() => import('./components/Collaboration_carousel/collaboration_carousel'));
const ReviewSection = React.lazy(() => import('./components/Reviews/review_section'));
const SuccessfulGraduates = React.lazy(() => import('./components/Successful_graduates/successful_graduates'));
const StepsToUnlockCareer = React.lazy(() => import('./components/Steps_to_unlock_career/steps_to_unlock_career'));
const StudentSupport = React.lazy(() => import('./components/Student_support_guarantee/student_support'));
const IcfCertification = React.lazy(() => import('./components/Icf_certification/icf_certification'));
const Footer = React.lazy(() => import('./components/Footer/footer'));
const Popup = React.lazy(() => import('./components/Popup_page/popup'));
const WhatsappStickyLogo = React.lazy(() => import('./components/WhatsappStickyLogo/StickyWhatsAppButton'))


function App() {

  const { isPopupOpen, togglePopup } = usePopup();
  const [exitIntentTriggered, setExitIntentTriggered] = useState(false);

  useEffect(() => {
    const handleMouseMove = debounce((e) => {
      if (e.clientY <= 10 && !isPopupOpen && !exitIntentTriggered) {
        setExitIntentTriggered(true);
        togglePopup();
      }
    }, 100);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      handleMouseMove.cancel();
    };
  }, [togglePopup, isPopupOpen, exitIntentTriggered]);

  const handleClosePopup = () => {
    togglePopup();
    setExitIntentTriggered(false);
  };

  return (
    <PopupProvider>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <ClipLoader color={"#123abc"} size={50} />
          </div>
        }
      >
    <div className="body">
    <Header/>
    <Hero/>
    <CollaborationCarousel/>
    <WhyCmbs/>
    <WhatsappStickyLogo/>
    <TheoryIntegration/>
    <Carousel/>
    <OurMba/>
    <Powerskills/>
    <Accredition/>
    <WorldOfPossibilities/>
    <ReviewSection/>
    <SuccessfulGraduates/>
    {/* <StepsToUnlockCareer/> */}
    <StudentSupport/>
    <IcfCertification/>
    <Footer/>
    {isPopupOpen && <Popup closePopup={handleClosePopup} />}
        </div>
      </Suspense>
    </PopupProvider>
  )
}

export default App
