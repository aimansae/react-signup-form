import { FormData } from "./Form"

type Props = {
    formInput: FormData | null
}

const SuccessMesage = ({formInput}:Props) => {
  return (
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
  )
}

export default SuccessMesage
