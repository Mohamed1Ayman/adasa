import { useMemo, useState } from "react";
import { FaList, FaRedo, FaSearch, FaThLarge } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CiFaceFrown } from "react-icons/ci";
import { NavLink, useSearchParams } from "react-router";
import postsData from "../data/posts.json";

const POSTS_PER_PAGE = 6;
const TOTAL_PAGES = 5;

const BlogCards = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(
    () => searchParams.get("category") || "الكل",
  );
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(
    () => ["الكل", ...new Set(postsData.posts.map((post) => post.category))],
    [],
  );

  const filteredPosts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return postsData.posts.filter((post) => {
      const matchesCategory = category === "الكل" || post.category === category;
      const matchesSearch =
        !normalizedSearch ||
        `${post.title} ${post.excerpt} ${post.category}`
          .toLowerCase()
          .includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const visiblePosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  const updateSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const updateCategory = (value) => {
    setCategory(value);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setSearch("");
    setCategory("الكل");
    setCurrentPage(1);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" dir="rtl">
      <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#151515] p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <label className="relative flex w-full shrink-0 items-center  lg:w-72">
            <input
              type="search"
              value={search}
              onChange={(event) => updateSearch(event.target.value)}
              placeholder="ابحث في المقالات..."
              aria-label="البحث في المقالات"
              className="w-full rounded-xl border border-white/10 bg-[#202020] py-3 pe-14 ps-4 text-right text-white outline-none transition placeholder:text-gray-500 focus:border-orange-500"
            />
            <FaSearch className="pointer-events-none absolute right-4 text-gray-500" />
          </label>

          <span className="whitespace-nowrap text-sm text-gray-400">
            عدد المقالات:
            <strong className="text-orange-400">{filteredPosts.length}</strong>
          </span>

          <div
            className="flex flex-1 flex-wrap items-center gap-2"
            aria-label="فلترة المقالات حسب التصنيف"
          >
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => updateCategory(item)}
                aria-pressed={category === item}
                className={`rounded-full border px-4 py-2 text-sm transition ${category === item ? "border-orange-500 bg-orange-500 text-white" : "border-gray-400/20 text-gray-400 hover:border-orange-500 hover:cursor-pointer"}`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2 self-start rounded-xl border border-white/10 bg-[#202020] p-1 lg:self-auto">
            <button
              type="button"
              onClick={() => setView("grid")}
              aria-label="عرض المقالات كأعمدة"
              aria-pressed={view === "grid"}
              className={`rounded-lg p-3 transition ${view === "grid" ? "bg-orange-500 text-white" : "text-gray-400 hover:text-orange-400"}`}
            >
              <FaThLarge />
            </button>
            <button
              type="button"
              onClick={() => setView("list")}
              aria-label="عرض المقالات كصفوف"
              aria-pressed={view === "list"}
              className={`rounded-lg p-3 transition ${view === "list" ? "bg-orange-500 text-white" : "text-gray-400 hover:text-orange-400"}`}
            >
              <FaList />
            </button>
          </div>
        </div>
      </div>

      {visiblePosts.length > 0 ? (
        <div
          className={
            view === "grid"
              ? "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              : "flex flex-col gap-4"
          }
        >
          {visiblePosts.map((post) => (
            <NavLink
              key={post.id}
              to={`/blog/${post.slug}`}
              aria-label={`اقرأ مقال: ${post.title}`}
              className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#151515] text-right transition hover:border-orange-500/50"
            >
              <article
                className={`flex h-full flex-col ${view === "list" ? "sm:flex-row" : ""}`}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className={`w-full object-cover transition duration-500 group-hover:scale-105 ${view === "grid" ? "h-48" : "h-52 sm:h-auto sm:w-64"}`}
                />
                <div className="relative z-10 flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs text-orange-400">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="line-clamp-2 text-xl font-bold leading-relaxed text-white transition group-hover:text-orange-400">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-7 text-gray-400">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center gap-2 pt-5 text-xs text-gray-500">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span>{post.author.name}</span>
                  </div>
                </div>
              </article>
            </NavLink>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <CiFaceFrown
            className="mb-4 text-5xl text-orange-500/70"
            aria-hidden="true"
          />
          <p className="text-lg font-semibold text-gray-300">لا توجد مقالات</p>
          <p className="mt-2 text-sm text-gray-500">
            حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            <FaRedo aria-hidden="true" />
            إعادة تعيين الفلاتر
          </button>
        </div>
      )}

      <nav
        className="mt-10 flex items-center justify-center gap-2"
        aria-label="ترقيم صفحات المدونة"
      >
        <button
          type="button"
          onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
          disabled={currentPage === 1}
          aria-label="الصفحة السابقة"
          className="rounded-lg border border-white/10 p-2 text-gray-300 transition hover:border-orange-500 hover:text-orange-400 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <IoIosArrowForward />
        </button>

        {Array.from({ length: TOTAL_PAGES }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              aria-label={`الصفحة ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
              className={`h-9 w-9 rounded-lg text-sm transition ${currentPage === page ? "bg-orange-500 text-white" : "border border-white/10 text-gray-400 hover:border-orange-500 hover:text-orange-400"}`}
            >
              {page}
            </button>
          ),
        )}

        <button
          type="button"
          onClick={() =>
            setCurrentPage((page) => Math.min(TOTAL_PAGES, page + 1))
          }
          disabled={currentPage === TOTAL_PAGES}
          aria-label="الصفحة التالية"
          className="rounded-lg border border-white/10 p-2 text-gray-300 transition hover:border-orange-500 hover:text-orange-400 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <IoIosArrowBack />
        </button>
      </nav>
    </section>
  );
};

export default BlogCards;
