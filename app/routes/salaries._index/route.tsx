import { Link } from "@remix-run/react";

export default function SalariesIndexPage() {
  return (
    <p>
      No salary selected. Select a note on the left, or{" "}
      <Link to="new" className="text-blue-500 underline">
        create a new salary.
      </Link>
    </p>
  );
}
