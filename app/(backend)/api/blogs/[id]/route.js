import dbConnect from "@/config/dbConnect";
import Blog from "@/model/blog";

import mongoose from "mongoose";
// get all post
export async function GET(req, { params }) {
  await dbConnect();

  const isValid = mongoose.Types.ObjectId.isValid(params.id);
  if (!isValid) {
    return Response.json({ error: "Invalid ID format" }, { status: 400 });
  }

  const blog = await Blog.findById(params.id); // <- This matches the _id field

  if (!blog) {
    return Response.json({ error: "Blog not found" }, { status: 404 });
  }

  return Response.json(blog);
}

// delete post
export async function DELETE(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;

    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// edit posts
export async function PUT(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    const body = await req.json();

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      {
        title: body.title,
      },
      { new: true } // Return updated doc
    );

    if (!updatedBlog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(updatedBlog, { status: 200 });
  } catch (error) {
    console.error("Update Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
