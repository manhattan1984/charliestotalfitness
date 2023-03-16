import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Packages from "@/app/(components)/Packages";

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
            <p className="text-4xl mt-auto">CHARLIES Total FITNESS CENTER</p>
            <p className="text-md">
              Plot 56, 57 Stadium Rd, Rumuola 500102, Port Harcourt, Rivers
            </p>

            <ChevronDownIcon className="h-8 w-8 mt-auto animate-pulse" />
          </div>
        </div>
      </div>
      {/* About */}
      <div className="mx-4 mt-4">
        <p className="text-center text-3xl mb-4 font-medium">
          About Charlie&rsquo;s Total Fitness Center
        </p>
        <p className="mb-4 font-serif">
          Charlie&rsquo;s Total Fitness Center has been getting people strong since we
          were established in 2009. We founded our gym to be a second home for
          all of our athletes. Whether you weight lift everyday, or you’ve never
          stepped into a gym before, Charlie&rsquo;s Total Fitness Center can help get
          you strong, fast and flexible. You can train in-house or remotely. We
          are located at Plot 56, 57 Stadium Rd, Rumuola 500102, Port Harcourt,
          Rivers . We are a fully equipped, Total Fitness facility that offers
          Key Card access, the first and only of its kind in Port Harcourt!
        </p>
        <Image
          src="/cool-weights.jpg"
          height={0}
          width={0}
          className="h-auto w-full mb-8 brightness-90"
          sizes="100%"
          alt="weights"
        />
        <a
          className="text-blue-600 border border-blue-600 p-2"
          href="https://wa.me/07062518233"
        >
          Get In Touch
        </a>
      </div>
      {/* Hours */}
      <div className="mt-4">
        <p className="text-center text-3xl font-medium">Hours</p>
        <div className="text-center mt-4 mb-8 font-serif">
          <p>Gym Hours</p>
          <p>Mon - Sun</p>
          <p>6:00am - 10:00pm</p>
        </div>
        <Image
          src="/cool-guy.jpg"
          className="h-auto w-full brightness-90 object-center"
          sizes="100%"
          alt="cool guy"
          height={0}
          width={0}
        />
      </div>
      <Packages />
    </div>
  );
}
