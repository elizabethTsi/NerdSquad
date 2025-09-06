import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <main className="opacity-70 bg-scheme-600 text-scheme-150 max-w-8xl h-16 font-inter flex items-center justify-start bg-gray-100 gap-8 pr-4 md:pr-10 tracking-widest">
      <div className="flex flex-row w-4/5 gap-3 text-center">
        <Image
          src="/images/projectLogo.png"
          alt="Project Logo"
          width={40}
          height={40}
        />
        <h1 className="text-lg text-center mt-2">ProjectName</h1>
      </div>
      <div className="flex flex-row w-full justify-between mr-10">
        <h1 className="text-lg text-black">
          <a href="/">Home</a>
        </h1>
        <h1 className="text-lg text-black">
          <Link href="/reporting">Reporting</Link>
        </h1>
        <h1 className="text-lg">
          <Link href="/maps">Maps</Link>
        </h1>
      </div>
    </main>
  );
}
