import { FieldValues, useForm } from "react-hook-form";

const Form = () => {

  const { register, handleSubmit,  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w[400px] w-full mx-auto bg-white p-4 my-2 text-left"
      >
        <h2 className="font-bold text-3xl">Welcome to Focus!</h2>
        <h3 className="text-gray-400">Register your account</h3>
        <div className="flex flex-col py-4">
          <label className="my-2">Name</label>
          <input
            {...register("name")}
            type="text"
            name="name"
            placeholder="Jhon"
            className="placeholder-sm text-sm text-[#7433FF] border p-2 focus:border-[#7433FF] rounded-md outline-none"
          ></input>
        </div>
        <div className="flex flex-col py-4">
          <label className="my-2 text-left">Email</label>
          <input
            {...register("email")}
            type="text"
            name="email"
            placeholder="focus001@gmail.com"
            className="placeholder-sm text-sm text-[#7433FF] border p-2 focus:border-[#7433FF] rounded-md outline-none"
          ></input>
        </div>
        <div className="flex flex-col py-4">
          <label className="my-2">Password</label>
          <input
            {...register("password")}
            type="text"
            name="password"
            placeholder="8+ characters"
            className="placeholder-sm text-sm text-[#7433FF] border p-2 focus:border-[#7433FF] rounded-md outline-none"
          ></input>
        </div>
        <button
          type="submit"
          className="my-4 py-2 px-12 rounded-full text-white bg-[#7433FF] hover:bg-purple-800"
        >
          Login
        </button>

        <div className="flex">
          <div className="flex items-center">
            <p className="text-gray-400">Create an account with</p>
          </div>
          <div className="flex items-center">Icons</div>
        </div>
      </form>
    </div>
  );
};

export default Form;
