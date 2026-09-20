import { IoIosArrowRoundBack } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const PostCard = ({ post }) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#151515] text-right transition group duration-300 group hover:border-orange-400/50 sm:min-h-125 sm:flex-row-reverse hover:cursor-pointer">
      <div className="flex  flex-1 flex-col justify-between overflow-hidden p-6 text-right sm:p-10">
        <div>
          <div className="flex items-center justify-between gap-4">
            <span className="inline-block rounded-full bg-orange-400/10 px-3 py-1 text-sm text-orange-400">
              {post.category}
            </span>
            <span className="text-sm text-gray-500">{post.readTime}</span>
          </div>

          <h3 className="mt-8 text-2xl font-bold leading-relaxed group-hover:text-orange-500 transition-all duration-300  text-white sm:text-3xl">
            {post.title}
          </h3>

          <p className="mt-5 text-[15px] line-clamp-3 leading-8 text-gray-400">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-8 flex flex-row-reverse items-center justify-between border-white/10 pt-5">
          <span className="text-[15px] font-semibold text-orange-500 flex justify-center items-center gap-2 ">
            <span className="group-hover:translate-x-1 transition-all duration-300">
              اقرأ المقال
            </span>
            <IoIosArrowRoundBack className="text-[20px]" />
          </span>
          <div className="flex items-center justify-center gap-2">
            <div>
              <p className="text-sm font-semibold text-white">
                {post.author.name}
              </p>
              <p className="text-xs text-gray-500">{post.date}</p>
            </div>
            <div className="relative">
              <div className="absolute bg-orange-400 h-4 w-4 rounded-full -bottom-1 left-0 border border-black"></div>
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-12 w-12 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-64 shrink-0 overflow-hidden sm:h-auto sm:w-1/2">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <span className="flex justify-center items-center gap-2 absolute top-2 right-3 bg-amber-500 px-3 py-1 rounded-full">
          <span>مميز</span> <FaStar />
        </span>
      </div>
    </article>
  );
};

export default PostCard;
