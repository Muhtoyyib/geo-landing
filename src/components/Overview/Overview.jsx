import { useState, useEffect } from "react";
import Button from "../Button/Button";

import { GooglePlayLogo, AppStoreLogo } from "@phosphor-icons/react";

import OverviewImg from '../../assets/image1 (1).jpeg';

function Overview() {

   // eslint-disable-next-line react-hooks/exhaustive-deps
   const words = ['Pay', 'Explore', 'Connect'];
   const [currentWordIndex, setCurrentWordIndex] = useState(0);
   const [displayedLetters, setDisplayedLetters] = useState('');
   const [isTyping, setIsTyping] = useState(true);
 
   useEffect(() => {
     const interval = setInterval(() => {
       const currentWord = words[currentWordIndex];
       const nextLetter = currentWord[displayedLetters.length];
       setDisplayedLetters((prevLetters) => prevLetters + nextLetter);
 
       if (nextLetter === undefined) {
         setIsTyping(false);
         setTimeout(() => {
           setDisplayedLetters('');
           setIsTyping(true);
           setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
         }, 1000); // Pause before typing the next word
       }
     }, 150); // Typing speed in milliseconds
 
     return () => clearInterval(interval);
   }, [currentWordIndex, displayedLetters, words]);

  return (
    <div className="overview">
      <div className="overview--info">
        <h1 className="overview--info__heading-primary">
          <span className="overview--info__heading-primary--main">Discover new paths to</span>
          <span className="overview--info__heading-primary--sub">{isTyping ? displayedLetters : words[currentWordIndex]} </span>
        </h1>

        <p className="overview--info__heading-secondary">
        Geotopup offers a seamless and secure experience for all.
        With Geotopup, you can access your data anywhere, anytime, and at any price,
        without the hassle of a credit card. Sign up today and experience the convenience!
        </p>

        <div className="overview--buttons">
          <Button type='b' className="btn btn--primary">
            <GooglePlayLogo size={32} color="#37b24d"/>
            Get on Playstore
          </Button>

          <Button type='b' className="btn btn--primary">
            <AppStoreLogo size={32} color="#37b24d"/>
            Get on App store
          </Button>
        </div>
      </div>

      <div className="overview--img">
        <img src={OverviewImg} alt="Laborich App Homepage" />
      </div>
    </div>
  );
}

export default Overview;
