import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  beforeLoad: () => {
    throw redirect({ to: "/privacy", statusCode: 301 });
  },
  component: () => null,
});
