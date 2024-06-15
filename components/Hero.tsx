"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/Aurora";

export function AuroraBackgroundDemo() {
    return (
        <AuroraBackground>
            <div className="mx-auto w-10/12 flex flex-row justify-between">

                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4  justify-center items-center"
                >
                    <div className="text-3xl md:text-6xl font-bold dark:text-white leading-5 text-center">
                        Choisissez-nous pour une transformation digitale assurée.
                    </div>
                    <div className="font-extralight text-base md:text-2xl dark:text-neutral-200 py-4">
                        And this, is chemical burn.
                    </div>
                    <button className="primary-btn">
                        Découvrez Shift
                    </button>
                </motion.div>
            </div>

        </AuroraBackground>
    );
}
