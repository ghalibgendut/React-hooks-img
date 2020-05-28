import React, { useContext } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap'

// context
import { FavContext } from '../config/context/FavContext'


const ImageList = (props) => {

    const { dispatch } = useContext(FavContext)

    const onClick = (image) => {
        // dispatch akan mengirim object {type, payload} ke FavReducer
        dispatch(
            {
                type: 'ADD_FAV',
                payload: image
            }
        )
    }


    const gambar = props.images.map(image => {
        return (
            <Card key={image.id} >
                <CardImg top width="100%" src={image.largeImageURL} alt={image.user} />
                <CardBody>
                    <CardTitle><h3>{image.user ? image.user : "Anonim"}</h3></CardTitle>
                    <CardText>Views : {image.views}</CardText>
                    <CardText>Likes : {image.likes}</CardText>
                    <Button color="success" outline onClick={() => onClick(image)} >Favorite</Button>
                </CardBody>
            </Card>
        )
    })


    return (
        <div className="card-columns">
            {console.log(props.images)}
            {gambar}
        </div>
    )
}

export default ImageList;


/*
    imge: {
                id, description, alt_description, urls, likes, user
            }
*/