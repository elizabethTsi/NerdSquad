import Image from "next/image";
import Link from "next/link";
import { Archive, Shield, Users, MapPin, Clock, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="font-inter flex flex-col items-center justify-between gap-10 opacity-65 bg-center bg-[url('/images/backgroundImage.jpg')] pt-20 min-h-screen">
      <div className="mb-10 flex flex-row items-center">
        <div className="flex flex-col justify-between flex-grow h-full gap-3">
          <h1 className="text-6xl font-inter text-center font-bold text-blue-600 ">
            FIND YOUR FREEDOM!
          </h1>
        </div>
      </div>

      {/*How the maps works */}
      <div className="flex flex-col w-full border border-scheme-200 bg-scheme-300 flex-grow py-4">
        <h1 className="pl-8 pt-6 text-scheme-150 font-bold uppercase text-4xl mb-4 font-inter">
          <Link href="\maps">Our Maps</Link>
        </h1>
        <div className="font-inter flex flex-row justify-between px-6 items-center">
          <div className="border border-scheme-150 bg-gradient-to-tr from-scheme-300 via-scheme-200 to-scheme-175  w-1/3 rounded-lg p-5">
            <h1 className="text-2xl font-bold text-center">
              Why does this matter?
            </h1>
            <p>find maps blah </p>
          </div>
          {/*Good reasons of maps */}
          <div className="flex flex-row pl-5 flex-grow  justify-evenly ">
            <div className="flex flex-col">
              <div className="border rounded-full border-scheme-700 w-10 h-10 items-center justify-center mx-auto">
                <MapPin
                  size={24}
                  className="mt-1 h-4/5 w-4/5 mx-auto my-auto color-scheme-700"
                ></MapPin>
              </div>
              <p className="text-center">Find your way safely</p>
            </div>
            <div className="flex flex-col">
              <div className="border rounded-full border-scheme-700 w-10 h-10 items-center justify-center mx-auto">
                <Star
                  size={24}
                  className="mt-1 h-4/5 w-4/5 mx-auto my-auto color-scheme-700"
                ></Star>
              </div>
              <p className="text-center">Guarantee</p>
            </div>
            <div className="flex flex-col">
              <div className="border rounded-full border-scheme-700 w-10 h-10 items-center justify-center mx-auto">
                <Clock
                  size={24}
                  className="mt-1 h-4/5 w-4/5 mx-auto my-auto color-scheme-700"
                ></Clock>
              </div>
              <p className="text-center">Fastest path</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20"></div>
    </main>
  );
}
