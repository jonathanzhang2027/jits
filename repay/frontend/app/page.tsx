import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-xl font-bold">Repay</h1>
        <div className="flex gap-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-grow items-center justify-center flex-col">
        <h2 className="text-3xl font-bold">Welcome to Repay</h2>
        <h3 className="text-2xl mt-4">"just gimme my money"</h3>
      </main>
    </div>
  );
}
