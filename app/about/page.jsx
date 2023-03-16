import Image from "next/image";
import React from "react";

const Facility = ({ name, src, text }) => {
  return (
    <div className="">
      <p className="text-2xl text-center mb-4">{name}</p>
      <Image
        src={src}
        height={0}
        width={0}
        sizes="100%"
        className="h-auto w-full mb-4"
      />
      <p className="font-serif mx-4 text-lg">{text}</p>
    </div>
  );
};

const page = () => {
  const facilities = [
    {
      name: "Pool",
      src: "/pool.jpg",
      text: "We have a world class swimming, same size used in the olympics, all include in our membership package.",
    },
    {
      name: "Resturant",
      src: "/resturant.jpg",
      text: "After a good workout, a healthy meal is required, branch into our restuarant and enjoy a five star meal. You deserve it.",
    },
    {
      name: "Gym",
      src: "/gym.jpg",
      text: "We have a standard and fully equipped gym, no matter your size or goals, we have the equipment just for you.",
    },
    {
      name: "Coaches",
      src: "/lifting-guy.jpg",
      text: "We have the best coaches available to train you to achieve all your body goals.",
    },
  ];
  return (
    <div className="">
      <p className="text-4xl mt-16 pt-2 mx-4">About</p>
      <p className="mx-4 text-lg my-4">
        Charlie&rsquo;s Total Fitness Center has been getting people strong since we
        were established in 2009. We founded our gym to be a second home for all
        of our athletes. Whether you weight lift everyday, or you’ve never
        stepped into a gym before, Charlie&rsquo;s Total Fitness Center can help get
        you strong, fast and flexible. You can train in-house or remotely. We
        are located at Plot 56, 57 Stadium Rd, Rumuola 500102, Port Harcourt,
        Rivers . We are a fully equipped, Total Fitness facility that offers Key
        Card access, the first and only of its kind in Port Harcourt!
      </p>
      <p className="mt-4 mx-4 font-sans text-3xl">Our Facilities</p>
      <div className="my-8 flex flex-col gap-4">
        {facilities.map((facility, index) => (
          <Facility {...facility} key={index} />
        ))}
      </div>
    </div>
  );
};

export default page;
