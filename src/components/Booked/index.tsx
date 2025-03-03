"use client";

import bookPerlin from "@/components/Backgrounds/BookPerlin.webp";
import Icon from "@/components/Icon";
import LinkTooltip from "@/components/LinkTooltip";
import { verifyParams } from "@/lib/helpers";
import { TBookingData } from "@/types";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const drawConfettiShape = (ctx: CanvasRenderingContext2D) => {
   ctx.beginPath();
   for (let i = 0; i < 22; i++) {
      const angle = 0.35 * i;
      const x = (0.2 + 0.5 * angle) * Math.cos(angle);
      const y = (0.2 + 0.5 * angle) * Math.sin(angle);
      ctx.lineTo(x, y);
   }
   ctx.stroke();
   ctx.closePath();
};

const CONFETTI_COLORS = ["#22C55E", "#F97316", "#FF0000", "#A855F7"];
const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
   weekday: "long",
   month: "long",
   day: "numeric",
   hour: "numeric",
   minute: "2-digit",
   hour12: true,
};

const Booked = () => {
   const params = useSearchParams();
   const [showConfetti, setShowConfetti] = useState<boolean>(false);
   const { width, height } = useWindowSize();

   useEffect(() => {
      const shouldShowConfetti =
         width && height && width > 0 && height > 0 && !showConfetti;
      if (shouldShowConfetti) {
         setShowConfetti(true);
      }
   }, [width, height, showConfetti]);

   if (
      !verifyParams<TBookingData>(params, ["attendeeName", "attendeeStartTime"])
   ) {
      return redirect("/");
   }

   const paramsValues = Object.fromEntries(
      [...params.keys()].map((key) => [key, params.get(key)]),
   ) as TBookingData;

   const names = paramsValues.attendeeName.split(" ");
   const formattedDate = new Date(paramsValues.attendeeStartTime)
      .toLocaleString("en-US", DATE_FORMAT_OPTIONS)
      .replace(" at ", " @ ");

   return (
      <>
         {showConfetti && (
            <Confetti
               width={width}
               height={height}
               colors={CONFETTI_COLORS}
               recycle={false}
               drawShape={drawConfettiShape}
            />
         )}
         <div className="m-auto text-center flex flex-col items-center">
            <div className="select-none flex flex-col items-center">
               <Icon />
               <p className="mt-10 leading-[125%] text-center text-16 font-medium tracking-[-2.25%] text-transparent bg-gradient-brand inline-block bg-clip-text">
                  {names[0]}
                  <br />
                  {names.slice(1).join(" ")}
               </p>
            </div>
            <h1 className="mt-50 font-semibold text-center leading-[135%] text-balance tracking-[-2.5%] text-24">
               Your booking was confirmed!
            </h1>
            <p className="mt-10 text-14 font-medium tracking-[-2.25%]">
               <span className="opacity-[0.5]">Chat with you on </span>
               <span className="opacity-[0.65] tracking-normal">
                  {formattedDate}
               </span>
            </p>
            <div className="mt-50">
               <LinkTooltip href="cal.com/vigyme/book" spacing={12} centered>
                  <div className="select-none relative bg-gradient-to-l font-semibold pt-8 pb-9 px-15 transition duration-150 ease-linear will-change-transform hover:scale-[0.95] hover:shadow-md rounded-full tracking-[-2.5%] text-white text-14 from-[#A855F7] from-0% to-75% to-[#F97316] overflow-hidden">
                     <span className="relative z-10">Reschedule</span>
                     <div
                        className="absolute inset-0 scale-[20] z-0 opacity-50 mix-blend-overlay"
                        style={{
                           backgroundImage: `url(${bookPerlin.src})`,
                           backgroundSize: "cover",
                           backgroundPosition: "center",
                        }}
                     />
                  </div>
               </LinkTooltip>
            </div>
         </div>
      </>
   );
};

export default Booked;
