function Summary({ transactions }) {
  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce(
      (total, transaction) => total + Number(transaction.amount),
      0
    );

  const expenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce(
      (total, transaction) => total + Number(transaction.amount),
      0
    );

  const balance = income - expenses;

  return (
    <section className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500">
            Balance
          </p>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-lg">
            💰
          </span>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">
          Rs. {balance.toLocaleString()}
        </h2>

        <p className="mt-2 text-xs text-gray-500">
          Current balance
        </p>
      </div>

      <div className="rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500">
            Income
          </p>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-lg">
            ↗
          </span>
        </div>

        <h2 className="text-2xl font-bold text-green-600">
          Rs. {income.toLocaleString()}
        </h2>

        <p className="mt-2 text-xs text-gray-500">
          Total income
        </p>
      </div>

      <div className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 to-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500">
            Expenses
          </p>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-100 text-lg">
            ↘
          </span>
        </div>

        <h2 className="text-2xl font-bold text-red-500">
          Rs. {expenses.toLocaleString()}
        </h2>

        <p className="mt-2 text-xs text-gray-500">
          Total expenses
        </p>
      </div>

      <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-500">
            Transactions
          </p>

          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-lg">
            📋
          </span>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">
          {transactions.length}
        </h2>

        <p className="mt-2 text-xs text-gray-500">
          Total records
        </p>
      </div>

    </section>
  );
}

export default Summary;