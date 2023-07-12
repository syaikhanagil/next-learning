'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleLogin = () => {
    console.log('Email =', email);
    console.log('Password =', password);
  };

  return (
    <div className="flex min-h-screen flex-col justify-center">
      <div className="w-full max-w-md mx-auto">
        <input
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
          type="email"
          placeholder="Email"
          className="block w-full rounded-lg h-10 mb-6 outline-none px-3 focus:border focus:border-red-500"
        />
        <div id="group" className="relative flex flex-row items-center mb-6">
          <div className="flex-1">
            <input
              value={password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
              type={isShow ? 'text' : 'password'}
              placeholder="Password"
              className="block w-full rounded-lg h-10 outline-none px-3 focus:border focus:border-red-500"
            />
            <div
              onClick={() => setIsShow((e) => !e)}
              className="absolute right-4 top-[50%] translate-y-[-50%] h-6 w-6 cursor-pointer">
              <Image
                alt="Eye"
                width={24}
                height={24}
                src="/eye.svg"
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => handleLogin()}
          type="button"
          className="block w-full rounded-lg h-10 outline-none px-3 text-red-500 border border-red-400 bg-white hover:bg-red-500 hover:text-white transition-all duration-300">
          Login
        </button>

        <hr className="my-5 border-blue-900" />
      </div>
    </div>
  );
}