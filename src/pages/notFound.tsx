
function NotFound() {
  return (
    <div className="min-h-[600px] flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl text-white"><span className="text-red-400">404</span> - Page Not Found</h1>
      <p className="font-semibold text-xl text-white">Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;