const SingleBlogInfo = ({ blog }) => {
  return (
    <>
      <div className="max-w-2xl mx-auto p-4 space-y-4 my-[150px]">
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <p className="text-[#fff]">
          Published on : {new Date(blog.date).toLocaleDateString()}
        </p>
        <img
          src={blog.cover_image}
          alt={blog.title}
          className="w-full h-auto rounded"
        />
        <p className="mt-4 text-lg">{blog.description}</p>
      </div>
      ;
    </>
  );
};

export default SingleBlogInfo;
