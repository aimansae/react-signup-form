import { ChangeEvent } from 'react';
import { InputError } from '../InputError';

type InputProps = {
  type: 'email' | 'number' | 'text' | 'password' | 'email';
  id: string;
  name: string;
  placeholder: string;
  label: string;
  error: string | null;
  value: string;
  dataTestId: string;

  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  type,
  id,
  name,
  placeholder,
  label,
  value,
  error,
  dataTestId,
  onChange
}: InputProps) => {
  return (
    <div className="flex flex-col">
      <label className="my-2 text-left text-sm" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="rounded-md border border-gray-light p-2 text-xs text-custom-purple outline-none focus:border-custom-purple"
      />
      <InputError error={error} dataTestId={dataTestId} />
    </div>
  );
};

export default Input;
