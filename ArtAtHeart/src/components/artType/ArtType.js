import React, { useEffect, useState } from 'react'
import './ArtType.css'
import { getArtItem } from '../../service/arts.js'
import Item from '../item/Item.js'
import { Helmet } from "react-helmet"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function ArtType(props) {
    let type = props.type;
    let types = ['abstractArt', 'drawings', 'modernArt', 'TangibleArt', 'Photography', 'paintings'];
    let indexType;
    let isLoading;
    types.map((e, i) => { if (type === e) indexType = i; })
    const [arts, setArts] = useState([])
    async function getData() {
        setArts(await getArtItem("types", type));
    }
    useEffect(() =>
        getData(),
        [])
    if (arts.length == 0) {
        console.log("0");
        isLoading = true
    }
    else if (arts.length > 0) {
        console.log("1")
        isLoading = false
    }

    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    return (
        <div className='coverr'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{types[indexType]} | Art At Heart</title>
            </Helmet>
            {
                isLoading && <div style={style}> <Loader
                    type="Puff"
                    color="rgb(172, 51, 51)"
                    height={100}
                    width={100}
                />
                </div>
                //&& <h2>Loading...</h2>
            }
            {!isLoading && <h1 className='artTypeTitle'>{types[indexType]}</h1>}

            <div className='body'>
                <br />
                <div className='divContainer'>
                    {
                        arts.map((item, i) => {
                            return <div>
                                <Item className='arts'
                                    ifBought={item.ifBought}
                                    src={item.img}
                                    artName={item.artName}
                                    artist={item.artist}
                                    price={item.price} />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

