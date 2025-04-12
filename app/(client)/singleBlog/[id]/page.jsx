import getBlogbyId from "@/app/quries/getBlogbyId";
import SingleBlogInfo from "../../components/singleBlog/SingleBlogInfo";
import BlogBanner from "../../components/singleBlogBanner/BlogBanner";

export default async function SingleBlogPage({ params: { id } }) {
  const blogInfo = await getBlogbyId(id);

  return (
    <>
      <BlogBanner />
      <SingleBlogInfo blog={blogInfo} />
    </>
  );
}
