import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cabins")({
  component: Cabins,
});

function Cabins() {
  return <div>Hello "/cabins"!</div>;
}
