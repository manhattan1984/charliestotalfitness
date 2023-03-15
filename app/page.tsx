import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <Image
          src="/gym.jpg"
          className="w-full object-cover h-screen"
          sizes="100%"
          height={0}
          width={0}
          alt="weights"
        />
        <div className="absolute h-full w-full top-0 backdrop-brightness-50">
          <div className="flex flex-col items-center justify-center uppercase h-full w-4/5 mx-auto text-white text-center gap-10">
            <p className="text-4xl mt-auto">CHARLIE'S Total FITNESS CENTER</p>
            <p className="text-md">
              Plot 56, 57 Stadium Rd, Rumuola 500102, Port Harcourt, Rivers
            </p>

            <ChevronDownIcon className="h-8 w-8 mt-auto animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
