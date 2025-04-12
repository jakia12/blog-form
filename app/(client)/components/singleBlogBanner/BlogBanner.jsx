const BlogBanner = () => {
  return (
    <section
      className="relative text-white py-24 px-6 h-[300px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/images/ban2.jpg')",
      }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-[36px]">
          Blog<span className="text-[#cc8e35]">Page</span>
        </h1>
      </div>
    </section>
  );
};

export default BlogBanner;
