import { BiSolidUserDetail } from 'react-icons/bi';

import { FormProps } from './Form';
type SuccessMessageProps = {
  formData: FormProps | null;
};

const SuccessMesage = ({ formData }: SuccessMessageProps) => {
  return (
    <div data-testid="success-message" className="main-container">
      <h1 className="heading1">Welcome to Focus!</h1>
      <h2 className="heading2">Account successfully created</h2>

      <div className="flex flex-col py-2 text-left">
        <div className="heading-icon">
          <BiSolidUserDetail className="detail-icon" />
          <h3 className="heading3">Your Details:</h3>
        </div>
        <div className="deatil-container">
          <p className="label-style my-1">
            Username:{' '}
            <span className="span" data-testid="display-username">
              {formData?.username}
            </span>
          </p>
          <p className=" label-style  my-1">
            Email:{' '}
            <span className="span" data-testid="display-email">
              {formData?.email}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessMesage;
