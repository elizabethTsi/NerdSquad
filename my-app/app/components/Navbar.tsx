import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <main className="opacity-70 bg-scheme-600 text-scheme-150 max-w-8xl h-16 font-inter flex items-center justify-center bg-gray-100 gap-8 pr-4 md:pr-10 tracking-widest">
      <div className=" ml-3 flex flex-grow max-w-7xl items-center justify-start">
        <div className="flex flex-row w-4/5 gap-3 text-center">
          <a className="flex" href="/">
            <Image
              src="/images/logo.png"
              alt="Project Logo"
              width={40}
              height={40}
              className="filter invert"
            />
            <h1 className="text-lg text-center mt-2">Railroad Tracks</h1>
          </a>
        </div>{" "}
        <div className="flex flex-row w-full justify-between mr-10">
          <h1 className="text-lg text-black">
            <a href="/">Home</a>
          </h1>
          <h1 className="text-lg text-black">
            <Link href="/reporting">Reporting</Link>
          </h1>
          <h1 className="text-lg">
            <Link href="/backend/path.html">Maps</Link>
          </h1>
        </div>
      </div>
    </main>
  );
}
