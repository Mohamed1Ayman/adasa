import { NavLink } from "react-router";
import {  FaEnvelope } from "react-icons/fa6";

const HaveQuestions = () => {
  return (
    <div className="bg-linear-to-r/srgb from-[#F95301] to-[#F99B04] min-h-full text-center text-white py-10">
      <h3 className="text-4xl font-bold">لديك أسئلة؟ دعنا نتحدث!</h3>
      <p className="text-xl py-5">
        نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو
        تريد فقط إلقاء
        <br />
        التحية، لا تتردد في التواصل.
      </p>
      <div className="flex flex-col items-center justify-center gap-3 my-10 sm:flex-row">
         <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@adasah.com"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 font-semibold text-white transition-all duration-300  hover:-translate-y-0.5 sm:w-auto"
        >
          <FaEnvelope className="transition-transform duration-300 group-hover:scale-110" />
          <span>تواصل معنا</span>
        </a>
        <NavLink
          to="/blog"
          className="group inline-flex w-full items-center justify-center border gap-2 rounded-xl hover:bg-white px-5 py-3 font-semibold text-white transition-all duration-300 hover:text-black  hover:shadow-lg  hover:outline-0 outline-0  sm:w-auto"
        >
          <span>تصفح المقالات</span>
         
        </NavLink>

       
      </div>
    </div>
  );
};

export default HaveQuestions;
