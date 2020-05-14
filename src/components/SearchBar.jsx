import React, {useRef}from 'react'



const SearchBar = (props) => {

    const keywordRef = useRef()
    const amountRef = useRef()

    const onKirim = (e) => {
        // agar halaman tidak refesh
        e.preventDefault()

        props.onSearchImage(
            keywordRef.current.value,
            amountRef.current.value
        )
    }

    return (
        <div>
            <form onSubmit = {onKirim} className="form-group">
                <input ref = {keywordRef} className="form-control" type="text" placeholder="Imgaes"/>
                <input ref = {amountRef} className="form-control my-3" type="text" placeholder="How many?"/>
                <input className="btn btn-block btn-outline-primary" type="submit" value="Search"/>
            </form>
        </div>
    )
}

export default SearchBar;