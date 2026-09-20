const Background = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-black">

      
      <div
        className="
          pointer-events-none
          fixed
          top-[10%]
          -right-75
          w-100
          h-100
          rounded-full
          bg-orange-600/10
          blur-[150px]
          z-0
        "
      />

      {/* Orange Glow - Left */}
      <div
        className="
          pointer-events-none
          fixed
          top-[10%]
          -left-75
          w-150
          h-150
          rounded-full
          bg-orange-600/10
          blur-[150px]
          z-0
        "
      />

      {/* Grid */}
      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          opacity-20
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(156, 163, 175, 0.35) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(156, 163, 175, 0.35) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
};

export default Background;