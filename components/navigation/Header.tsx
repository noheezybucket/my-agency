import { cn } from '@/utils/cn'
import React from 'react'
import Logo from '../Logo'
import { HoverBorderGradient } from "@/components/ui/hover-gradient-border";

const Header = () => {
    return (
        <header className="fixed w-full text-white top-4 z-[999]">
            <div className='section-width flex justify-between items-center rounded-lg py-2 '>
                <Logo />
                <nav>
                    <ul className='flex space-x-5 items-center font-thin'>
                        <li>services</li>
                        <li>about us</li>
                        <li>portfolio</li>

                        <li>
                            <HoverBorderGradient
                                containerClassName="rounded-xl border-neutral-500 border-1 "
                                as="button"
                                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                            >
                                start project
                            </HoverBorderGradient>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>

    )
}

export default Header