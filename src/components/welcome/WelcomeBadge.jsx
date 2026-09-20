const WelcomeBadge = () => {
  return (
    <div className="pt-10">
      <div className="relative inline-flex items-center justify-center ps-4 ">
        <div className="absolute inset-0 border  border-[#552d0e] rounded-full bg-[#25160B]" />

        <div className="relative px-8 py-3 text-white  text-lg font-medium">
          مرحباً بك في عدسة
        </div>

        <div className="absolute top-6 right-0 flex gap-2 px-3">
        
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75 animate-ping" />

            <span className="relative inline-flex w-2 h-2 rounded-full bg-orange-500" />
          </span>

          <span className="w-2 h-2 rounded-full bg-orange-500" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeBadge;
