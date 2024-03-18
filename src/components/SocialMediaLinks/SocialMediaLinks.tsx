import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-col  items-center sm:flex-row">
      <div className="flex">
        <p className="mr-2 py-2 text-sm text-gray-dark">Create an account with</p>
      </div>
      <div className="mt-4 flex items-center sm:mt-0">
        <a href="https://www.facebook.com" target="_blank">
          <FaFacebookF className="m-1 rounded-full border border-gray-light p-2 text-4xl text-[#316FF6] hover:scale-105 hover:transform" />
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <FaLinkedinIn className="m-1 rounded-full border border-gray-light p-2 text-4xl text-[#316FF6] hover:scale-105 hover:transform" />
        </a>
        <a href="https://www.google.com" target="_blank">
          <FaGoogle className="m-1 rounded-full border border-gray-light p-2 text-4xl text-[#316FF6] hover:scale-105 hover:transform" />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
