import { cn } from '@/utils/cn'
import React from 'react'
import Logo from '../Logo'

const Footer = () => {
    return (
        <footer className={cn("dark:bg-bg dark:text-white py- space-y-10 mb-28 bg-hero bg-fixed bg-cover bg-center")}>
            <div className="mx-auto section-width   rounded-lg grid grid-cols-3 p-4 gap-10 border border-neutral-700">

                <div className='text-left flex flex-col gap-2'>
                    <h3 className={'font-extrabold'}>CONTACTS</h3>

                    <ul className={'text-lg'}>
                        <li>phone : +221 78 197 76 62</li>
                        <li>info@dartisanstudio.com</li>
                    </ul>

                </div>


                <div className={'place-items-center space-y-5 '}>
                    <h4> © Designed and Developed by️</h4>
                    <div className={'bg-white text-black p-1 rounded'}>
                        <Logo/>
                    </div>
                    <h4> 2025</h4>


                </div>
                <div className={'text-right flex flex-col gap-2'}>
                <h3 className={'font-extrabold'}>NAVIGATION</h3>
                    <ul className={'text-lg'}>
                        <li>accueil</li>
                        <li>services</li>
                        <li>a propos</li>
                    </ul>
                </div>
            </div>

        </footer>
    )
}

export default Footer