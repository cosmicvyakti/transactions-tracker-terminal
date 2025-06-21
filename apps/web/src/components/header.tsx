import { Link } from "@tanstack/react-router";

import { ModeToggle } from "./mode-toggle";
// import UserMenu from "./user-menu";
import { trpc } from "@/utils/trpc";
import { useQuery } from "@tanstack/react-query";

export default function Header() {
  const links = [{ to: "/transactions", label: "(T)Transactions" }];

  const healthCheck = useQuery(trpc.healthCheck.queryOptions());

  return (
    <div>
      <div className="flex flex-row items-center justify-between px-2 py-1">
        <nav className="flex gap-4">
          {links.map(({ to, label }) => {
            return (
              <Link key={to} to={to}>
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          {/* <UserMenu /> */}
          {healthCheck.isLoading ? (
            <span className="text-sm text-gray-500">Checking health...</span>
          ) : healthCheck.isError ? (
            <span className="text-sm text-red-500">Health check failed</span>
          ) : (
            <div className="text-sm flex gap-2">
              API{" "}
              <div
                className={`h-2 w-2 rounded-full self-center ${healthCheck.data ? "bg-green-500" : "bg-red-500"}`}
              />
            </div>
          )}
          {/* <ModeToggle /> */}
        </div>
      </div>
    </div>
  );
}
