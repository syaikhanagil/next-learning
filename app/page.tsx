import Link from 'next/link';

export default function Page() {
  return (
    <main className="relative">
      <span>Halaman Home</span>
      <Link className="block" href="/login">Login</Link>
    </main>
  )
}
