import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bookings")({
  component: Bookings,
});

function Bookings() {
  return <div>Hello "/bookings"!</div>;
}
