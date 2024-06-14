import { cn } from '@/utils/cn'
import React from 'react'

const Header = () => {
    return (
        <header className="fixed z-50 w-full text-white top-4">
            <div className='mx-auto w-10/12 flex justify-between items-center backdrop-blur-xl rounded-md py-5 p-2'>
                <span className='text-2xl font-extrabold border rounded-full px-3 py-1'>shift</span>
                <nav>
                    <ul className='flex space-x-5 items-center'>
                        <li>services</li>
                        <li>réalisations</li>
                        <li>a propos</li>
                        <li className='primary-btn'>parlons projet</li>
                    </ul>
                </nav>

            </div>
        </header>

    )
}

export default Header