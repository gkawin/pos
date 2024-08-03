import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://free-pos-backend.fly.dev:8090");

export function Layout({ children }: { children: React.ReactNode }) {
  pb.health.check().then((res) => {
    console.log(res);
  });
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
