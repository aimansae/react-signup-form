
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa6'

const SocialMediaLogin = () => {
  return (
   
        <div className="flex justify-start items-center">
              <div className="flex ">
                <p className="text-gray-400 text-sm sm:text-xs mr-1">
                  Create an account with
                </p>
              </div>
              <div className="flex items-center text-xl">
                <a href="https://www.facebook.com" target="_blank">
                  <FaFacebookF className="sm:m-2 text-[#316FF6] border border-gray-300 rounded-full text-4xl p-2 hover:transform hover:scale-105" />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  <FaLinkedinIn className="sm:m-2 text-[#0077B5] border border-gray-300 rounded-full p-2 text-4xl hover:transform hover:scale-105" />
                </a>
                <a href="https://www.google.com" target="_blank">
                  <FaGoogle className="sm:m-2 text-[black] border border-gray-300 rounded-full  p-2 text-4xl sm-text:3xl hover:transform hover:scale-105" />
                </a>
              </div>
         
    </div>
  )
}

export default SocialMediaLogin
