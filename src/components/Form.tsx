import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
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
            {errors && <p className="text-[#e46b6b]">{errors.name?.message}</p>}
          </div>
          <div className="flex flex-col py-4">
            <label className="my-2 text-left">Email</label>
            <input
              {...register("email")}
              type="text"
              name="email"
              placeholder="focus001@gmail.com"
              className="placeholder-sm text-sm text-[#7433FF] border p-2 focus:border-[#7433FF] rounded-md outline-none"
            />
            {errors && (
              <p className="text-[#e46b6b] my-2">{errors.password?.message}</p>
            )}
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
            {errors && (
              <p className="text-[#e46b6b]">{errors.password?.message}</p>
            )}
          </div>
          <button
            type="submit"
            className={
              "my-4 py-2 px-12 rounded-full text-white bg-[#7433FF] hover:bg-purple-800"
            }
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
      )}
    </div>
  );
};

export default Form;
