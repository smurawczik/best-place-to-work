import { MetaFunction, Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "BPTW? - Salaries" }];
};

export default function SalariesPage() {
  return (
    <main className="flex">
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </main>
  );
}
