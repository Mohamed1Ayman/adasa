import { NavLink } from "react-router";
import logo from "../../assets/imgi_1_logo-GdqARQRt.png";

const RightNav = () => {
  return (
    <div
      className="
        flex
        items-center
        justify-center
        gap-1
        sm:gap-2
      "
    >
      <div className="flex items-center justify-center">
        <NavLink to="/">
          <img
            className="
              h-9
              w-9
              cursor-pointer
              object-contain
              transition-transform
              duration-300
              hover:scale-105
              sm:h-15
              sm:w-15
            "
            src={logo}
            alt="عدسة"
          />
        </NavLink>
      </div>

      <div>
        <h2
          className="
            text-right
            text-lg
            text-white
            sm:text-2xl
          "
        >
          عدسة
        </h2>

        <p
          className="
            whitespace-nowrap
            text-right
            text-[10px]
            text-[#FE5C00]
            sm:text-[13px]
            hidden
            sm:block
          "
        >
          عالم التصوير الفوتوغرافي
        </p>
      </div>
    </div>
  );
};

export default RightNav;
