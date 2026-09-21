function Header() {
  return (
    <header className="bg-green-600 px-6 py-8 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold">
          Expense Tracker
        </h1>

        <p className="mt-2 text-green-100">
          Manage your income and expenses easily
        </p>
      </div>
    </header>
  );
}

export default Header;