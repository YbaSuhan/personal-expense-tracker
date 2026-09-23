import { useState } from "react";
import TransactionItem from "./TransactionItem";

function TransactionList({
  transactions,
  deleteTransaction
}) {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTransactions = transactions.filter(
    (transaction) => {
      const matchesCategory =
        categoryFilter === "All" ||
        transaction.category === categoryFilter;

      const searchText = searchTerm.toLowerCase();

      const matchesSearch =
        transaction.description
          .toLowerCase()
          .includes(searchText) ||
        transaction.category
          .toLowerCase()
          .includes(searchText);

      return matchesCategory && matchesSearch;
    }
  );

  const sortedTransactions = [...filteredTransactions].sort(
    (a, b) => {
      if (sortOrder === "newest") {
        return (b.createdAt ?? b.id) - (a.createdAt ?? a.id);
      }

      if (sortOrder === "oldest") {
        return (a.createdAt ?? a.id) - (b.createdAt ?? b.id);
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
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Transactions
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          View and manage your transactions.
        </p>
      </div>

      <div className="mb-6 grid gap-3 rounded-xl bg-gray-50 p-3 md:grid-cols-[1fr_auto_auto]">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-gray-50 py-3 pl-10 pr-4 outline-none transition focus:border-green-500 focus:bg-white"
          />
        </div>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-green-500 focus:bg-white"
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
          className="rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-green-500 focus:bg-white"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="highest">Highest Amount</option>
          <option value="lowest">Lowest Amount</option>
        </select>
      </div>

      {sortedTransactions.length === 0 ? (
        <div className="rounded-xl bg-gray-50 py-10 text-center">
          <p className="text-gray-500">
            No transactions found.
          </p>
        </div>
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