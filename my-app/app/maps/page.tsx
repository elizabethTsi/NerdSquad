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
            <p>
              Trustin’ in the map, the star, and the careful timing gave hope to
              those who dared to run. Without these guides, many would be lost
              to fear, caught, or turned back. But with them, the promise of a
              new life shined brighter than any darkness.{" "}
            </p>
          </div>
          {/*Good reasons of maps */}
          <div className="flex gap-10 text-sm w-2/3 flex-col sm:flex-row pl-5 flex-grow justify-evenly ">
            <div className="flex flex-col">
              <div className="border mb-2  rounded-full border-scheme-700 w-20 h-20 items-center justify-center mx-auto">
                <MapPin
                  size={24}
                  className="mt-2 h-4/5 w-4/5 mx-auto my-auto color-scheme-700"
                ></MapPin>
              </div>
              <p className="text-center">
                This humble map be a guide for those seekin’ freedom, showin’
                secret paths and safe places hid from prying eyes. Without it,
                wanderin’ lost could mean capture or worse.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="border mb-2  rounded-full border-scheme-700 w-20 h-20 items-center justify-center mx-auto">
                <Star
                  size={24}
                  className="mt-2 h-4/5 w-4/5 mx-auto my-auto color-scheme-700"
                ></Star>
              </div>
              <p className="text-center">
                The North Star shines bright in the night sky, a true friend to
                those travelin’ by darkness. Its light points the way to
                freedom, a beacon of hope for weary souls.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="border mb-2  rounded-full border-scheme-700 w-20 h-20 items-center justify-center mx-auto">
                <Clock
                  size={24}
                  className="mt-2 h-4/5 w-4/5 mx-auto my-auto color-scheme-700"
                ></Clock>
              </div>
              <p className="text-center">
                Timing is everything when makin’ this perilous journey. Move too
                soon, and you risk being caught; wait too long, and chances slip
                away. The clock keeps watch o’er every step taken.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20"></div>
    </main>
  );
}
