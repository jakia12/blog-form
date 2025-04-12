import Link from "next/link";

const Header = () => {
  return (
    <div className="px-[70px] bg-white">
      <nav className="bg-white  px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          MyBlog
        </Link>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
