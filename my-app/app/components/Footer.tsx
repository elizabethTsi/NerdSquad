import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <main className="flex-col opacity-70 pt-6 bg-scheme-600 text-scheme-150 font-inter flex items-center justify-start">
      <p className="px-5">
        Railroad Tracks is a trusted network for those seekin’ freedom, guidin’
        weary souls along secret paths and safe havens. By reportin’ hidin’
        places with care and coded signs, the brave keep the route ever-changing
        and well-guarded from watchful eyes. Our maps, the North Star’s bright
        light, and the right timing are all part of the journey—givin’ hope and
        direction through the dark night. Together, these tools light the way to
        liberty and a new life beyond the chains.
      </p>
      <div className="w-full opacity-70  pt-6 pb-5 bg-scheme-600 text-scheme-150 max-h-2xl font-inter flex items-center justify-start bg-gray-100 gap-8">
        <div className="flex flex-row w-4/5 gap-3 text-center">
          <Image
            src="/images/logo.png"
            alt="Project Logo"
            width={50}
            height={50}
            className="filter invert"
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
      </div>
    </main>
  );
}
