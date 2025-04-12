import Blog from "@/model/blog";

export default async function getBlogs() {
  const blogs = await Blog.find({}).lean();

  return blogs;
}
