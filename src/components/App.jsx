import React, { useState } from 'react'
import axios from '../config/axios'
import { BrowserRouter, Route } from 'react-router-dom'

// Components
import Favorite from './Favorite'
import Home from './Home'
import Header from './Header'

// Context
import FavContextProvider from '../config/context/FavContext'

const App = () => {

    const [images, setImages] = useState([])


    return (
        <BrowserRouter>
            <Header/>
            <div className='container'>
                <FavContextProvider>
                    <Route path='/' exact component={Home} />
                    <Route path='/favorites' component={Favorite} />
                </FavContextProvider>
                {/* <SearchBar onSearchImage={onSearchImage} />
                <ImageList images={images} />
                <Route path='/' exact Componenet={Home} /> */}
            </div>
        </BrowserRouter>
    )
}


export default App