import React from 'react';
import {HoverBorderGradient} from "@/components/ui/hover-gradient-border";
import Image from "next/image";

import def from "@/public/assets/hero.png"

const projects = [
    {
        title:"MyButleg",
        type: "E-commerce Website",
        btnText: "Visit Website",
        btnLink: "https://mybutleg.dev",
        src: def,
    },
    {
        title:"Ndoura Traiteur",
        type: "E-commerce Website",
        btnText: "Visit Website",
        btnLink: "https://mybutleg.dev",
        src: def,
    },
    {
        title:"RRTACU",
        type: "Landing page",
        btnText: "Visit Website",
        btnLink: "https://mybutleg.dev",
        src: def,
    },
]
const Portfolio = () => {
    return (
        <section>
            <div className={'section-width space-y-5'}>
                <div className={'border-b border-neutral-700 pb-3 flex justify-between items-center'}>
                    <div>
                        <h2 className="section-title">
                            DISCOVER OUR WORK
                        </h2>
                        <p className={'font-thin text-justify text-lg'}>
                            We helped them elevate their brand.
                        </p>
                    </div>
                    <div>
                        <HoverBorderGradient
                            containerClassName="rounded-xl border-neutral-500 border-1 "
                            as="button"
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 font-bold"
                        >
                            SEE ALL PROJECTS
                        </HoverBorderGradient>
                    </div>
                </div>

                <div className={'gap-10 grid lg:grid-cols-3'}>
                    {
                        projects.map((project, index) => (
                            <div className={'flex flex-col gap-10 relative'} key={index} >
                                <div className={'w-full'}>
                                    <Image src={project.src} alt={"alt"} width={500} height={500} placeholder={"blur"}
                                           className={'border rounded-lg border-neutral-700'}/>
                                </div>
                                <div className={'space-y-2 absolute bottom-5 left-5'}>
                                    <h2 className={'font-bold text-4xl'}>{project.title}</h2>
                                    <h3 className={'text-2xl'}>{project.type}</h3>
                                    <HoverBorderGradient
                                        containerClassName="rounded-xl border-neutral-500 border-1 "
                                        as="button"
                                        className="uppercase dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 font-bold"
                                    >
                                        {project.btnText}
                                    </HoverBorderGradient>

                                </div>

                            </div>
                        ))
                    }

                </div>


            </div>

        </section>
    );
};

export default Portfolio;