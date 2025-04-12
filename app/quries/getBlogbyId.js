import Blog from "@/model/blog";

export default async function getBlogbyId(id) {
  const blog = await Blog.findById(id).lean();
  return blog;
}
