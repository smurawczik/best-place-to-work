import type { MetaFunction } from "@remix-run/node";
import { useOptionalUser } from "~/client/hooks/useOptionalUser";

export const meta: MetaFunction = () => [{ title: "Best place to work?" }];

export default function Index() {
  const user = useOptionalUser();

  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      {JSON.stringify(user)} hola
    </main>
  );
}
