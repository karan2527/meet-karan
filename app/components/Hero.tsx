"use client";

import type { HeroStat } from "./types";
import Typewriter from "./Typewriter";
import HangingSpider from "./HangingSpider";
import CyberDino from "./CyberDino";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 items-center gap-10 py-8 sm:py-12 md:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">

      {/* ================================================= */}
      {/* LEFT SIDE */}
      {/* ================================================= */}

      <div className="order-2 lg:order-1">

        {/* Small heading */}
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.32em] text-zinc-500 font-mono">
          Cybersecurity Engineer • B.E. CSE (Cybersecurity), DSCE
        </p>

        {/* Main heading */}
        <h1 className="max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.06em] text-white sm:text-5xl lg:text-[4rem]">
          Hi, I&apos;m Karan Jain!
        </h1>

        {/* Nickname label */}
        <p className="mt-3 font-mono text-xs sm:text-sm tracking-[0.2em] text-[#00ff66]/80 uppercase">
          AKA Manware
        </p>

        {/* ================================================= */}
        {/* TYPEWRITER */}
        {/* ================================================= */}

        <div className="mt-6 sm:mt-8">

          {/* < I'm > */}
          <div className="font-mono text-xl font-medium sm:text-2xl md:text-3xl">

            <span className="text-[#00ff66]">
              &lt;
            </span>

            <span className="mx-2 sm:mx-3 text-white">
              I&apos;m
            </span>

            <span className="text-[#00ff66]">
              &gt;
            </span>

          </div>

          {/* Dynamic role */}
          <div className="mt-2 sm:mt-3">
            <Typewriter />
          </div>

        </div>

        {/* ================================================= */}
        {/* DESCRIPTION */}
        {/* ================================================= */}

        <p className="mt-6 max-w-xl text-base leading-7 sm:text-lg sm:leading-8 text-zinc-400">
          I&apos;m Karan, a computer science student specializing in
          cybersecurity - researching post-quantum cryptography,
          building secure tools, and breaking things at hackathons.
        </p>

        {/* ================================================= */}
        {/* BUTTONS + CYBER DINO */}
        {/* ================================================= */}

        <div className="mt-8 flex flex-wrap items-center gap-4">

          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-xs sm:text-sm font-medium text-black transition duration-200 hover:bg-zinc-200 hover:scale-105 active:scale-95"
          >
            View Projects
          </a>

          <a
            href="mailto:karanjain2527@gmail.com"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs sm:text-sm font-medium text-white transition duration-200 hover:border-[#00ff66]/40 hover:text-[#00ff66] hover:bg-[#00ff66]/5 active:scale-95"
          >
            Get In Touch
          </a>

          <div className="ml-2 hidden sm:block">
            <CyberDino />
          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* RIGHT SIDE / IMAGE + HANGING SPIDER */}
      {/* ================================================= */}

      <div className="order-1 flex justify-center lg:order-2">

        {/* Image container with hanging spider */}
        <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-none rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-3 shadow-2xl transition duration-500 hover:border-[#00ff66]/30">

          {/* Hanging Spider from Header/Top */}
          <HangingSpider />

          <div className="overflow-hidden rounded-[1.6rem] relative">
            <img
              src="/images/profile.jpg"
              alt="Karan Jain profile"
              className="h-[320px] sm:h-[400px] lg:h-[460px] w-full object-cover object-[center_35%]"
            />

            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

            {/* Mobile Dino Corner */}
            <div className="absolute bottom-3 right-3 sm:hidden z-10">
              <CyberDino />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}