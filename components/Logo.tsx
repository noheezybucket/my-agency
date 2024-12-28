import React from 'react'

const Logo = () => {
    return (
        <div className='flex items-center text-2xl gap-1'>
            <span className='text-lg font-bold  lg:hidden'>dartisan</span>
            <span className='text-lg font-thin  lg:hidden'>|</span>
            <span className='text-lg font-thin  lg:hidden'>studio</span>

            <span className='font-bold hidden lg:block'>dartisan</span>
            <span className={'font-thin hidden  lg:block'}>|</span>
            <span className=' hidden  lg:block'>studio</span>
        </div>

    )
}

export default Logo