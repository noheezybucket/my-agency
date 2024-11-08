import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandBehance,
    IconBrandGithub, IconBrandInstagram,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export function Dock() {
    const links = [
        {
            title: "Behance",
            icon: (
                <IconBrandBehance className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        // {
        //     title: "Twitter",
        //     icon: (
        //         <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        //     ),
        //     href: "#",
        // },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
    ];
    return (
        <div className="flex items-center justify-center h-[8rem] w-full">
            <FloatingDock
                items={links}
            />
        </div>
    );
}
