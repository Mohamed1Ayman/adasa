import { useState } from "react";
import { NavLink } from "react-router";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer
      className="border-t border-white/10 bg-black px-4 py-12 text-right text-gray-300 sm:px-6 lg:px-8"
      dir="rtl"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="hover:scale-110 transition-all duration-300 cursor-pointer shadow shadow-orange-500 p-5 rounded bg-amber-600 w-5 h-5 font-bold text-2xl flex items-center justify-center">
                <span>ع</span>
              </span>
              <h2 className="text-2xl font-bold text-white">عدسة</h2>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-7 text-gray-400">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="flex justify-around items-center w-50  mt-6">
              <FaLinkedin className="border rounded text-4xl border-gray-500/10 bg-[#161616] p-1 cursor-pointer hover:bg-orange-500 hover:scale-110 transition-all duration-300" />
              <FaXTwitter className="border rounded text-4xl border-gray-500/10 bg-[#161616] p-1 cursor-pointer hover:bg-orange-500 hover:scale-110 transition-all duration-300" />
              <FaYoutube className="border rounded text-4xl border-gray-500/10 bg-[#161616] p-1 cursor-pointer hover:bg-orange-500 hover:scale-110 transition-all duration-300" />
              <IoLogoGithub className="border rounded text-4xl border-gray-500/10 bg-[#161616] p-1 cursor-pointer hover:bg-orange-500 hover:scale-110 transition-all duration-300" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">استكشف</h3>
            <nav className="mt-4 flex flex-col items-start gap-3 text-sm text-gray-400">
              <NavLink className="transition hover:text-orange-400" to="/">
                الرئيسية
              </NavLink>
              <NavLink className="transition hover:text-orange-400" to="/blog">
                المدونة
              </NavLink>
              <NavLink className="transition hover:text-orange-400" to="/about">
                من نحن
              </NavLink>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">التصنيفات</h3>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-gray-400">
              {["إضاءة", "بورتريه", "مناظر طبيعية", "تقنيات"].map(
                (category) => (
                  <NavLink
                    key={category}
                    to={`/blog?category=${encodeURIComponent(category)}`}
                    className="group inline-flex items-center gap-2 transition hover:text-orange-400"
                  >
                    <span>{category}</span>
                    <IoIosArrowBack className="transition-transform duration-300 group-hover:-translate-x-1" />
                  </NavLink>
                ),
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">ابقَ على اطلاع</h3>
            <p className="mt-4 text-sm leading-7 text-gray-400">
              اشترك ليصلك أحدث المقالات والنصائح مباشرة إلى بريدك الإلكتروني.
            </p>
            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
              <label htmlFor="footer-email" className="sr-only">
                البريد الإلكتروني
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="البريد الإلكتروني"
                className="w-full rounded-xl border border-white/10 bg-[#202020] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-orange-500"
              />
              <button
                type="submit"
                className="rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                اشترك الآن
              </button>
            </form>
            {subscribed && (
              <p className="mt-3 text-sm text-orange-400" role="status">
                تم الاشتراك بنجاح.
              </p>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span>© 2026 عدسة. صنع بكل</span>
            <FaHeart className="inline text-orange-500" /> جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-5">
            <a className="transition hover:text-orange-400" href="#privacy">
              سياسة الخصوصية
            </a>
            <a className="transition hover:text-orange-400" href="#terms">
              شروط الاستخدام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
