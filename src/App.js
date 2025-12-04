import './App.css';
import bgImg from '../src/images/bg-stars.svg';
import mounImg from '../src/images/pattern-hills.svg';
import facebookIcon from '../src/images/icon-facebook.svg';
import instagramIcon from '../src/images/icon-instagram.svg';
import pintrustIcon from '../src/images/icon-pinterest.svg';
import { useEffect, useState } from 'react';


function App() {

  let initialTime = 10 * 24 * 60 * 60 * 1000;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 100) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1000;
      })
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const day = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hour = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const min = Math.floor((timeLeft / (1000 * 60)) % 60);
  const sec = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="bg-[#231D2B]  relative h-screen  w-screen">
      <img alt='background-image' className='bg-cover absolute left-0 top-0' src={bgImg} />
      <img alt='mountain-image' src={mounImg} className='absolute left-0 bottom-0' />
      <h1 className='font-medium text-center pt-24 font-sans tracking-widest text-3xl text-white uppercase'>we're launching soon</h1>

      <div className='flex flex-row gap-12 absolute left-[18rem] top-[11rem]'>
        <div className='bg-gradient-to-b  rounded-lg z-20 from-[#2C2C44] mt-10  to-[#34364F] border h-[10rem] w-[10rem]'>
          <h2 className='text-center text-[#FC5D85] pt-7 tracking-wider text-8xl'>{day}</h2>
        </div>
        <p className='absolute left-[2.50rem] font-medium text-lg tracking-[10px]  text-[#8C8BAB] top-[14rem]'>DAYS</p>
        <div className='bg-gradient-to-b  rounded-lg z-20 from-[#2C2C44] mt-10  to-[#34364F] border h-[10rem] w-[10rem]'>
          <h2 className='text-center text-[#FC5D85] pt-7 tracking-wider text-8xl'>{hour}</h2>

        </div>
        <p className='absolute left-[14.90rem] font-medium text-lg tracking-[10px]  text-[#8C8BAB] top-[14rem]'>HOURS</p>

        <div className='bg-gradient-to-b  rounded-lg z-20 from-[#2C2C44] mt-10  to-[#34364F] border h-[10rem] w-[10rem]'>
          <h2 className='text-center text-[#FC5D85] pt-7 tracking-wider text-8xl'>{min}</h2>

        </div>
        <p className='absolute left-[26.80rem] font-medium text-lg tracking-[10px]  text-[#8C8BAB] top-[14rem]'>MINUTES</p>

        <div className='bg-gradient-to-b  rounded-lg z-20 from-[#2C2C44] mt-10  to-[#34364F] border h-[10rem] w-[10rem]'>
          <h2 className='text-center text-[#FC5D85] pt-7 tracking-wider text-8xl'>{sec}</h2>

        </div>
        <p className='absolute left-[39.60rem] font-medium text-lg tracking-[10px]  text-[#8C8BAB] top-[14rem]'>SECONDS</p>

      </div>
      <ul className='flex absolute bottom-[6rem] left-[45%] flex-row gap-8'>
        <img src={facebookIcon} className='h-6 w-6   cursor-pointer' alt='facebook-logo' />
        <img src={pintrustIcon} className='h-6 w-6   cursor-pointer' alt='pintrust-logo' />
        <img src={instagramIcon} className='h-6 w-6  cursor-pointer' alt='instagram-logo' />
      </ul>
    </div>
  );
}

export default App;
