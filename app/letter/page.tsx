"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Typewriter from "@/components/typewriter";

export default function LetterPage() {
  const router = useRouter();

  const letter = `My Love ❤️,

From the day you came into my life,
everything started feeling different.

Your smile became my favorite sight,
your voice my favorite sound.

I don’t know what I did to deserve you,
but I promise to never stop loving you.

Forever yours,
— Me 💘`;

  return (
    <div
      className="
        min-h-screen flex items-center justify-center
        bg-gradient-to-br from-rose-100 to-pink-200
        px-4 sm:px-6 py-10 sm:py-12
        relative
      "
    >
      {/* 🔙 Back Button */}
      {/* 🔙 Back Button */}
      <button
        onClick={() => router.push("/")}
        className="
    fixed top-4 left-4
    sm:top-6 sm:left-6
    z-50

    px-3 sm:px-4 py-1.5 sm:py-2
    text-sm sm:text-base

    bg-white/80 backdrop-blur-md
    rounded-xl shadow-lg
    hover:scale-105 transition
    text-gray-700
  "
      >
        ← Back
      </button>

      {/* 🎵 Background Music */}
      <audio autoPlay loop preload="auto">
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {/* 💌 Letter Card */}
      <motion.div
        className="
          w-full max-w-xl sm:max-w-2xl
          bg-white/70 backdrop-blur-lg
          p-6 sm:p-10
          rounded-2xl sm:rounded-3xl
          shadow-2xl text-center
        "
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <h1
          className="
            text-2xl sm:text-3xl md:text-4xl
            font-bold text-pink-600
            mb-6 sm:mb-8
          "
        >
          My Love ❤️
        </h1>

        {/* ✍️ Letter */}
        <div className="text-base sm:text-lg leading-relaxed">
          <Typewriter text={letter} speed={35} />
        </div>

        {/* 🖼️ Photo */}
        <motion.img
          src="bhalo_chhobi.jpg"
          alt="Her Photo"
          className="
            mt-8 sm:mt-10
            rounded-2xl shadow-lg
            w-full
            max-h-[260px] sm:max-h-[400px]
            object-cover
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 8 }}
        />

        {/* 💖 Ending */}
        <motion.h2
          className="
            mt-8 sm:mt-10
            text-lg sm:text-2xl
            font-semibold text-pink-700
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 12 }}
        >
          Will you stay with me forever? ❤️
        </motion.h2>
      </motion.div>
    </div>
  );
}
