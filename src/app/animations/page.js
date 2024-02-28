"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AnimationPage() {
  return (
    <div>
      <Link
        href="/"
        className="pointer-events-auto ml-8 rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500 w-max"
      >
        Home
      </Link>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        Hey there!
      </motion.div>
      <motion.button
        className="bg-orange-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Fancy button
      </motion.button>
      <motion.div
        className="bg-pink-600"
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
      >
        Draggable box
      </motion.div>
    </div>
  );
}
