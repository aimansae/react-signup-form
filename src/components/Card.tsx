import Form from './Form';
import HeroImage from './HeroImage';

const Card = () => {
  return (
    <div className="flex h-screen w-full overflow-y-hidden p-2 font-sans ">
      <div className="shadow-gray-600 m-auto grid h-[550px] grid-cols-1 gap-6 bg-white shadow-lg w-[500px] sm:w-[900px] md:grid-cols-2">
        <HeroImage />
        <Form />
      </div>
    </div>
  );
};

export default Card;
