"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Typewriter from "@/components/typewriter";

export default function LetterPage() {
  const router = useRouter();

  const letter = `
agar shaadi ke baad bhi koi ladki apni pati se jyada krishna se pyar kere to...

🥰🥰🥰
`;

  return (
    <div
      className="min-h-screen flex items-center justify-center
                 bg-gradient-to-br from-rose-100 to-pink-200
                 px-6 py-12 relative"
    >
      {/* 🔙 Back Button */}
      <button
        
        onClick={() => router.push("/")}
        className="absolute top-6 left-6 text-black/70
                   px-4 py-2 rounded-xl
                   bg-white/70 backdrop-blur-md
                   shadow hover:scale-105 transition"
      >
        ← Back
      </button>

      {/* 🎵 Background Music */}
      <audio autoPlay loop preload="auto">
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {/* 💌 Letter Card */}
      <motion.div
        className="max-w-2xl bg-white/70 backdrop-blur-lg
                   p-10 rounded-3xl shadow-2xl text-center"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-bold text-pink-600 mb-8">🫶</h1>

        {/* ✍️ Typewriter Letter */}
        <Typewriter text={letter} speed={35} />

        {/* 🖼️ Photo */}
        <motion.img
          src="bhalo_chhobi.jpg"
          alt="Her Photo"
          className="mt-10 rounded-2xl shadow-lg
                     max-h-[400px] object-cover mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 8 }}
        />

        {/* 💖 Ending Message */}
        <motion.h2
          className="mt-10 text-2xl font-semibold text-pink-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 12 }}
        >
         aapni ki sayantaner roome ektu dushtumi korte chan?
        </motion.h2>
      </motion.div>
    </div>
  );
}
