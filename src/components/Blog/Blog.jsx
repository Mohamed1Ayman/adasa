import { FaBook } from "react-icons/fa";
import BlogCards from "./BlogCards";

const Blog = () => {
  return (
    <div className="mx-auto max-w-7xl text-center my:5 sm:my-10">
      <div className="relative inline-flex items-center gap-2 rounded-full border border-amber-950/50 bg-[#2C1A0B] px-5 py-2 text-sm">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
        </span>
        <FaBook className="text-orange-500" />
        <span className="text-orange-500">مدونتنا</span>
      </div>
      <div className="my-5">
        <h2 className="text-white text-4xl sm:text-6xl font-bold">
          استكشف <span className="text-[#FBAF21]">مقالاتنا</span>
        </h2>
        <p className="text-gray-400/65 text-2xl my-5">
          اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
        </p>
      </div>
      <BlogCards />
    </div>
  );
};

export default Blog;
