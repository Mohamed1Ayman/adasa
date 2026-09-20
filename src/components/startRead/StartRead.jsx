import { NavLink } from "react-router";
import { IoIosSearch } from "react-icons/io";

const StartRead = ({ mobile = false }) => {
  if (mobile) {
    return (
      <NavLink
        to="/blog"
        className="
          block
          w-full
          rounded-xl
          px-4
          py-3
          text-center
          text-gray-300
          whitespace-nowrap
          transition-all
          duration-300
          hover:bg-orange-500/15
          hover:text-orange-400
          bg-orange-500
          mb-4
          
        "
      >
        ابدأ القراءة
      </NavLink>
    );
  }

  return (
    <div className="flex items-center">
      <NavLink
        to="/blog"
        className="
          whitespace-nowrap
          rounded-full
          bg-[#FF6900]
          px-3
          py-2
          text-sm
          text-white
          transition-all
          duration-300
          hover:bg-orange-600
          hover:-translate-y-0.5
          hover:shadow-lg
          hover:shadow-orange-500/20
          sm:px-4
          sm:py-2.5
          sm:text-base
        "
      >
        ابدأ القراءة
      </NavLink>

      <button
        type="button"
        aria-label="البحث"
        className="
          group
          ms-2
          rounded-lg
          p-1.5
          cursor-pointer
          transition-all
          duration-300
          hover:border
          hover:border-gray-600
          sm:ms-3
          sm:p-2
        "
      >
        <IoIosSearch
          className="
            text-xl
            text-gray-400
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:text-orange-500
            sm:text-2xl
          "
        />
      </button>
    </div>
  );
};

export default StartRead;
