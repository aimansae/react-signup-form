import { FormProps } from './Form';
 type SuccessMessageProps = {
  formData: FormProps | null;
};

const SuccessMesage = ({ formData }: SuccessMessageProps) => {
  return (
    <div data-testid='success-message' className=" mb-4 rounded-md px-4 py-3">
      <h2 className="mb-2 text-lg font-bold text-[#56d856] ">Account successfully Created!</h2>
      <h3 className="mb-2 font-bold text-gray-600">Your Details:</h3>
      <div className="flex flex-col py-4 text-left">
        <p className="my-4  mb-1 rounded-md border p-2 outline-none">
          Name: <span className="text-[#7433FF]">{formData?.username}</span>
        </p>
        <p className="my-4  mb-1 rounded-md border  p-2 outline-none">
          Email: <span className="text-[#7433FF]">{formData?.email}</span>
        </p>
      </div>
    </div>
  );
};

export default SuccessMesage;
