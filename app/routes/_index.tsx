import { AppBar, Typography } from "@mui/material";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <AppBar position="static">
      <Typography variant="h6" className="tw-text-rose-200">
        Welcome to Remix!
      </Typography>
    </AppBar>
  );
}
