import { Link, useLocation } from "react-router-dom";

export default function AdminNavbar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-white/10 h-24 backdrop-blur-lg text-white px-8 py-4 flex justify-between items-center border-b border-white/10">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <div className="space-x-6">
        <Link
          to="/admin/host"
          className={`hover:text-white/80 transition-colors ${
            pathname === "/admin/host" ? "text-white font-semibold" : "text-white/60"
          }`}
        >
          Host Event
        </Link>
        <Link
          to="/admin/my-events"
          className={`hover:text-white/80 transition-colors ${
            pathname === "/admin/my-events" ? "text-white font-semibold" : "text-white/60"
          }`}
        >
          My Hosted Events
        </Link>
      </div>
    </nav>
  );
}