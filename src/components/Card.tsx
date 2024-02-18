import Form from "./Form"
import HeroImage from "./HeroImage"

const Card = () => {
  return (
    <div className="flex h-screen w-full p-2 font-sans ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]">
      <HeroImage/>
      <Form/>
      </div>
    </div>
  )
}

export default Card
