
import { NavLink } from "react-router";

const ModwanaNav = ({ mobile = false, onLinkClick }) => {
  const linkStyle = ({ isActive }) => {
    if (mobile) {
      return `
        block
        w-full
        rounded-xl
        px-4
        py-3
        text-right
        whitespace-nowrap
        transition-all
        duration-300
        ${
          isActive
            ? "bg-orange-500/15 text-orange-500 border bold border-orange-500/30"
            : "text-gray-300 hover:bg-white/5 hover:text-white"
        }
      `;
    }

    return `
      rounded-full
      px-4
      py-2.5
      whitespace-nowrap
      transition-all
      duration-300
      ${
        isActive
          ? "bg-orange-500 text-white"
          : "text-gray-300 hover:bg-white/5 hover:text-white"
      }
    `;
  };

  return (
    <div
      className={
        mobile
          ? "flex w-full flex-col gap-2"
          : `
              flex
              items-center
              justify-center
              gap-1
              rounded-full
              border
              border-gray-500
              bg-[#161616]
              p-1.5
            `
      }
    >
      <NavLink
        to="/"
        className={linkStyle}
        onClick={onLinkClick}
      >
        الرئيسية
      </NavLink>

      <NavLink
        to="/blog"
        className={linkStyle}
        onClick={onLinkClick}
      >
        المدونة
      </NavLink>

      <NavLink
        to="/about"
        className={linkStyle}
        onClick={onLinkClick}
      >
        من نحن
      </NavLink>
    </div>
  );
};

export default ModwanaNav;

