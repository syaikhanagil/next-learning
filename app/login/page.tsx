export default function Page() {
  return (
    <div className="flex min-h-screen flex-col justify-center">
      <div className="w-full max-w-md mx-auto">
        <input type="email" placeholder="Email" className="block w-full rounded-lg h-10 mb-6 outline-none px-3 focus:border focus:border-red-500" />
        <input type="password" placeholder="Password" className="block w-full rounded-lg h-10 mb-6 outline-none px-3 focus:border focus:border-red-500" />
        <button type="button" className="block w-full rounded-lg h-10 mb-6 outline-none px-3 bg-indigo-500">Login</button>
      </div>
    </div>
  );
}