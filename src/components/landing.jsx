
import Overview from './Overview/Overview'
import Service from './Service/service';
import Video from './Video/video';
import FAQ from './FAQ/Faq';
import LandFoot from './Footer/Footer'


import Button from './Button/Button'

// import Test from '../assets/cardifywallets.jpg';
import Data from "../assets/data.svg";
import Utility from "../assets/utility.svg";
import Exam from "../assets/Exam.svg";


// import ReferalImg from './assets/geo-web.jpg';

function Landing() {
  const items = [
    { title: 'Question 1', content: 'Content for Question 1 goes here.' },
    { title: 'Question 2', content: 'Content for Question 2 goes here.' },
    { title: 'Question 3', content: 'Content for section 3 goes here.' },
    { title: 'Question 4', content: 'Content for section 4 goes here.' },
    { title: 'Question 5', content: 'Content for section 5 goes here.' },
  ];

  return (
    <>

          <Overview />

          <h2 className="services">
            Effortless Solutions at Your Fingertips
          </h2>

          <Service img={{src: Data,  alt: 'Buy Data'}} heading="Stay Connected Anytime, Anywhere"
          description="Connect seamlessly with your loved ones and business contacts. Whether it's browsing, streaming, or staying in touch, we've got you covered."
          layout="left" bullet={['Access affordable data bundles', 'Buy airtime for mobile phones.', 'Card Printing']}>
        </Service>

        <Service img={{src: Utility,  alt: 'Pay Utility Bills'}} heading="Simplifying Utility Bill Payments"
          description="Simplify your life with convenient online utility bill payments."
          layout="right" 
          bullet={['Pay your utility bills online with a few clicks, saving time and hassle', 
          'Enjoy secure and reliable payment processing for your utility bills.',
          'Electricity bill',
          'Cable Tv [GOTv, DSTV]'
        ]}>
        </Service>

        <Service img={{src: Exam,  alt: 'Buy Exam Codes'}} heading="Access Your Exam Codes Digitally"
          description="Access exam codes digitally for seamless exam preparation and registration."
          layout="left" bullet={['Seamlessly manage and use exam codes', 'Fast and secure payment']}>
        </Service>

        <Video />

        <div className='earn'>
          <p> Earn 100k Monthly on GeoTopUp Wallet </p>
          <Button type='b' className="btn btn--secondary earn--btn">
            Refer your friends now
          </Button>
        </div>

          

          <FAQ items={items}/>

          <LandFoot />
    </>
  )
}

export default Landing;

