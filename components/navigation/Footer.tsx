import { cn } from '@/utils/cn'
import React from 'react'
import Logo from '../Logo'

const Footer = () => {
    return (
        <footer className={cn("dark:bg-bg dark:text-white py-10")}>
            <div className="mx-auto w-10/12 bg-slate-100 text-bg rounded-lg grid grid-cols-3">
                <Logo />
                <div>
                    <span>MENU</span>
                </div>

                <div>
                    <span>CONTACTS</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer