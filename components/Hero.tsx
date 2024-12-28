"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Scroll from "./Scroll";
import { TextHoverEffect } from "@/components/ui/type-effect";
import { HeroParallax } from "@/components/ui/hero-parallax";
import {HoverBorderGradient} from "@/components/ui/hover-gradient-border";

export function Hero() {
    return (
        <div className="relative h-[100vh] bg-hero bg-center bg-fixed rounded-b-[10%] border-b border-neutral-700 flex items-center">
            {/*<TextHoverEffect text={"dartisan"} automatic={true} />*/}
            <div className={'section-width space-y-5'} >
                <div>
                    <span className={'text-lg'}>WELCOME TO DIGITAL ARTISAN STUDIO</span>
                    <h1 className={'text-white font-extrabold text-7xl'}>
                        WE CRAFT IMPACTFUL DIGITAL EXPERIENCES THAT SET BRANDS APART.
                    </h1>
                </div>

                <div className={'flex gap-5'}>
                    <div>
                        <HoverBorderGradient
                            containerClassName="rounded-xl border-neutral-500 border-1 "
                            as="button"
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 font-bold"
                        >
                            OUR EXPERTISE
                        </HoverBorderGradient>
                    </div>
                    <div>
                        <HoverBorderGradient
                            containerClassName="rounded-xl border-neutral-500 border-1 "
                            as="button"
                            className="font-bold dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                        >
                            WHO ARE WE ?
                        </HoverBorderGradient>
                    </div>
                </div>


            </div>
            <motion.div
                className="absolute bottom-32 left-[50%] translate-x-[-50%]">
                <Scroll/>
            </motion.div>
        </div>
    );
}
