import React from 'react'
import { assets } from '../assets/assets'

const StarRating = ({ rating = 4 }) => {
    return (
        <>
            {Array(5).fill('').map((_, index) => (
                <img 
                    src={rating > index ? assets.starIconFilled : assets.starIconOutlined} 
                    alt="" 
                    style={{ width: '1.125rem', height: '1.125rem' }} 
                    key={index}
                />
            ))}
        </>
    )
}

export default StarRating