import Link from "next/link";

const FeaturedBlog = ({ blogs }) => {
  console.log(blogs);
  const ftBlogs = blogs.slice(0, 3);
  return (
    <div className="container w-[90%] mx-auto my-[90px]">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {ftBlogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-[#0abde3] rounded-lg shadow-lg overflow-hidden transition hover:-translate-y-1 hover:shadow-xl duration-300  p-[30px]"
          >
            <img
              src={blog.cover_image || "/images/placeholder.jpg"}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <Link href={`/singleBlog/${blog._id}`}>
                <h3 className="text-xl font-bold mb-2 text-[#000]">
                  {blog.title}
                </h3>
              </Link>
              <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                {blog.description}
              </p>
              <p className="text-xs mb-4 text-[#000]">
                Published On : {blog.date}
              </p>
              <a
                href={`/blog/${blog.slug}`}
                className="text-[#feca57] hover:underline font-medium"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlog;
