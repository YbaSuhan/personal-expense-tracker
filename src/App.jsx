import { useState, useEffect } from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");

    return savedTransactions
      ? JSON.parse(savedTransactions)
      : [];
  });

  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([
      ...transactions,
      transaction
    ]);
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter(
        (transaction) => transaction.id !== id
      )
    );
  };

  return (
    <div className="app">
      {!showProfile ? (
        <>
          <Header
            onProfileClick={() => setShowProfile(true)}
          />

          <main className="mx-auto w-[90%] max-w-6xl py-8">
            <Summary transactions={transactions} />

            <TransactionForm
              addTransaction={addTransaction}
            />

            <TransactionList
              transactions={transactions}
              deleteTransaction={deleteTransaction}
            />
          </main>
        </>
      ) : (
        <main className="min-h-screen bg-gray-50 px-6 py-10">
          <div className="mx-auto max-w-3xl">
            <button
              onClick={() => setShowProfile(false)}
              className="mb-6 rounded-lg bg-green-600 px-4 py-2 font-semibold text-white transition hover:bg-green-700"
            >
              ← Back To Home
            </button>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <div className="mb-8 flex items-center gap-5 border-b pb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-3xl font-bold text-green-700">
                  S
                </div>

                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    Suhan Waiba Tamang
                  </h1>

                  <p className="mt-1 text-gray-500">
                    Personal Account
                  </p>
                </div>
              </div>

              <h2 className="mb-5 text-xl font-bold text-gray-900">
                Personal Information
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-green-50 p-5">
                  <p className="text-sm text-gray-500">
                    📧 Email
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    suhan.expense@example.com
                  </p>
                </div>

                <div className="rounded-2xl bg-green-50 p-5">
                  <p className="text-sm text-gray-500">
                    🎓 Program
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    BSc.IT
                  </p>
                </div>

                <div className="rounded-2xl bg-green-50 p-5">
                  <p className="text-sm text-gray-500">
                    📚 Class
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    F252
                  </p>
                </div>

                <div className="rounded-2xl bg-green-50 p-5">
                  <p className="text-sm text-gray-500">
                    💰 Account Type
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    Personal Finance
                  </p>
                </div>

                <div className="rounded-2xl bg-green-50 p-5">
                  <p className="text-sm text-gray-500">
                    📊 Application
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    Personal Expense Tracker
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;