"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Scroll from "./Scroll";

export function LampDemo() {
    return (
        <div className="relative">

            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-0 bg-gradient-to-b from-white to-bg py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Le changement <br /> c'est now!
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}>
                    <button className="primary-btn">Découvrir Shift Agency</button>
                </motion.div>
            </LampContainer>
            <motion.div
                className="absolute bottom-10 left-[50%] translate-x-[-50%]">

                <Scroll />
            </motion.div>

        </div>
    );
}
