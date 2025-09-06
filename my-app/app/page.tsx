import Image from "next/image";
import Link from "next/link";
import { Archive, Shield, Users, MapPin, Clock, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="opacity-50 bg-center bg-[url('/images/backgroundImage.jpg')] tracking-wider font-inter flex flex-col items-center justify-between gap-10 pt-20 min-h-screen">
      <div className="mb-20 flex flex-row items-center">
        <Image
          src="/images/logo.png"
          alt="Project Logo"
          width={100}
          height={100}
          className="m-4"
        />
        <div className="flex flex-col justify-between flex-grow h-full gap-3">
          <h1 className="text-6xl font-inter font-bold text-blue-600 ">
            Railroad Tracks
          </h1>
          <p className="font-inter pl-2">Find your way to freedom</p>
        </div>
      </div>

      {/*How the reporting works */}
      <div className="flex flex-col w-full bg-scheme-700 flex-grow py-4">
        <h1 className="pl-8 pt-6 text-scheme-200 font-bold uppercase text-4xl mb-4 font-inter">
          <Link href="\reporting">Reporting</Link>
        </h1>
        <div className="flex flex-row justify-between px-6">
          <p className="text-scheme-150 text-lg w-2/3 pr-5 text-center">
            To report a location to the Underground Railroad, you must act with
            absolute discretion and trust. First, ensure the place is truly
            safe—no patrols, no eyes watching. Then, quietly pass the
            information to a trusted conductor or messenger using coded
            language, never speaking openly. Be clear but brief: describe the
            location, how long it’s safe, and what supplies are available, using
            signals like a lit lantern or a patterned quilt if needed. Avoid
            using names, and only share details with those confirmed to be part
            of the network. Once the message is delivered, fade back into the
            background—because in this resistance, silence and secrecy save
            lives.
          </p>
          <div className="border border-scheme-150 bg-gradient-to-tr from-scheme-300 via-scheme-200 to-scheme-175  w-1/3 rounded-lg p-5">
            <h1 className="text-2xl font-bold text-center mb-6">
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
