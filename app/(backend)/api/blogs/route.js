import dbConnect from "@/config/dbConnect";
import Blog from "@/model/blog";

export async function GET() {
  await dbConnect();

  const blogs = await Blog.find().lean();
  return Response.json(blogs);
}
