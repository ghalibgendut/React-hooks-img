import React, { useState, useEffect } from 'react'
import axios from '../config/axios'

// Componenets
import SearchBar from './SearchBar'
import ImageList from './ImageList'

const Home = () => {

    const [images, setImages] = useState([])
    useEffect(() => {
        onSearchImage()
    }, [])


    const onSearchImage = (keyword, amount) => {
        const config = {
            params: {
                key: '16778918-0be945dc78cd2ac47e9b86a00',
                q: keyword ? keyword : "random",
                per_page: amount ? amount : 10
            }
        }


        axios.get('/', config)
            //  Kalau berhasil mendapat data, disimpan ke state images
            .then(res => setImages(res.data.hits))
            // Kalau gagal, munculkan object err di console
            .catch(err => console.log({ err }))
    }




    return (
        <div className="mt-5" >
            {/* Search Bar memiliki property onSearchImage, akan ada di variable 'props' */}
            <SearchBar onSearchImage={onSearchImage} />
            {/* Image List memiliki property images, akan ada di variable 'props' */}
            <ImageList images={images} />
        </div>
    )

}


export default Home;