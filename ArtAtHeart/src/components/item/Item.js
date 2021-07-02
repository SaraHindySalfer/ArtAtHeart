import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge'
import ModalImage from 'react-modal-image'
import './Item.css'


export default function Item({ className, src, type, artName, artist, price, ifBought }) {
    let history = useHistory()
    const [click, setClick] = useState(false)
    const [itemInfo, setItemInfo] = useState({
        itemClassName: className,
        itemSrc: src,
        itemType: type,
        itemArtName: artName,
        itemArtist: artist,
        itemPrice: price,
        itemIfBought: ifBought

    })
    const onClick = () => {
        history.push({
            pathname: "/buy",
            state: { info: itemInfo }
        })
        setClick(true)
    }
    return (
        <div className='item'>
            <Card style={{ width: '18rem' }}>
                <div className={className}>
                    <div className='itemCard'>
                        <Card.Img className='itemImg' variant='top' src={src} style={{ width: '100%', height: '150px' }} alt='can not ' />
                        {/* <ModalImage
                        small={src}
                        large={src}
                        alt="Hello World!"
                    /> */}
                        <Card.Body style={{ height: '4vw' }}>

                            <Card.Title style={{ height: '10px' }}>--{artName}--</Card.Title>
                            {itemInfo.itemIfBought == 1 && <Badge className='badge' variant='danger'>Sold!</Badge>}
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>{type}</ListGroupItem>
                            <ListGroupItem><div className='artist'>by: {artist}</div></ListGroupItem>
                            <ListGroupItem>{price}$</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            {itemInfo.itemIfBought == 1 ?
                                <button disabled className='button' onClick={onClick}>
                                    <i class="fa fa-cart-plus" aria-hidden="true"></i> Buy
                        </button> :
                                <button className='button' onClick={onClick}>
                                    <i class="fa fa-cart-plus" aria-hidden="true"></i> Buy
                        </button>
                            }
                        </Card.Body>
                    </div>
                </div>
            </Card>
        </div >
    )
}
