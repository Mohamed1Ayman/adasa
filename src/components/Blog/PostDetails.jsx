import { FaArrowLeft, FaHome } from "react-icons/fa";
import { Navigate, NavLink, useParams } from "react-router";
import postsData from "../data/posts.json";

const PostDetails = () => {
  const { slug } = useParams();
  const post = postsData.posts.find((item) => item.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const contentBlocks = post.content.split("\n\n");
  const headings = contentBlocks
    .filter((block) => block.startsWith("## "))
    .map((block, index) => ({
      id: `section-${index + 1}`,
      title: block.replace("## ", ""),
    }));
  const relatedPosts = postsData.posts
    .filter((item) => item.category === post.category && item.id !== post.id)
    .slice(0, 3);

  return (
    <article className="-mt-28 w-full overflow-x-hidden pb-16" dir="rtl">
      <header className="relative w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-screen w-full object-cover sm:h-168"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/65 to-black/20" />

        <nav
          className="absolute inset-x-0 top-6 z-10 mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 text-sm sm:px-6 lg:px-8"
          aria-label="مسار المقال"
        >
          <NavLink
            to="/"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3 py-2 text-gray-200 backdrop-blur-sm transition hover:border-orange-400 hover:text-orange-400"
          >
            <FaHome className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span>الرئيسية</span>
          </NavLink>
          <FaArrowLeft className="text-orange-400" aria-hidden="true" />

          <NavLink
            to="/blog"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3 py-2 text-gray-200 backdrop-blur-sm transition hover:border-orange-400 hover:text-orange-400"
          >
            <span>المدونة</span>
          </NavLink>
          <FaArrowLeft className="text-orange-400" aria-hidden="true" />
          <NavLink
            to={`/blog?category=${encodeURIComponent(post.category)}`}
            className="rounded-full border border-orange-400/50 bg-orange-500 px-3 py-2 font-semibold text-white transition hover:bg-orange-600"
          >
            {post.category}
          </NavLink>
        </nav>

        <div className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-5xl px-4 pb-10 text-right sm:px-6 sm:pb-14 lg:px-8">
          <span className="inline-flex rounded-full bg-orange-500 px-3 py-1 text-sm font-semibold text-white">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-relaxed text-white sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-9 text-gray-200">
            {post.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/20 pt-6 text-sm text-gray-200">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-white">{post.author.name}</p>
                <p>{post.author.role}</p>
              </div>
            </div>
            <span>{post.readTime}</span>
            <time dateTime={post.date}>{post.date}</time>
          </div>
        </div>
      </header>

      <section className="bg-black px-4 py-12 text-right sm:px-6 sm:py-16 lg:px-8">
        <div
          className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[240px_minmax(0,1fr)]"
          dir="ltr"
        >
          <aside
            className="order-2 h-fit self-start lg:sticky lg:top-28 lg:order-1"
            dir="rtl"
          >
            <div className="rounded-2xl border border-white/10 bg-[#151515] p-5">
              <h2 className="pb-4 text-lg font-bold text-white">
                محتويات المقال
              </h2>
              <nav className="mt-4 space-y-2" aria-label="عناوين المقال">
                {headings.map((heading, index) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className="flex items-start gap-3 rounded-xl border-r-2 border-transparent px-3 py-2 text-sm leading-7 text-gray-400 transition hover:border-orange-500 hover:bg-orange-500/5 hover:text-orange-400"
                  >
                    <span className="min-w-6 font-bold text-orange-500">
                      {String(index + 1).padStart(1)}
                    </span>
                    <span>{heading.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div
            className="order-1 space-y-6 text-lg leading-loose text-gray-300 lg:order-2"
            dir="rtl"
          >
            {contentBlocks.map((block, index) => {
              if (block.startsWith("## ")) {
                const heading = headings.find(
                  (item) => item.title === block.replace("## ", ""),
                );

                return (
                  <h2
                    id={heading?.id}
                    key={heading?.id || block}
                    className="pt-2 text-2xl font-bold text-orange-400"
                  >
                    {block.replace("## ", "")}
                  </h2>
                );
              }

              return <p key={`${block}-${index}`}>{block}</p>;
            })}
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section
          className="bg-black px-4 pb-16 text-right sm:px-6 lg:px-8"
          dir="rtl"
        >
          <div className="mx-auto max-w-7xl border-t border-white/10 pt-10">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-orange-400">
                  من نفس التصنيف
                </p>
                <h2 className="mt-2 text-3xl font-bold text-white">
                  مقالات قد تعجبك
                </h2>
              </div>
              <NavLink
                to={`/blog?category=${encodeURIComponent(post.category)}`}
                className="hidden text-sm text-gray-400 transition hover:text-orange-400 sm:block"
              >
                عرض كل المقالات
              </NavLink>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <NavLink
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-[#151515] transition hover:-translate-y-1 hover:border-orange-500/60"
                >
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <span className="text-xs text-orange-400">
                      {relatedPost.category}
                    </span>
                    <h3 className="mt-2 line-clamp-2 text-lg font-bold leading-8 text-white transition group-hover:text-orange-400">
                      {relatedPost.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-7 text-gray-400">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
};

export default PostDetails;
