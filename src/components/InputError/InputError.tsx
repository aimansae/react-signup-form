type ErrorProps = {
  error: string | null;
  dataTestId?: string;
};

const InputError = ({ error, dataTestId }: ErrorProps) => {
  return (
    <>
      {error && (
        <p data-testid={dataTestId} className="my-2 text-left text-xs italic text-custom-red">
          {error}
        </p>
      )}
    </>
  );
};

export default InputError;
