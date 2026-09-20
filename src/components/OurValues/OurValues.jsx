import { FaBullseye} from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";
import { FaHandshakeSimple } from "react-icons/fa6";
import { RxUpdate } from "react-icons/rx";

const OurValues = () => {
  const values = [

      {
      icon: <FaBullseye />,
      title: "الجودة أولاً",
      description: "محتوى مدروس ومكتوب بخبرة",
    },

    {
      icon: <MdElectricBolt />,
      title: "تركيز عملي",
      description: "أمثلة واقعية يمكنك تطبيقها اليوم",
    },
  
    {
      icon: <FaHandshakeSimple />,
      title: "المجتمع",
      description: "تعلم مع آلاف المصورين",
    },
    {
      icon: <RxUpdate />,
      title: "دائماً محدث",
      description:
        "أحدث الاتجاهات وأفضل الممارسات",
    },
  ];

  return (
    <section
      className="mt-16 border-y border-white/10 bg-[#11100f] px-4 py-12 sm:py-16"
      dir="rtl"
    >
      <div className="mx-auto max-w-7xl text-center">
        <div className="relative inline-flex items-center px-6 py-2">
          <span className="absolute inset-y-0 right-0 w-0.5 bg-linear-to-b from-orange-400 via-amber-300 to-orange-700" />
          <h2 className="text-3xl font-bold text-white sm:text-5xl">قيمنا</h2>
          <span className="absolute inset-y-0 left-0 w-0.5 bg-linear-to-t from-orange-400 via-amber-300 to-orange-700" />
        </div>
        <p className="mt-4 text-lg text-gray-400">
          المبادئ التي توجه كل ما نقوم بإنشائه
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <article
              key={value.title}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#161616] px-5 py-7 transition duration-300  hover:bg-orange-600/10 group"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl  text-2xl sm:text-5xl text-[#FF6900]">
                {value.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold text-white group-hover:text-orange-500">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
