import Blog from "@/model/blog";
import { dbConnect } from "@/mongo-conn";
import Banner from "./(client)/components/banner/Banner";
import FeaturedBlog from "./(client)/components/featuredBlog/FeaturedBlog";

export default async function Home() {
  dbConnect();
  const blogs = await Blog.find().sort({ date: -1 }); // latest first
  return (
    <>
      <Banner />
      <FeaturedBlog blogs={blogs} />
    </>
  );
}
