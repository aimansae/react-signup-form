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
      displayErrors.username = 'Minimum 3 characters required';
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
    const { formIsValid, displayErrors } = inputValidation(formValues);

    if (formIsValid) {
      setShowMessage(true);
      setSumbittedData(formValues);
      setFormValues({ username: '', email: '', password: '' });
    } else {
      setErrors(displayErrors);
    }
  };

  return (
    <div data-testid="form-component" className="main-div">
      {showMessage ? (
        <SuccessMesage formData={submittedData} />
      ) : (
        <div className="mx-auto w-full ">
          <div className="form-container">
            <h2 className="heading-sigin">Already have an account?</h2>
            <button
              type="submit"
              className={
              'signin-button'
              }>
              SIGN IN
            </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className="form">
            <h1 className="heading1">Welcome to Focus!</h1>
            <h2 className="heading2">Register your account</h2>
            <div className="flex flex-col py-2">
              <label htmlFor="username" className='label-style'>
                Username
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="username"
                name="username"
                placeholder="Jhon"
                value={formValues.username}
                className="input-style"></input>

              {errors && (
                <p data-testid="username-error" className="error-style">
                  {errors.username}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className='label-style'>
                Email
              </label>
              <input
                onChange={handleChange}
                value={formValues.email}
                type="text"
                name="email"
                id="email"
                placeholder="focus001@gmail.com"
                className="input-style"
              />
              {errors && (
                <p data-testid="email-error" className="error-style">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className='label-style'>
                Password
              </label>
              <input
                onChange={handleChange}
                value={formValues.password}
                type="password"
                name="password"
                id="password"
                placeholder="8+ characters"
                className="input-style"
              />
              {errors && (
                <p data-testid="password-error" className="error-style">
                  {errors.password}
                </p>
              )}
            </div>
            <button
              type="submit"
              className='login-button'>
              Login
            </button>
            <SocialMediaLogin />
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
