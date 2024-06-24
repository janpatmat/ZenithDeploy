"use client";

import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-aquaBlue relative">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 1 }}
        className="w-[50%] h-auto flex flex-col gap-2 justify-center items-center"
      >
        <h4 className="font-medium text-xl uppercase">here at zenith</h4>
        <h1 className="text-6xl font-bold">We are here to help.</h1>
        <p className="text-center ">
          We can streamline the budgeting process of your project with precise
          pricing calculations tailored specifically to your needs.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="absolute right-60 bg-red-500 w-16 h-16 rounded-full"
      ></motion.div>
    </div>
  );
};

export default page;