"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center text-center px-6
                 bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-pink-700"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Hi Love ❤️
      </motion.h1>

      <motion.p
        className="mt-6 text-lg text-gray-700 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        
        amar moner kotha gulo ekta chhoto surprise te tule dhorte chai. <br />
      </motion.p>

      <motion.button
        onClick={() => router.push("/letter")}
        className="mt-10 px-8 py-3 bg-pink-500 text-white rounded-2xl shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        Open the Letter 💌
      </motion.button>
    </motion.div>
  );
}
