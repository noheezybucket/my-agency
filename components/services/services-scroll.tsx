"use client";
import React from "react";
import Image from "next/image";
import {StickyScroll} from "@/components/ui/sticky-scroll";

const content = [
    {
        title: "Software Development",
        description:
            "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
            <div className="h-full w-full bg-web bg-cover relative flex items-center justify-center text-white">
                {/*Collaborative Editing*/}
            </div>
        ),
    },
    {
        title: "Graphic Design",
        description:
            "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
            <div className="h-full w-full bg-design bg-cover relative flex items-center justify-center text-white">
                {/*Collaborative Editing*/}
            </div>
        ),
    },
    {
        title: "AI Automation",
        description:
            "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
            <div className="h-full w-full bg-ai bg-cover relative  flex items-center justify-center text-white">
                {/*Collaborative Editing*/}
            </div>
        ),
    },
    {
        title: "Social Media Management",
        description:
            "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
        content: (
            <div className="h-full w-full bg-social bg-cover relative flex items-center justify-center text-white">
                {/*Collaborative Editing*/}
            </div>
        ),
    },

];
export function ServiceScroll() {
    return (
        <div className="p-10">
            <StickyScroll content={content} />
        </div>
    );
}
