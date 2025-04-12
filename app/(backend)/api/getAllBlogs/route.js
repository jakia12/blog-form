import dbConnect from "@/config/dbConnect";
import Blog from "@/models/Blog";

export async function GET() {
  try {
    await dbConnect();
    const blogs = await Blog.find().sort({ date: -1 });
    return Response.json(blogs);
  } catch (error) {
    return Response.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
