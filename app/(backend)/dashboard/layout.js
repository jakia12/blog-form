import Link from "next/link";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-gradient-to-b from-gray-900 to-gray-700 text-white p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-8 tracking-wide">
          🛠️ Admin Panel
        </h2>
        <nav className="space-y-4">
          <Link
            href="/dashboard/posts"
            className="block px-4 py-2 rounded hover:bg-gray-600 transition-all"
          >
            📄 All Posts
          </Link>
          <Link
            href="/dashboard/createPost"
            className="block px-4 py-2 rounded hover:bg-gray-600 transition-all"
          >
            ✍️ Create Post
          </Link>
          <Link
            href="/dashboard/users"
            className="block px-4 py-2 rounded hover:bg-gray-600 transition-all"
          >
            👥 All Users
          </Link>
          <Link
            href="/dashboard/users/create"
            className="block px-4 py-2 rounded hover:bg-gray-600 transition-all"
          >
            ➕ Create User
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-10">
        <div className="bg-white shadow rounded-lg p-6 min-h-[80vh]">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
