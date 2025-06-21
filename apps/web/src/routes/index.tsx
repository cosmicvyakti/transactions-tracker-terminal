import { TransactionForm } from "@/components/transaction-form";
import { TransactionList } from "@/components/transactions-list";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex justify-between px-2 py-1 gap-2">
      <TransactionForm />
      <TransactionList />
    </div>
  );
}
