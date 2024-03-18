import { BiSolidUserDetail } from 'react-icons/bi';
import { FormProps } from '../MyForm/MyForm';

type SuccessMessageProps = {
  formData: FormProps | null;
};

const SuccessMessage = ({ formData }: SuccessMessageProps) => {
  return (
    <div data-testid="success-message" className="rounded-md p-4">
      <h1 className="text-2xl font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        Welcome to Focus!
      </h1>
      <h2 className="mr-2 py-2 text-sm text-gray-dark">Account successfully created</h2>
      <div className="flex flex-col py-2 text-left">
        <div className="flex items-center text-gray-dark">
          <BiSolidUserDetail className="mr-1 text-2xl" />
          <h3 className="py-2 text-base text-gray-dark">Your Details:</h3>
        </div>
        <div>
          <p className="my-1 text-left text-sm">
            Username:{' '}
            <span className="font-bold text-custom-purple" data-testid="display-username">
              {formData?.username}
            </span>
          </p>
          <p className="my-1 text-left text-sm">
            Email:{' '}
            <span className="font-bold text-custom-purple" data-testid="display-email">
              {formData?.email}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
