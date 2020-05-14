import React, {useState} from 'react'


const SearchBar = () => {

    const [keywords, setKeywods] = useState('Kamis')

    return (
        <div>
            {/* Memunculkan alert Keywords */}
            <button onClick={()=>{alert(keywords)}} >Munculkan Keywords</button>

            {/* Mengubah Keywords */}
            <button onClick={()=>{setKeywods(`Ganti Jadi Jum'at`)}} >Ganti Keywords</button>
        </div>
    )
}

export default SearchBar;