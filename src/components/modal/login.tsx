import React from 'react';
import { Modal, ModalBody, Carousel } from 'flowbite-react';
import googleIcon from '../../assets/google.png';
import closeIcon from '../../assets/close.svg';
import guitarIcon from '../../assets/guita.png';
import loveIcon from '../../assets/love.png';
import avatarIcon from '../../assets/avatar.png';
import './login.css';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase/firebase';

interface LoginProps {
  toggleModal: () => void;
  status: boolean;
}

interface CarouselSlide {
  icon: string;
  alt: string;
  text: string;
}

const Login: React.FC<LoginProps> = ({ toggleModal, status }) => {
  const slides: CarouselSlide[] = [
    {
      icon: guitarIcon,
      alt: 'Guitar',
      text: 'Help us become one of the safest places to buy and sell',
    },
    {
      icon: loveIcon,
      alt: 'Love',
      text: 'Close deals from the comfort of your home',
    },
    {
      icon: avatarIcon,
      alt: 'Avatar',
      text: 'Keep all your favorites in one place',
    },
  ];

  const handleClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User logged in:', result.user);
      toggleModal();
    } catch (error: any) {
      console.error('Login error:', error.message);
      alert(`Failed to log in: ${error.message}`);
    }
  };

  return (
    <Modal
      theme={{
        content: {
          base: 'relative w-full p-4 md:h-auto',
          inner: 'relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700',
        },
      }}
      show={status}
      onClose={toggleModal}
      className="bg-black/50 rounded-none"
      position="center"
      size="md"
      popup
    >
      <div className="p-6 pl-4 pr-4 bg-white relative">
        <img
          onClick={toggleModal}
          src={closeIcon}
          alt="close"
          className="w-5 absolute right-4 top-4 cursor-pointer z-10"
        />
        <Carousel
          slide={false}
          theme={{
            indicators: {
              active: { on: 'bg-teal-400' },
              base: 'h-2 w-2 rounded-full',
              wrapper: 'absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-3',
            },
            scrollContainer: {
              base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth',
              snap: 'snap-x',
            },
            control: {
              base: 'hidden',
              icon: 'h-8 text-white dark:text-black',
            },
          }}
          className="w-full h-52 pb-5 rounded-none"
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex flex-col items-center justify-center h-full">
              <img className="h-20 pb-4" src={slide.icon} alt={slide.alt} />
              <p
                style={{ color: '#002f34' }}
                className="w-64 sm:w-80 text-center font-semibold text-base leading-5"
              >
                {slide.text}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
      <ModalBody className="bg-white h-80 p-0 rounded-none">
        <div className="p-6 pt-0 flex flex-col items-center justify-between h-full">
          <div className="w-full">
            <div
              onClick={handleClick}
              className="flex items-center justify-center rounded-md border-2 border-solid border-gray-300 p-3 relative h-12 cursor-pointer"
            >
              <img className="h-5 absolute left-4" src={googleIcon} alt="google" />
              <p className="text-base font-medium text-gray-700">Continue with Google</p>
            </div>
            <div className="pt-5 flex flex-col items-center justify-center">
              <p className="font-semibold text-sm text-gray-500">OR</p>
              <p className="font-bold text-lg pt-4 underline underline-offset-4 text-gray-800 cursor-pointer">
                Login with Email
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-xs text-gray-500">All your personal details are safe with us.</p>
            <p className="text-xs pt-3 text-center text-gray-500 max-w-xs">
              If you continue, you are accepting
              <a href="#" className="text-teal-600 hover:underline">
                {' '}
                OLX Terms and Conditions and Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default Login;