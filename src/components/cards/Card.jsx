const Card = ({
  icon,
  title,
  total,
  cardClassName = "",
  iconClassName = "",
  totalClassName = "",
  titleClassName = "",
}) => {
  return (
    <div
      className={`border bg-[#141414] rounded-2xl p-4 border-amber-50/10 hover:scale-105 transition-all duration-300 ${cardClassName}`}
    >
      <div
        className={`text-orange-500 text-3xl py-3 flex justify-center ${iconClassName}`}
      >
        {icon}
      </div>
      <h3 className={`text-white ${totalClassName}`}>{total}</h3>
      <p className={`text-gray-300 ${titleClassName}`}>{title}</p>
    </div>
  );
};

export default Card;
