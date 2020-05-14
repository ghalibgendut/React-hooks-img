import React from 'react'

// Components
import SearchBar from './SearchBar'
import ImageList from './ImageList'

const App = ()=>{
    return (
        <div className='container'>
            <h1 className='text-center'>HOOKS REACT IMAGE</h1>
            <SearchBar/>
            <ImageList/>
        </div>
    )
}


export default App