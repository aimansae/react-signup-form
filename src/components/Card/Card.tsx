import { HeroImage } from '../HeroImage';
import { MyForm } from '../MyForm';
const Card = () => {
  return (
    <div className="flex h-screen w-full overflow-y-hidden p-2 font-sans ">
      <div className="shadow-gray-600 m-auto grid w-[500px] grid-cols-1 gap-6 bg-white shadow-lg sm:w-[900px] md:grid-cols-2">
        <HeroImage />
        <MyForm />
      </div>
    </div>
  );
};

export default Card;
