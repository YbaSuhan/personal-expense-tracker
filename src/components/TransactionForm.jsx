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
    <section className="mb-8 rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-bold">
        Add Transaction
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium">
            Type
          </label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-green-500"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Amount
          </label>

          <input
            type="number"
            min="1"
            required
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-green-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-green-500"
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
          <label className="mb-1 block text-sm font-medium">
            Description
          </label>

          <input
            type="text"
            required
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-green-500"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-green-600 px-4 py-3 font-medium text-white transition hover:bg-green-700"
        >
          Add Transaction
        </button>
      </form>
    </section>
  );
}

export default TransactionForm;