"use client";

import { Counter } from "./components/Counter/Counter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-60 p-24">
      <h1 className="text-5xl">Redux Toolkit Counter App</h1>
      <Counter />
    </main>
  );
}
