import React from 'react'
import { HoverBorderGradient } from "@/components/ui/hover-gradient-border";
import { ServiceScroll } from "@/components/services/services-scroll";
import {IconBrush, IconDeviceMobile, IconMicrophone2, IconWorldCode} from "@tabler/icons-react";

const services = [
    {
        title: 'Software Development',
        classname: `rounded-xl border border-neutral-700 overflow-hidden`,
        details: ['Landing page', 'E-commerce website', 'Mobile Application [ iOS, Android ]'],
        icon: <IconWorldCode size={45} stroke={1.3} color={'black'}/>
    },
    {
        title: 'Branding & Design',
        classname: `rounded-xl border border-neutral-700 overflow-hidden`,
        details: ['Branding', 'Graphic Design', 'Web Design'],
        icon: <IconBrush size={45} stroke={1.3} color={'black'}/>

    },
    {
        title: 'Social Media',
        classname: `rounded-xl  border border-neutral-700 overflow-hidden`,
        details: ['Content Creation', 'Social Media Management', 'Campaign'],
        icon: <IconDeviceMobile size={45} stroke={1.3} color={'black'}/>
    },
    {
        title: 'Podcast',
        classname: `rounded-xl border border-neutral-700 overflow-hidden`,
        details: ['Audio/Video Recording', 'Brainstorming', 'Publish'],
        icon: <IconMicrophone2 size={45} stroke={1.3} color={'black'}/>
    },
]

const Services = () => {
    return (
        <section>
            <div className="section-width rounded-lg  space-y-10 ">

                {/*<div className={'border-b border-neutral-700 pb-3'}>*/}
                {/*    <h2 className="section-title text-center">*/}
                {/*        OUR EXPERTISE*/}
                {/*    </h2>*/}
                {/*    <p className={'font-thin text-center text-lg'}>*/}
                {/*        Discover how we can elevate your brand.*/}

                {/*    </p>*/}
                {/*</div>*/}

                <div className={'grid lg:grid-cols-2 justify-center  gap-10'}>
                    {
                        services.map((service, index) => (
                            <div key={index} className={`${service.classname} flex p-5 gap-5 z-0`}>
                                {/*<div className={'absolute w-full h-full bg-black/50 z-0'}></div>*/}

                                <div className={'rounded-xl flex flex-col justify-between h-full'}>
                                    <div className={'space-y-5'}>
                                        <div className={'flex items-center gap-2'}>
                                            <div className={'bg-white rounded-xl p-1'}>
                                                {service.icon}
                                            </div>
                                            <h2 className={'text-3xl font-bold'}>
                                                {service.title}
                                            </h2>
                                        </div>

                                        <ul className={'list-inside list-disc text-xl '}>
                                        {
                                                service.details.map((detail, index) => (
                                                    <li key={index}>{detail}</li>
                                                ))
                                            }

                                        </ul>
                                        <div>

                                            <HoverBorderGradient
                                                containerClassName="rounded-xl border-neutral-500 border-1 "
                                                as="button"
                                                className="font-bold uppercase dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                                            >
                                                See Process & Pricing

                                            </HoverBorderGradient>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Services