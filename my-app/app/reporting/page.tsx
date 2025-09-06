import Image from "next/image";
import Link from "next/link";
import { Archive, Shield, Users, MapPin, Clock, Star } from "lucide-react";

export default function Reporting() {
  return (
    <main className="font-inter flex flex-col items-center justify-between gap-10 opacity-65 bg-center bg-[url('/images/backgroundImage.jpg')]  pt-20 min-h-screen">
      <div className="mb-10 flex flex-row items-center">
        <div className="flex flex-col justify-between flex-grow h-full gap-3">
          <h1 className="text-6xl font-inter text-center font-bold text-blue-600 ">
            Found a new safe house?
          </h1>
        </div>
      </div>

      {/*How the reporting works */}
      <div className="flex flex-col w-full bg-scheme-700 flex-grow py-4">
        <h1 className="pl-8 pt-6 text-scheme-150 font-bold uppercase text-4xl mb-4 font-inter">
          <Link href="\reporting">Reporting</Link>
        </h1>
        <div className="flex flex-row justify-between px-6">
          <div className="ml-2 flex flex-col">
            <h1 className="text-2xl text-scheme-200 mb-2">Location!</h1>
            <input
              type="text"
              className="h-10 p-4 rounded-lg border border-scheme-600"
              placeholder="Location"
            ></input>
          </div>
          <div className="border border-scheme-150 bg-gradient-to-tr from-scheme-300 via-scheme-200 to-scheme-175  w-1/3 rounded-lg p-5">
            <h1 className="text-2xl font-bold text-center mb-4">
              Why does this matter?
            </h1>

            <p>
              Reportin’ fresh hiding spots and friendly houses helped keep the
              journey secret and ever-changing, so pursuers wouldn’t find the
              same trails. This news kept the network strong, and gave hope that
              freedom’s road would always have a place to rest.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20"></div>
    </main>
  );
}
