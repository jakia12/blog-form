export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="text-lg mt-4">Page Not Found</p>
      <a href="/" className="mt-6 text-blue-500 underline">
        Go back home
      </a>
    </div>
  );
}
