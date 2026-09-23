const categoryIcons = {
  Food: "🍔",
  Transport: "🚗",
  Shopping: "🛍️",
  Entertainment: "🎮",
  Bills: "💡",
  Salary: "💰",
  Other: "📦"
};

function TransactionItem({ transaction, deleteTransaction }) {
  const isIncome = transaction.type === "income";

  return (
    <div
      className={`flex flex-col gap-4 rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:justify-between ${
        isIncome
          ? "border-green-100"
          : "border-red-100"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg ${
            isIncome
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-500"
          }`}
        >
          {isIncome ? "↗" : "↘"}
        </div>

        <div>
          <h3 className="font-semibold text-gray-900">
            {transaction.description}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {categoryIcons[transaction.category] || "📦"}{" "}
            {transaction.category} • {transaction.date}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 sm:justify-end">
        <strong
          className={`text-lg font-bold ${
            isIncome
              ? "text-green-600"
              : "text-red-500"
          }`}
        >
          {isIncome ? "+" : "-"} Rs.{" "}
          {Number(transaction.amount).toLocaleString()}
        </strong>

        <button
          onClick={() => {
            const confirmed = window.confirm(
              "Are you sure you want to delete this transaction?"
            );

            if (confirmed) {
              deleteTransaction(transaction.id);
            }
          }}
          className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600 hover:shadow-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;