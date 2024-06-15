import { cn } from '@/utils/cn'
import React from 'react'
import Logo from '../Logo'

const Header = () => {
    return (
        <header className="fixed z-50 w-full text-white top-4">
            <div className='mx-auto w-10/12 flex justify-between items-center rounded-md py-5'>
                <Logo />
                <nav>
                    <ul className='flex space-x-5 items-center'>
                        <li>services</li>
                        <li>a propos</li>
                        <li className='primary-btn'>parlons projet</li>
                    </ul>
                </nav>

            </div>
        </header>

    )
}

export default Header