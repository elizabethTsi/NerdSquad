import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <main className="opacity-70  pt-20 pb-5 bg-scheme-600 text-scheme-150 max-w-8xl max-h-2xl font-inter flex items-center justify-start bg-gray-100 gap-8">
      <div className="flex flex-row w-4/5 gap-3 text-center">
        <Image
          src="/images/projectLogo.png"
          alt="Project Logo"
          width={50}
          height={50}
        />
        <h1 className="text-xl text-center mt-3">ProjectName</h1>
      </div>
      <div className="flex flex-row w-full justify-between mr-10">
        <h1 className="text-xl text-black">
          <a href="/">Home</a>
        </h1>
        <h1 className="text-xl text-black">
          <Link href="/reporting">Reporting</Link>
        </h1>
        <h1 className="text-xl text-black">
          <Link href="/about">Maps</Link>
        </h1>
      </div>
    </main>
  );
}
