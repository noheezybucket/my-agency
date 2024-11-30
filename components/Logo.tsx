import React from 'react'

const Logo = () => {
    return (
        <div className='flex items-center text-2xl gap-1'>
            <span className='font-extrabold  lg:hidden'>DAS</span>

            <span className='font-extrabold hidden lg:block'>d'artisan</span>
            <span className={'font-thin hidden  lg:block'}>|</span>
            <span className='font-thin hidden  lg:block'>studio</span>
        </div>

    )
}

export default Logo