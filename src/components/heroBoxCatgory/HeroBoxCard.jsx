import { FaBook, FaUsers, FaFolderOpen, FaPenNib } from "react-icons/fa6";
import Card from "../cards/Card";

const HeroBoxCatgory = () => {
  const cards = [
    {
      id: 1,
      icon: <FaBook />,
      title: "مقالة",
      total: "50+",
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "قارئ",
      total: "10+ ألف",
    },
    {
      id: 3,
      icon: <FaFolderOpen />,
      title: "تصنيفات",
      total: "4",
    },
    {
      id: 4,
      icon: <FaPenNib />,
      title: "كاتب",
      total: "6",
    },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-8 max-w-xl m-auto p-2">
      {cards.map((card) => (
        <Card
          key={card.id}
          icon={card.icon}
          title={card.title}
          total={card.total}
        />
    ))}
    </div>
  );
};

export default HeroBoxCatgory;
