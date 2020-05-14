import React, {useState} from 'react'
import axios from '../config/axios'
// Components
import SearchBar from './SearchBar'
import ImageList from './ImageList'



const App = () => {

    const [images, setImages] = useState([])

    const onSearchImage = (keyword, amount) => {
        const config = {
            params: {
                query: keyword,
                per_page: amount
            }
        }
        

        axios.get('/search/photos', config)
            .then(res=>setImages(res.data.results))
            .catch(err=>console.log({err}))
    }


    return (
        <div className='container'>
            <h1 className='text-center'>HOOKS REACT IMAGE</h1>
            <SearchBar onSearchImage={onSearchImage} />
            <ImageList images={images}/>
        </div>
    )
}


export default App