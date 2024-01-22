import { Link } from "@remix-run/react";

export const Navigation = () => {
  return (
    <nav className="flex gap-2">
      <Link className="text-blue-500" to="/">
        BPTW?
      </Link>
      <Link className="text-blue-500" to="/jobs">
        Jobs
      </Link>
      <Link className="text-blue-500" to="/salaries">
        Salaries
      </Link>
      <Link className="text-blue-500" to="/companies">
        Companies
      </Link>
    </nav>
  );
};
