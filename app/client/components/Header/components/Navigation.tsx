import { Link } from "@remix-run/react";

export const Navigation = () => {
  return (
    <nav className="flex gap-2">
      <Link to="/">BPTW?</Link>
      <Link to="/jobs">Jobs</Link>
      <Link to="/salaries">Salaries</Link>
      <Link to="/companies">Companies</Link>
    </nav>
  );
};
