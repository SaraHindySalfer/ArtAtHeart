import React, { useEffect, useState } from 'react'
import './Artists.css'
import { getArtItem } from '../../service/arts.js'
import Item from '../item/Item.js'
/* import img from './../../assets/img/artworks/' */
import { Helmet } from "react-helmet"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


export default function Artists(props) {
  let artist = props.artist;
  let isLoading;
  let artists = ['Van Gogh', 'Pablo Picasso', 'Robert Loft', 'Daniel Sader', 'All Artists'];
  let indexType;
  artists.map((e, i) => { if (artist === e) indexType = i; })
  const [artistState, setArtistState] = useState([])
  async function getData() {
    setArtistState(await getArtItem("artist", artist));
  }
  useEffect(() =>
    getData(),
    [])
  console.log(artistState)
  if (artistState.length === 0) {
    console.log("0");
    isLoading = true
  }
  else if (artistState.length > 0) {
    console.log("1")
    isLoading = false
  }
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

  return (
    <div className='cover'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{artists[indexType]} | Art At Heart</title>
      </Helmet>
      {
        isLoading && <div style={style} className='loader'><Loader
          type="Puff"
          color="rgb(172, 51, 51)"
          height={100}
          width={100}
        />
        </div>
        //&& <h2>Loading...</h2>
      }
      {!isLoading && <h1 className='artistNameTitle'> {artists[indexType]}</h1>}
      <div className='artistBody'>

        <br />
        <div className='divvContainer'>

          {
            artistState.map((item, i) => {
              // if (artist == 'All Artists') {
              return <div className='items'>
                <Item className='arts'
                  src={item.img}
                  artName={item.artName}
                  artist={item.artist}
                  type={item.type}
                  price={item.price}
                  ifBought={item.ifBought} />

              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}


