import { FormEvent, useState } from 'react';
import { SocialMediaLinks } from '../SocialMediaLinks';
import { ChangeEvent } from 'react';
import { SuccessMessage } from '../SuccessMessage';
import { Input } from '../Input';

export type FormProps = {
  username: string;
  email: string;
  password: string;
};

const MyForm = () => {
  const [formValues, setFormValues] = useState<FormProps>({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState<Partial<FormProps>>({});
  const [showMessage, setShowMessage] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormProps | null>(null);

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
      setSubmittedData(formValues);
      setFormValues({ username: '', email: '', password: '' });
    } else {
      setErrors(displayErrors);
    }
  };

  return (
    <div
      data-testid="form-component"
      className="flex h-auto flex-col items-center justify-center md:p-2">
      {showMessage ? (
        <SuccessMessage formData={submittedData} />
      ) : (
        <div className="mx-auto w-full ">
          <div className="flex items-center justify-end p-2 text-right text-xs">
            <p className="mr-1 py-2 text-sm text-gray-dark">Already have an account?</p>
            <button
              type="submit"
              className="flex items-center rounded-full border border-gray-light p-2 px-4 text-center text-xs font-bold  text-gray-darker shadow-sm hover:border-gray-dark hover:text-gray-dark">
              SIGN IN
            </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mx-auto w-full max-w-[400px] bg-white p-2 sm:p-2 sm:text-left">
            <h1 className="text-2xl font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
              Welcome to Focus!
            </h1>
            <h2 className="mr-2 py-2 text-sm text-gray-dark">Register your account</h2>
            <div className="flex flex-col py-2">
              <Input
                label="Username"
                onChange={handleChange}
                type="text"
                id="username"
                name="username"
                placeholder="John"
                value={formValues.username}
                dataTestId="input-error-username"
                error={errors.username || null}></Input>
              <Input
                label="Email"
                onChange={handleChange}
                value={formValues.email}
                type="text"
                name="email"
                id="email"
                placeholder="focus001@gmail.com"
                dataTestId="input-error-email"
                error={errors.email || null}
              />
              <Input
                label="Password"
                onChange={handleChange}
                value={formValues.password}
                type="password"
                name="password"
                id="password"
                placeholder="8+ characters"
                dataTestId="input-error-password"
                error={errors.password || null}
              />
            </div>
            <button
              type="submit"
              className="my-4 rounded-full bg-custom-purple px-12 py-2 text-sm  text-white shadow-sm shadow-gray-light hover:bg-dark-purple  sm:mx-auto sm:inline-block">
              Login
            </button>
            <SocialMediaLinks />
          </form>
        </div>
      )}
    </div>
  );
};

export default MyForm;
