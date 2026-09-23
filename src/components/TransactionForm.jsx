import { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [type, setType] = useState("expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      type,
      amount,
      category,
      description,
      date: new Date().toLocaleDateString(),
      createdAt: Date.now()
    };

    addTransaction(newTransaction);

    alert("Transaction added successfully!");

    setAmount("");
    setDescription("");
  };

  return (
    <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Add Transaction
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Record your income or expenses below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-5">

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Type
            </label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-green-500 focus:bg-white"
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Amount
            </label>

            <input
              type="number"
              min="1"
              required
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-green-500 focus:bg-white"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-green-500 focus:bg-white"
            >
              <option>Food</option>
              <option>Transport</option>
              <option>Shopping</option>
              <option>Entertainment</option>
              <option>Bills</option>
              <option>Salary</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Description
            </label>

            <input
              type="text"
              required
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition focus:border-green-500 focus:bg-white"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-xl bg-green-600 px-4 py-3.5 font-semibold text-white shadow-sm transition hover:bg-green-700 hover:shadow-md"
        >
          + Add Transaction
        </button>

      </form>
    </section>
  );
}

export default TransactionForm;