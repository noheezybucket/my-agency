import React from 'react'
import { HoverBorderGradient } from "@/components/ui/hover-gradient-border";
import { ServiceScroll } from "@/components/services/services-scroll";

const services = [
    {
        title: 'Software Development',
        classname: `bg-web h-[35vh] bg-cover relative rounded-xl`
    },
    {
        title: 'Branding & Design',
        classname: `bg-design h-[35vh] bg-cover relative rounded-xl`

    },
    {
        title: 'Social Media Management',
        classname: `bg-social h-[35vh] bg-cover relative rounded-xl`

    },
    {
        title: 'AI Automation',
        classname: `bg-ai h-[35vh] bg-cover relative rounded-xl`

    },
]

const Services = () => {
    return (
        <section>
            <div className="section-width rounded-lg h-[50vh] space-y-10">
                <div>
                    <h2 className="section-title">
                        OUR EXPERTISE
                    </h2>
                    <p className={'font-thin text-justify text-lg'}>
                        Discover how we can elevate your brand.
                    </p>
                </div>

                <div className={'grid grid-cols-2 gap-10'}>
                    {
                        services.map((service, index) => (
                            <div key={index} className={service.classname}>
                                <div className={'absolute w-full h-full bg-black/50 z-0'}></div>
                                <div className={'p-5 rounded-xl flex flex-col justify-between h-full'}>
                                    <div className={' z-50'}>
                                        <h2 className={'text-3xl font-bold'}>
                                            {service.title}
                                        </h2>
                                        <ul className={'list-inside list-disc'}>
                                            <li>bullet one</li>
                                            <li>bullet two</li>

                                        </ul>
                                    </div>

                                    <div>
                                        <HoverBorderGradient
                                            containerClassName="rounded-xl border-neutral-500 border-1"
                                            as="button"
                                        // className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                                        >
                                            See Process & Pricing
                                        </HoverBorderGradient>
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