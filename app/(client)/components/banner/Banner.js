const Banner = () => {
  return (
    <section
      className="relative text-white py-24 px-6 h-[500px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/images/ban.jpg')",
      }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-[36px]">
          Bytes of <span className="text-[#cc8e35]">Wisdom</span>
        </h1>
        <p className="text-lg md:text-xl mb-[36px]">
          Discover developer stories, coding tips, and tech insights every week.
        </p>
        <a
          href="#blogs"
          className="inline-block bg-[#cc8e35] hover:bg-[#b37c2f] text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Explore Posts
        </a>
      </div>
    </section>
  );
};

export default Banner;
