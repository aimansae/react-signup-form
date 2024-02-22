import focusImage from "../assets/hero-image.png";

const HeroImage = () => {
  return (
    <div
      data-testid="image-component"
      className="w-full h-[550px] hidden md:block"
    >
      <img
        className="w-full h-full object-cover"
        alt="hero image"
        src={focusImage}
      />
    </div>
  );
};

export default HeroImage;
