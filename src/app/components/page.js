"use client";
import { motion } from "framer-motion";

//this how to create an animation as a function that can be exported and used elsewhere as a component (see post page). Works on the children the component is wrapped around.
export function AnimateIn({ children }) {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0, scale: 0.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
