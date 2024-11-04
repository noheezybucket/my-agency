import { cn } from '@/utils/cn'
import React from 'react'
import Logo from '../Logo'
import {HoverBorderGradient} from "@/components/ui/hover-gradient-border";

const Header = () => {
    return (
        <header className="fixed z-50 w-full text-white top-4">
            <div className='section-width flex justify-between items-center rounded-lg p-2 bg-white/10 backdrop-blur'>
                <Logo />
                <nav>
                    <ul className='flex space-x-5 items-center font-thin'>
                        <li>services</li>
                        <li>about us</li>
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