import { useState } from "react";
import TransactionItem from "./TransactionItem";

function TransactionList({
  transactions,
  deleteTransaction
}) {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  const filteredTransactions = transactions.filter(
    (transaction) => {
      if (categoryFilter === "All") {
        return true;
      }

      return transaction.category === categoryFilter;
    }
  );

  const sortedTransactions = [...filteredTransactions].sort(
    (a, b) => {
      if (sortOrder === "newest") {
        return b.createdAt - a.createdAt;
      }

      if (sortOrder === "oldest") {
        return a.createdAt - b.createdAt;
      }

      if (sortOrder === "highest") {
        return Number(b.amount) - Number(a.amount);
      }

      if (sortOrder === "lowest") {
        return Number(a.amount) - Number(b.amount);
      }

      return 0;
    }
  );

  return (
    <section className="rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-xl font-bold">
          Transactions
        </h2>

        <div className="flex flex-col gap-3 sm:flex-row">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-green-500"
          >
            <option value="All">All Categories</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
            <option value="Entertainment">
              Entertainment
            </option>
            <option value="Bills">Bills</option>
            <option value="Salary">Salary</option>
            <option value="Other">Other</option>
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-green-500"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="highest">Highest Amount</option>
            <option value="lowest">Lowest Amount</option>
          </select>
        </div>
      </div>

      {sortedTransactions.length === 0 ? (
        <p className="py-5 text-center text-gray-500">
          No transactions found.
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {sortedTransactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              deleteTransaction={deleteTransaction}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default TransactionList;