import postsData from "../data/posts.json";
import PostCard from "../cards/PostCard";
import { NavLink } from "react-router";
import { IoIosArrowBack } from "react-icons/io";

const Header = () => {
  return (
    <section className="mt-20 px-4 pb-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-right">
          <div className="pt-10">
            <div className="relative inline-flex items-center justify-center ps-4 mb-5">
              <div className="absolute inset-0 border  border-[#552d0e] rounded-full bg-[#25160B]" />

              <div className="relative px-8 py-3 text-orange-500  text-lg font-medium">
                مميز
              </div>

              <div className="absolute top-6 right-0 flex gap-2 px-3">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75 " />

                  <span className="relative inline-flex w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                </span>

                <span className="w-2 h-2 rounded-full bg-orange-500" />
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse items-start md:flex-row-reverse md:items-center md:justify-between ">
            <NavLink to="/blog" className="group mt-3 md:m-0 flex items-center justify-between gap-2 rounded-2xl bg-orange-500 px-4 py-3  transition-all duration-300 ease-out hover:-translate-y-1 active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
              <span>عرض الكل </span>
              <IoIosArrowBack className="transition-transform duration-300 ease-out group-hover:-translate-x-1" />
            </NavLink>

            <div>
              <h2 className="text-3xl font-bold sm:text-6xl pb-3">
                مقالات مختارة
              </h2>
              <p className="mt-3 text-gray-400">محتوى منتقى لبدء رحلة تعلمك</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {postsData.posts
            .filter((post) => post.featured)
            .map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
