import { useState } from "react";

function Budget({ transactions }) {
  const [budget, setBudget] = useState(() => {
    return localStorage.getItem("budget") || "";
  });

  const expenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce(
      (total, transaction) => total + Number(transaction.amount),
      0
    );

  const remaining = Number(budget) - expenses;

  const handleBudgetChange = (e) => {
    const value = e.target.value;
    setBudget(value);
    localStorage.setItem("budget", value);
  };

  const clearBudget = () => {
    setBudget("");
    localStorage.removeItem("budget");
  };

  return (
    <section className="mb-8 rounded-2xl bg-white p-6 shadow-sm">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-900">
          💰 Budget Limit
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Set a spending limit and track your remaining budget.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Budget
          </label>

          <input
            type="number"
            value={budget}
            onChange={handleBudgetChange}
            placeholder="Enter budget"
            min="0"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
          />

          <button
            onClick={clearBudget}
            className="mt-3 rounded-lg bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-300"
          >
            Clear Budget
          </button>
        </div>

        <div className="rounded-xl bg-red-50 p-4">
          <p className="text-sm text-gray-500">
            Total Expenses
          </p>

          <p className="mt-1 text-xl font-bold text-red-500">
            Rs. {expenses.toLocaleString()}
          </p>
        </div>

        <div
          className={`rounded-xl p-4 ${
            budget && remaining < 0
              ? "bg-red-100"
              : "bg-green-50"
          }`}
        >
          <p className="text-sm text-gray-500">
            Remaining
          </p>

          <p
            className={`mt-1 text-xl font-bold ${
              budget && remaining < 0
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            Rs. {remaining.toLocaleString()}
          </p>
        </div>
      </div>

      {budget && remaining < 0 && (
        <div className="mt-4 rounded-xl bg-red-100 p-4 font-semibold text-red-700">
          ⚠️ Budget exceeded by Rs.{" "}
          {Math.abs(remaining).toLocaleString()}
        </div>
      )}

      {budget && remaining >= 0 && (
        <div className="mt-4 rounded-xl bg-green-100 p-4 font-semibold text-green-700">
          ✅ You are within your budget.
        </div>
      )}
    </section>
  );
}

export default Budget;