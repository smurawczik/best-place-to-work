import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useMatches,
  useRouteError,
} from "@remix-run/react";

import { getUser } from "~/server/session/session.server";
import stylesheet from "~/tailwind.css";

import { Header } from "./client/components/Header";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({ user: await getUser(request) });
};

export default function App() {
  const matches = useMatches();
  const shouldShowHeader = !matches.some((match) =>
    match.pathname?.match(new RegExp("(/login|/join)"))
  );

  return (
    <html lang="en" className="h-full dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full dark:bg-slate-900 text-white">
        {shouldShowHeader ? <Header /> : null}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <html lang="en" className="dark">
        <head>
          <title>Oh no!</title>
          <Meta />
          <Links />
        </head>
        <body className="dark:bg-slate-900 text-white">
          <main className="dark:bg-slate-900 relative min-h-screen sm:flex sm:items-center sm:justify-center">
            <h2 className="text-3xl text-center text-white">
              Oh no, something went wrong! <br />
              <small className="text-xs">({error?.data})</small>
              <br />
              <br />
              <Link to="/" className="text-blue-500">
                Go back home
              </Link>
            </h2>
          </main>
          <Scripts />
        </body>
      </html>
    );
  }

  return null;
}
