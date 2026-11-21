import { createFileRoute, redirect } from "@tanstack/react-router";

// The Solutions hub was merged into /services (19 Nov 2026). The six /solutions/$slug pages stay.
// Old /solutions links land on the Capabilities section (owner's choice). Google ignores the #part.
export const Route = createFileRoute("/solutions")({
  beforeLoad: () => {
    throw redirect({ to: "/services", hash: "capabilities", statusCode: 301 });
  },
  component: () => null,
});
