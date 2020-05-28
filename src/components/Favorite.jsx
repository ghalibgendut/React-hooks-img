import React, { useContext } from 'react'

// context
import { FavContext } from '../config/context/FavContext'


const Favorite = () => {
    const { favorites } = useContext(FavContext)

    return (
        <div>
            <h1>We have {favorites.length} images</h1>
        </div>
    )
}

export default Favorite;
