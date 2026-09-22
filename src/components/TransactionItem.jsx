function TransactionItem({ transaction, deleteTransaction }) {

  const isIncome = transaction.type === "income";

  return (
    <div className="flex flex-col gap-3 rounded-lg border border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between">

      <div>
        <h3 className="font-semibold">
          {transaction.description}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          {transaction.category} • {transaction.date}
        </p>
      </div>

      <div className="flex items-center justify-between gap-4">

        <strong
            className={
            isIncome
            ? "text-green-600"
            : "text-red-500"
         }
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
    className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
        >
    Delete
        </button>

      </div>

    </div>
  );
}

export default TransactionItem;