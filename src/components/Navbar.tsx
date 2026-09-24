import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 border-b border-base-200 px-4 lg:px-8">
      <div className="navbar-start">
        <Link href="/" className="text-2xl font-bold">
          FitLog
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/workouts">Workouts</Link>
          </li>

          <li>
            <Link href="/progress">Progress</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <Link href="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;