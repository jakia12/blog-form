import Blog from "@/model/blog";

export default async function getDeleteBlogbyId(id) {
  const blog = await Blog.findByIdAndDelete(id);
  return blog;
}
