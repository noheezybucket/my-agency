import { cn } from '@/utils/cn'
import React from 'react'
import Logo from '../Logo'

const Footer = () => {
    return (
        <footer className={cn("dark:bg-bg dark:text-white py-5 space-y-5")}>
            <div className="mx-auto w-10/12 bg-slate-100 text-bg rounded-lg grid grid-cols-3 p-4 gap-10">
                <div>
                    <Logo />
                    <p className='text-justify'>shift est une agence de social media marketing, ses services tournent autour du développement de sites/apps web et mobiles, l'identité visuelle,

                    </p>
                </div>

                <div>
                    <div>LIENS RAPIDES</div>
                    <ul>
                        <li>accueil</li>
                        <li>services</li>
                        <li>a propos</li>
                    </ul>
                </div>

                <div>
                    <div>RÉSEAUX</div>
                    <ul className='list-disc pl-4'>
                        <li>snapchat</li>
                        <li>instagram</li>
                        <li>linkedin</li>
                    </ul>
                </div>
            </div>
            <div className='text-center'>
                © Tout droits réservés 2024, Shift Agency.
            </div>
        </footer>
    )
}

export default Footer