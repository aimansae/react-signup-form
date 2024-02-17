import Image from "../assets/hero-image.png";

const HeroImage = () => {
  return (
    <div className="w-full h-[550px] hidden md:block">
      <img
        className="w-full h-full object-cover"
        alt="hero image"
        src={Image}
      />
    </div>
  );
};

export default HeroImage;
