import { FaBook, FaFolderOpen, FaPenNib, FaUsers } from "react-icons/fa6";
import Card from "../cards/Card";
import OurTeam from "../OurTeam/OurTeam";
import OurValues from "../OurValues/OurValues";
import HaveQuestions from "../questions/HaveQuestions";

const WhatOurWe = () => {
  const cards = [
    { id: 1, icon: <FaBook />, title: "مقالة", total: "+500" },
    { id: 2, icon: <FaUsers />, title: "قارئ", total: "+2 مليون" },
    { id: 3, icon: <FaFolderOpen />, title: "تصنيفات", total: "+15" },
    { id: 4, icon: <FaPenNib />, title: "خبير", total: "+50" },
  ];

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-5 text-center sm:py-10">
        <div className="relative inline-flex items-center gap-2 rounded-full border border-amber-950/50 bg-[#2C1A0B] px-5 py-2 text-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
          </span>

          <span className="text-orange-500">من نحن </span>
        </div>
        <div className="my-5">
          <h2 className="text-white text-4xl sm:text-6xl font-bold">
            مهمتنا هي <span className="text-[#FBAF21]">الإعلام والإلهام</span>
          </h2>
          <p className="text-gray-400/65 text-2xl my-5">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
            ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
            المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>
        </div>
        <div className="mx-auto grid max-w-xl grid-cols-2 gap-4 p-2 lg:max-w-4xl lg:grid-cols-4">
          {cards.map((card) => (
            <Card
              key={card.id}
              icon={card.icon}
              title={card.title}
              total={card.total}
              cardClassName="border-orange-500/20 bg-[#24170d] hover:border-orange-500/60"
              iconClassName="text-amber-500"
              totalClassName="text-gold-500 text-2xl font-bold"
              titleClassName="text-gray-300/50"
            />
          ))}
        </div>
      </div>
      <OurValues />
      <OurTeam />
      <HaveQuestions/>
    </section>
  );
};

export default WhatOurWe;
