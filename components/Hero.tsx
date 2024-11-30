"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Scroll from "./Scroll";
import { TextHoverEffect } from "@/components/ui/type-effect";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function Hero() {
    return (
        <div className="relative h-[100vh] bg-hero bg-center bg-fixed rounded-b-[10%] border-b border-neutral-700">
            <TextHoverEffect text={"d'artisan"} automatic={true} />
            {/* <motion.div
                className="absolute bottom-32 left-[50%] translate-x-[-50%]">
                <Scroll />
            </motion.div> */}
        </div>
    );
}
