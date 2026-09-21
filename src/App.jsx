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
      <Header />

      <main className="mx-auto w-[90%] max-w-5xl py-8">
        <Summary transactions={transactions} />

        <TransactionForm
          addTransaction={addTransaction}
        />

        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />
      </main>
    </div>
  );
}

export default App;