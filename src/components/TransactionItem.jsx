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
          {isIncome ? "+" : "-"} Rs. {transaction.amount}
        </strong>

        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="rounded-lg bg-gray-100 px-3 py-2 text-sm hover:bg-gray-200"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TransactionItem;