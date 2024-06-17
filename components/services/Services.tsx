import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    return (
        <div className='grid grid-cols-3'>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
        </div>
    )
}

export default Services