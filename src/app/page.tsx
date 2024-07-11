import Image from "next/image";
import Link from 'next/link';
import Hero from "@/comonents/Hero"

export default function App() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
