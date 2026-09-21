function Summary({ transactions }) {
  const income = transactions
    .filter(transaction => transaction.type === "income")
    .reduce(
      (total, transaction) => total + Number(transaction.amount),
      0
    );

  const expenses = transactions
    .filter(transaction => transaction.type === "expense")
    .reduce(
      (total, transaction) => total + Number(transaction.amount),
      0
    );

  const balance = income - expenses;

  return (
    <section className="mb-8 grid gap-5 md:grid-cols-4">
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <p className="text-sm text-gray-500">Balance</p>
        <h2 className="mt-2 text-2xl font-bold">
          Rs. {balance}
        </h2>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <p className="text-sm text-gray-500">Income</p>
        <h2 className="mt-2 text-2xl font-bold text-green-600">
          Rs. {income}
        </h2>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <p className="text-sm text-gray-500">Expenses</p>
        <h2 className="mt-2 text-2xl font-bold text-red-500">
          Rs. {expenses}
        </h2>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <p className="text-sm text-gray-500">
          Transactions
        </p>
        <h2 className="mt-2 text-2xl font-bold">
          {transactions.length}
        </h2>
      </div>
    </section>
  );
}

export default Summary;