import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import ModwanaNav from "../modwanaNav/ModwanaNav";
import StartRead from "../startRead/StartRead";
import RightNav from "../rightNav/RightNav";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        z-50
        w-full
        transition-all
        duration-500
        ${
          scrolled
            ? "bg-black/90 border-b border-gray-700 backdrop-blur-lg shadow-lg"
            : "bg-[#161616]"
        }
      `}
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          py-3
          sm:px-6
          lg:px-8
        "
      >
        {/* Desktop */}

        <div
          className="
            hidden
            md:flex
            flex-row-reverse
            items-center
            justify-between
            gap-4
          "
        >
          <StartRead />

          <ModwanaNav />

          <RightNav />
        </div>

        {/* Mobile */}

        <div
          className="
            flex
            flex-row-reverse
            md:hidden
            items-center
            justify-between
            gap-3
          "
        >
          {/* Hamburger / X */}

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-lg
              text-gray-300
              transition-all
              duration-300
              hover:bg-white/5
              hover:text-orange-500
              active:scale-90
            "
            aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>

          {/* Logo + عدسة */}

          <RightNav />
        </div>

        {/* Mobile Menu */}

        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            ease-in-out
            ${menuOpen ? "max-h-125 opacity-100 " : "max-h-0 opacity-0"}
          `}
        >
          <div
            className="
              mt-4
              border
              border-gray-800
              pt-4
              px-4
              rounded-2xl
            "
          >
            <ModwanaNav mobile onLinkClick={() => setMenuOpen(false)} />

            <div
              className="
                mt-2
                border-gray-800
                pt-2
              "
            >
              <StartRead mobile />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
