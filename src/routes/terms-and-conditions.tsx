import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-and-conditions")({
  beforeLoad: () => {
    throw redirect({ to: "/terms" });
  },
  component: () => null,
});
