import { Outlet } from "@remix-run/react";

export default function SalariesPage() {
  return (
    <main className="flex">
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </main>
  );
}
