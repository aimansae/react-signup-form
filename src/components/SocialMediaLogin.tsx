import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';

const SocialMediaLogin = () => {
  return (
    <div className="social-media-container">
      <div className="flex ">
        <p className="heading2 ">Create an account with</p>
      </div>
      <div className="social-media-icon-container">
        <a href="https://www.facebook.com" target="_blank">
          <FaFacebookF className="socialmedia-icon" />
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <FaLinkedinIn className="socialmedia-icon" />
        </a>
        <a href="https://www.google.com" target="_blank">
          <FaGoogle className="socialmedia-icon" />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLogin;
