"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <motion.div
        animate={{ fontSize: "50px", color: "purple" }}
        initial={true}
      >
        Wedding Manager
      </motion.div>
      <motion.div
        className="text-lg mt-20	 text-fuchsia-500"
        animate={{ color: "rgb(217 70 239)" }}
      >
        Crafting excellence, your website is in the making. Patience, please.
      </motion.div>
    </main>
  );
}
