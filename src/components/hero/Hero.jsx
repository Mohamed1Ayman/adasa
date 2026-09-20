


import Header from "../header/Header";
import HeroBoxCatgory from "../heroBoxCatgory/HeroBoxCard";
import HeroContent from "../heroContent/HeroContent";
import HeroContent2 from "../heroContent2/HeroContent2";
import WelcomeBadge from "../welcome/WelcomeBadge";

const Hero = () => {
  return (
    <section>
    <div className="max-w-7xl mx-auto min-h-screen text-center ">
      <WelcomeBadge />
      <HeroContent/>
      <HeroContent2/>
      <HeroBoxCatgory/>
      
    </div>
    <section className="bg-linear-to-l from-orange-500/10 to-black backdrop-blur-md">
      <Header/>
    </section>
    
    </section>
  );
};

export default Hero;
