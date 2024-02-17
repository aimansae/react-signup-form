import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const schema = z.object({
  name: z.string().min(3, { message: "Minimum 3 char required" }),
  email: z.string().email({ message: "Insert a valid email" }),
  password: z.string().min(8, { message: "Minimum 8 char required" }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formInput, setFormInput] = useState<FormData | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    setFormInput(data as FormData);
    setShowMessage(true);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {showMessage ? (
        <div className=" px-4 py-3 rounded-md mb-4">
          <h2 className="mb-2 text-[#56d856] text-lg font-bold ">
            Account successfully Created!
          </h2>
          <h3 className="text-gray-600 mb-2 font-bold">Your Details:</h3>
          <div className="text-left flex flex-col py-4">
            <p className="mb-1  border p-2 my-4 rounded-md outline-none">
              Name: <span className="text-[#7433FF]">{formInput?.name}</span>
            </p>
            <p className="mb-1  border p-2 my-4  rounded-md outline-none">
              Email: <span className="text-[#7433FF]">{formInput?.email}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[400px] w-full mx-auto bg-white p-2  sm:p-4  text-left"
          >
            <h2 className="font-bold text-3xl ">Welcome to Focus!</h2>
            <h3 className="text-gray-400 text-sm">Register your account</h3>
            <div className="flex flex-col py-2">
              <label className="my-2">Name</label>
              <input
                {...register("name")}
                type="text"
                name="name"
                placeholder="Jhon"
                className="placeholder-sm text-sm text-[#7433FF] border p-2 focus:border-[#7433FF] rounded-md outline-none"
              ></input>
              {errors && (
                <p className="text-[#e46b6b] my-2 text-sm italic">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="my-2 text-left">Email</label>
              <input
                {...register("email")}
                type="text"
                name="email"
                placeholder="focus001@gmail.com"
                className="placeholder-sm text-sm text-[#7433FF] border p-2 focus:border-[#7433FF] rounded-md outline-none"
              />
              {errors && (
                <p className="text-[#e46b6b] my-2 text-sm italic">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col ">
              <label className="my-2">Password</label>
              <input
                {...register("password")}
                type="text"
                name="password"
                placeholder="8+ characters"
                className="placeholder-sm text-sm text-[#7433FF] border p-2 focus:border-[#7433FF] rounded-md outline-none"
              ></input>
              {errors && (
                <p className="text-[#e46b6b] my-2 text-sm italic">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className={
                "my-4 py-2 px-12 rounded-full text-white bg-[#7433FF] hover:bg-purple-800 shadow-sm shadow-gray-600"
              }
            >
              Login
            </button>

            <div className="flex justify-start">
              <div className="flex items-center">
                <p className="text-gray-400 text-sm">Create an account with</p>
              </div>
              <div className="flex items-center text-xl">
                <a href="https://www.facebook.com" target="_blank">
                  <FaFacebookF className="m-2 text-[#316FF6] border border-gray-300 rounded-full text-4xl p-2 hover:transform hover:scale-105" />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  <FaLinkedinIn className="m-2 text-[#0077B5] border border-gray-300 rounded-full p-2 text-4xl hover:transform hover:scale-105" />
                </a>
                <a href="https://www.google.com" target="_blank">
                  <FaGoogle className="m-2 text-[#0077B5] border border-gray-300 rounded-full  text-4xl p-2 hover:transform hover:scale-105" />
                </a>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
