'use client'

import { cn } from '@/utils/cn'
import React, {useState} from 'react'
import Logo from '../Logo'
import { HoverBorderGradient } from "@/components/ui/hover-gradient-border";
import { IconX, IconMenu2} from "@tabler/icons-react";


const Header = () => {

    const [openMenu, setOpenMenu] = useState(false)
    return (
        <header className="fixed w-full text-white top-4 z-[999] ">
            <div className='section-width flex justify-between items-center rounded-lg py-2 bg-white/10 p-2 backdrop-blur '>
                <Logo />
                <div>
                    <div className='flex space-x-5 items-center font-thin'>

                        <div className={'hidden lg:block'}>
                            <HoverBorderGradient
                                containerClassName="rounded-xl border-neutral-500 border-1 "
                                as="button"
                                className="font-bold dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                            >
                                BOOK A CALL
                            </HoverBorderGradient>
                        </div>

                        <div>
                            <HoverBorderGradient
                                onClick={()=> setOpenMenu((prev)=>!prev)}

                                containerClassName="rounded-xl border-neutral-500 border-1 "
                                as="button"
                                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                            >
                                {
                                    !openMenu ?
                                        <IconMenu2 size={26}/>
                                        : <IconX size={26}/>
                                }
                            </HoverBorderGradient>

                        </div>
                    </div>

                </div>
            </div>

            {
                openMenu &&
                <nav className='section-width flex justify-center items-center rounded-lg py-2 bg-white/10 p-2 backdrop-blur mt-4 h-[80vh]'>
                    <ul className='items-center font-thin text-2xl lg:text-4xl leading-[2] lg:leading-[2] uppercase'>
                        <li>homepage</li>
                        <li>our services</li>
                        <li>about us</li>
                        <li>our portfolio</li>
                        <li>contact us</li>
                        <li className={'lg:hidden'}>
                                <HoverBorderGradient
                                    containerClassName="rounded-xl border-neutral-500 border-1 "
                                    as="button"
                                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                                >
                                    book a call
                                </HoverBorderGradient>
                        </li>
                    </ul>
                </nav>


            }
        </header>

    )
}

export default Header