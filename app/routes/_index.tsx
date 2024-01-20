import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{ title: "Best place to work?" }];

export default function Index() {
  return (
    <main className="dark:bg-slate-900 relative min-h-screen sm:flex sm:items-center sm:justify-center"></main>
  );
}
