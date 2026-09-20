import { NavLink } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const HeroContent2 = () => {
  return (
    <div className="flex justify-center gap-4 pt-5 flex-col sm:flex-row px-2.5 sm:px-0 ">
      <NavLink
        to="/blog"
        className="
      group
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-full
        bg-[#ED5E0E]
        
        sm:px-4
        py-4
        sm:text-lg
        text-white
        transition-all
        duration-300
        hover:bg-orange-600
        hover:shadow-orange-500/30
        hover:-translate-y-0.5
      "
      >
        <span>استكشف المقالات</span>

        <FaArrowLeftLong
          className="
      transition-transform
      duration-300
      group-hover:-translate-x-1
    "
        />
      </NavLink>

      <NavLink
        to="/about"
        className="
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-full
       border
       border-gray-400/30
        px-5
        py-4
        text-lg
        text-white
        transition-all
        duration-300
        hover:bg-[#45240D]
       hover:border-orange-500
       group
      "
      >
        <AiOutlineExclamationCircle
          className="group-hover:text-orange-500  transition-all
        duration-300"
        />
        <span
          className="group-hover:text-orange-500  transition-all
        duration-300"
        >
          اعرف المزيد
        </span>
      </NavLink>
    </div>
  );
};

export default HeroContent2;
