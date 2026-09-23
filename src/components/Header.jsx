function Header({ onProfileClick }) {
  return (
    <header className="relative overflow-hidden rounded-b-3xl bg-gradient-to-br from-green-800 via-green-600 to-emerald-500 px-6 py-8 text-white shadow-lg">
      <div className="absolute -right-10 -top-16 text-[180px] font-bold text-white/5">
        ₹
      </div>

      <div className="absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-3 inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wider text-green-50 backdrop-blur-sm">
          PERSONAL FINANCE
        </div>

        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-3xl shadow-sm backdrop-blur-sm">
              💰
            </div>

            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Expense Tracker
              </h1>

              <p className="mt-1 text-sm text-green-50 sm:text-base">
                Manage your income and expenses easily
              </p>
            </div>
          </div>

          <button
            onClick={onProfileClick}
            className="flex shrink-0 items-center gap-3 rounded-2xl bg-white/15 px-4 py-3 text-left shadow-sm backdrop-blur-sm transition hover:bg-white/25"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg font-bold text-green-700">
              S
            </div>

            <div>
              <p className="text-xs font-medium text-green-100">
                Personal Account
              </p>

              <p className="font-semibold">
                Suhan
              </p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;