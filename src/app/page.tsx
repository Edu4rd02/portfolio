"use client";

import { FlipCard } from "@/components/flipCard";

export default function Home() {

  return (
    <div className="dark">
      <div className="min-h-screen items-center justify-center">
        <div className="w-4xl animate-border-run rounded-lg bg-conic/[from_var(--border-angle)] from-black-500 via-blue-500 to black-500 p-[2.5px]">
          <div className="p-10 rounded-lg bg-white">
            <h1 className="text-4xl font-bold text-center">Becerra Flores Jose Eduardo</h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <FlipCard />
          <FlipCard />
        </div>
      </div>
    </div>
  );
}
