"use client";

import React from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";
import Link from "next/link";

const buttonVariants = cva(
  [
    "sm:w-[10rem] sm:h-9 w-[6rem] h-4 sm:text-base text-xs rounded-full inline-flex justify-center items-center p-4 transition ease-in-out duration-150 cursor-pointer capitalize",
  ],
  {
    variants: {
      color: {
        skyBlue: "bg-skyBlue",
        smthGreen: "bg-smthGreen",
      },
    },
  }
);

type buttonProps = {
  label: string;
  color: string;
  href: string;
} & VariantProps<typeof buttonVariants>;

const Button: React.FC<buttonProps> = ({ label, color, href }) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
      whileTap={{ scale: 0.8 }}
      className={buttonVariants({ color })}
    >
      <Link href={href}>{label}</Link>
    </motion.div>
  );
};

export default Button;
