import getBlogs from "@/app/quries/getBlogs";

const AllblogPage = async () => {
  const blogs = await getBlogs();

  // const [blogs, setBlogs] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  // const [selectedBlog, setSelectedBlog] = useState(null);
  // const [editedTitle, setEditedTitle] = useState("");

  // const handleDelete = async (id) => {
  //   if (!confirm("Are you sure you want to delete this blog?")) return;

  //   try {
  //     const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
  //     if (res.ok) {
  //       setblogs(blogs.filter((blog) => blog._id !== id));
  //     } else {
  //       console.error("Failed to delete blog");
  //     }
  //   } catch (error) {
  //     console.error("Error deleting blog:", error);
  //   }
  // };

  // //   modal pop up
  // const openEditModal = (blog) => {
  //   setSelectedBlog(blog);
  //   setEditedTitle(blog.title);

  //   setShowModal(true);
  // };

  // //   edit modal
  // const handleEditSave = async () => {
  //   try {
  //     const res = await fetch(`/api/blogs/${selectedBlog._id}`, {
  //       method: "PUT",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ title: editedTitle }),
  //     });

  //     if (res.ok) {
  //       const updatedBlog = await res.json();
  //       setBlogs((prev) =>
  //         prev.map((b) => (b._id === updatedBlog._id ? updatedBlog : b))
  //       );
  //       setShowModal(false);
  //     } else {
  //       console.error("Failed to update blog");
  //     }
  //   } catch (error) {
  //     console.error("Error updating blog:", error);
  //   }

  //   setShowModal(false);
  // };
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full table-auto border border-gray-300">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-4 py-2 text-left text-[#fff]">Title</th>
            <th className="px-4 py-2 text-left text-[#fff]">Cover</th>
            <th className="px-4 py-2 text-left text-[#fff]">Created</th>
            <th className="px-4 py-2 text-[#fff]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog._id} className="border-t">
              <td className="px-4 py-2 text-[#000]">{blog.title}</td>
              <td className="px-4 py-2 text-[#000]">
                {" "}
                <img
                  src={blog.cover_image || "/images/placeholder.jpg"}
                  alt={blog.title}
                  className="w-[90px] h-[90px] object-cover"
                />
              </td>
              <td className="px-4 py-2 text-[#000]">
                {new Date(blog.createdAt).toLocaleDateString()}
              </td>
              <td className="px-4 py-2 space-x-2 text-[#000]">
                <button className="bg-blue-500 hover:bg-blue-600  px-3 py-1 rounded text-sm  text-[#000]">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-600  px-3 py-1 rounded text-sm text-[#000]">
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {blogs.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center py-4">
                No blogs found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllblogPage;
