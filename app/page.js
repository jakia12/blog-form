import Blog from "@/model/blog";
import { dbConnect } from "@/mongo-conn";
import Link from "next/link";
import Banner from "./(client)/components/banner/Banner";
import FeaturedBlog from "./(client)/components/featuredBlog/FeaturedBlog";
import Modal from "./(client)/components/modal/homeModal";

export default async function Home({ searchParams }) {
  dbConnect();
  const blogs = await Blog.find().sort({ date: -1 }); // latest first
  const show = searchParams?.show;
  return (
    <>
      <Banner />
      <FeaturedBlog blogs={blogs} />

      <Link href="/?show=true">SUMMON THE MODAL</Link>

      {show && <Modal />}
    </>
  );
}
