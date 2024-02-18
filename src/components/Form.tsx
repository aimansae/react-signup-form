import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import SocialMediaLogin from "./SocialMediaLogin";
import SuccessMesage from "./SuccessMesage";

const schema = z.object({
  name: z.string().min(3, { message: "Minimum 3 char required" }),
  email: z.string().email({ message: "Insert a valid email" }),
  password: z.string().min(8, { message: "Minimum 8 char required" }),
});

export type FormData = z.infer<typeof schema>;


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
       <SuccessMesage formInput={formInput}/>
      ) : (
        <div className="w-full mx-auto ">
          <div className="text-right flex justify-end items-center p-2 text-xs">
            <p className="text-gray-400  my-2 flex items-center mx-2">
              Alreay have an account?
            </p>
            <button
              type="submit"
              className={
                "rounded-full p-2 flex items-center text-gray-400 text-xs border border-gray-200 hover:border-gray-400 shadow-sm"
              }
            >
              SIGN IN
            </button>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-[400px] w-full mx-auto bg-white p-2  sm:p-4  text-left"
          >
            <h2 className="font-bold l md:text-xl">Welcome to Focus!</h2>
            <h3 className="text-gray-400  text-sm md:text-xs">
              Register your account
            </h3>
            <div className="flex flex-col py-2">
              <label className="my-2 text-sm ">Name</label>
              <input
                {...register("name")}
                type="text"
                name="name"
                placeholder="Jhon"
                className="placeholder-sm text-xs text-[#7433FF] border p-2 focus:border-[#7433FF] rounded-md outline-none"
              ></input>
              {errors && (
                <p className="text-[#e46b6b] my-2 text-xs italic">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="my-2 text-sm text-left">Email</label>
              <input
                {...register("email")}
                type="text"
                name="email"
                placeholder="focus001@gmail.com"
                className="placeholder-sm text-xs text-[#7433FF] border p-2 focus:border-[#7433FF] rounded-md outline-none"
              />
              {errors && (
                <p className="text-[#e46b6b] my-2 text-xs italic">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col ">
              <label className="my-2 text-sm ">Password</label>
              <input
                {...register("password")}
                type="text"
                name="password"
                placeholder="8+ characters"
                className="placeholder-sm text-xs text-[#7433FF] border p-2 focus:border-[#7433FF] rounded-md outline-none"
              ></input>
              {errors && (
                <p className="text-[#e46b6b] my-2 text-xs italic">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className={
                "my-4 py-2 px-12 rounded-full text-white text-sm  bg-[#7433FF] hover:bg-purple-800 shadow-sm shadow-gray-600"
              }
            >
              Login
            </button>
            <SocialMediaLogin/>

          
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
