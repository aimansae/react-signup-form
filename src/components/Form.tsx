import { FormEvent, useState } from 'react';
import SocialMediaLogin from './SocialMediaLogin';
import { ChangeEvent } from 'react';
import SuccessMesage from './SuccessMesage';

export type FormProps = {
  username: string;
  email: string;
  password: string;
};

const Form = () => {
  const [formValues, setFormValues] = useState<FormProps>({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState<Partial<FormProps>>({});
  const [showMessage, setShowMessage] = useState(false);
  const [submittedData, setSumbittedData] = useState<FormProps | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const inputValidation = (formValues: FormProps) => {
    const displayErrors: Partial<FormProps> = {};
    if (!formValues.username.trim()) {
      displayErrors.username = 'Username is required';
    } else if (formValues.username.length < 3) {
      displayErrors.username = 'Minimum 3 character required';
    } else if (!/^[a-zA-Z]+$/.test(formValues.username)) {
      displayErrors.username = 'Only Letters are allowed';
    }

    if (!formValues.email.trim()) {
      displayErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      displayErrors.email = 'Enter a valid email';
    }

    if (!formValues.password.trim()) {
      displayErrors.password = 'Password is required';
    } else if (formValues.password.length < 8) {
      displayErrors.password = 'Minimum 8 character required';
    }

    return { displayErrors, formIsValid: Object.keys(displayErrors).length === 0 };
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formValues);
    const { formIsValid, displayErrors } = inputValidation(formValues);

    if (formIsValid) {
      setShowMessage(true);
      setSumbittedData(formValues)
      setFormValues({ username: '', email: '', password: '' });
    } else {
      setErrors(displayErrors);
      console.log('form is correct', formValues);
    }
  };

  return (
    <div data-testid="form-component" className="flex flex-col items-center justify-center">
      {showMessage ? (
        <SuccessMesage formData={submittedData} />
      ) : (
        <div className="mx-auto w-full ">
          <div className="flex items-center justify-end p-2 text-right text-xs">
            <p className="mx-2  my-2 flex items-center text-gray-400">Alreay have an account?</p>
            <button
              type="submit"
              className={
                'flex items-center rounded-full border border-gray-200 p-2 text-xs text-gray-400 shadow-sm hover:border-gray-400'
              }>
              SIGN IN
            </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mx-auto w-full max-w-[400px] bg-white p-2  text-left  sm:p-4">
            <h2 className="l font-bold md:text-xl">Welcome to Focus!</h2>
            <h3 className="text-sm  text-gray-400 md:text-xs">Register your account</h3>
            <div className="flex flex-col py-2">
              <label className="my-2 text-sm ">Name</label>
              <input
                onChange={handleChange}
                type="text"
                name="username"
                placeholder="Jhon"
                value={formValues.username}
                className="placeholder-sm rounded-md border p-2 text-xs text-[#7433FF] outline-none focus:border-[#7433FF]"></input>

              {errors && <p className="my-2 text-xs italic text-[#e46b6b]">{errors.username}</p>}
            </div>
            <div className="flex flex-col">
              <label className="my-2 text-left text-sm">Email</label>
              <input
                onChange={handleChange}
                value={formValues.email}
                type="text"
                name="email"
                placeholder="focus001@gmail.com"
                className="placeholder-sm rounded-md border p-2 text-xs text-[#7433FF] outline-none focus:border-[#7433FF]"
              />
              {errors && <p className="my-2 text-xs italic text-[#e46b6b]">{errors.email}</p>}
            </div>
            <div className="flex flex-col ">
              <label className="my-2 text-sm ">Password</label>
              <input
                onChange={handleChange}
                value={formValues.password}
                type="text"
                name="password"
                placeholder="8+ characters"
                className="placeholder-sm rounded-md border p-2 text-xs text-[#7433FF] outline-none focus:border-[#7433FF]"></input>
              {errors && <p className="my-2 text-xs italic text-[#e46b6b]">{errors.password}</p>}
            </div>
            <button
              type="submit"
              className={
                'my-4 rounded-full bg-[#7433FF] px-12 py-2 text-sm  text-white shadow-sm shadow-gray-600 hover:bg-purple-800'
              }>
              Login
            </button>
            <SocialMediaLogin />
            <p>
              {formValues.email}
              {formValues.email}
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
