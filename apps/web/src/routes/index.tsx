import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="container mx-auto px-2 py-2">
      <div className="grid gap-6">
        <Button
          variant="outline"
          onClick={() => setCount((prevVal) => prevVal + 1)}
        >
          count: {count}
        </Button>
      </div>
    </div>
  );
}
