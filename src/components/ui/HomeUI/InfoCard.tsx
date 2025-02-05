"use client";

import React from "react";
import OutlinedHeader from "@/src/components/ui/OutlinedHeader";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";

const infoCardVariants = cva(
  [
    "2xl:w-[44.688rem] 2xl:h-[29.25rem] md:w-[34rem] md:h-[22rem] sm:w-[22rem] sm:h-[12rem] rounded-xl flex flex-col justify-center items-start text-white sm:p-16 p-10 gap-[1rem]",
  ],
  {
    variants: {
      color: {
        skyBlue: "bg-skyBlue",
        smthGreen: "bg-smthGreen",
        orange: "bg-projectOrange",
      },
    },
  }
);

type infoCardProps = {
  title: string;
  info: string;
  info2?: string;
  color: string;
  headerLabel: string;
} & VariantProps<typeof infoCardVariants>;

const InfoCard: React.FC<infoCardProps> = ({
  title,
  info,
  info2,
  color,
  headerLabel,
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
        },
      }}
      className={infoCardVariants({ color })}
    >
      <OutlinedHeader
        label={headerLabel}
        borderColor="white"
        fontWeight="semibold"
        textColor="white"
      />

      <h2 className="2xl:text-4xl lg:text-2xl font-bold capitalize font-montserrat">
        {title}
      </h2>

      <p className="2xl:text-sm md:text-xs text-xs font-poppins font-light">
        {info}
      </p>

      <p className="2xl:text-sm md:text-xs text-xs font-poppins font-light">
        {info2}
      </p>
    </motion.div>
  );
};

export default InfoCard;
