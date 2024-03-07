import focusImage from '../assets/hero-image.png';

const HeroImage = () => {
  return (
    <div data-testid="image-component" className="hidden h-[550px] w-full md:block">
      <img className="h-full w-full object-cover" alt="hero image" src={focusImage} />
    </div>
  );
};

export default HeroImage;
