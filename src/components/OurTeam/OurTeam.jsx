import {
 
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import postsData from "../data/posts.json";
import { IoCheckmark } from "react-icons/io5";

const socialLinks = [
  { name: "X", icon: <FaXTwitter />, urlKey: "twitter" },
  { name: "GitHub", icon: <FaGithub />, urlKey: "github" },
  { name: "LinkedIn", icon: <FaLinkedinIn />, urlKey: "linkedin" },
  { name: "YouTube", icon: <FaYoutube />, urlKey: "youtube" },
];

const OurTeam = () => {
  const authors = [
    ...new Map(
      postsData.posts.map((post) => [post.author.name, post.author]),
    ).values(),
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-5 text-center sm:py-10">
      <div className="relative inline-flex items-center gap-2 rounded-full border border-amber-950/50 bg-[#2C1A0B] px-5 py-2 text-sm">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
        </span>

        <span className="text-orange-500">فريقنا</span>
      </div>
      <div className="my-6">
        <h2 className="text-3xl font-bold text-white sm:text-5xl">
          تعرف على كتابنا
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-400">
          فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
          المجتمع.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:my-17.5 ">
        {authors.map((author) => (
          <article
            key={author.name}
            className="rounded-2xl border border-orange-500/15 bg-[#161616] p-6 transition duration-300  hover:border-orange-500/60"
          >
            <div className="relative mx-auto mb-5 h-28 w-28">
              <div className="h-full w-full rounded-full border-4 border-gray-600/10  ">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="h-full w-full rounded-full object-cover d-block"
                />
              </div>
              <span
                className="absolute bottom-3 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-white border border-black"
                title="كاتب موثق"
              >
               <IoCheckmark />
              </span>
            </div>

            <h3 className="text-xl font-bold text-white">{author.name}</h3>
            <p className="mt-2 text-sm text-orange-500/80">{author.role}</p>

            <div className="mt-5 flex items-center justify-center gap-2 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={postsData.siteInfo.social[social.urlKey]}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${social.name} - ${author.name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border  text-gray-500 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
