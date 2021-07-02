import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import { Helmet } from "react-helmet"
import { getArtItem } from '../../service/arts.js'


import img1 from '../../assets/img/artworks/1.jpg'
import img2 from '../../assets/img/artworks/2.jpg'
import img3 from '../../assets/img/artworks/3.jpg'
import img4 from '../../assets/img/artworks/4.jpg'
import img5 from '../../assets/img/artworks/5.jpg'
import img6 from '../../assets/img/artworks/6.jpg'
import img7 from '../../assets/img/artworks/7.jpg'
import img8 from '../../assets/img/artworks/8.jpg'
import img9 from '../../assets/img/artworks/9.jpg'
import img10 from '../../assets/img/artworks/10.jpg'
import img11 from '../../assets/img/artworks/11.jpg'
import img12 from '../../assets/img/artworks/12.jpg'
import img13 from '../../assets/img/artworks/13.jpg'
import img14 from '../../assets/img/artworks/14.jpg'
import img15 from '../../assets/img/artworks/15.jpg'
import img16 from '../../assets/img/artworks/16.jpg'
import img17 from '../../assets/img/artworks/17.jpg'
import img18 from '../../assets/img/artworks/18.jpg'
import img19 from '../../assets/img/artworks/19.jpg'
import img20 from '../../assets/img/artworks/20.jpg'
import img21 from '../../assets/img/artworks/21.jpg'
import img22 from '../../assets/img/artworks/22.jpg'
import img23 from '../../assets/img/artworks/23.jpg'
import img24 from '../../assets/img/artworks/24.jpg'
import img25 from '../../assets/img/artworks/25.jpg'
import img26 from '../../assets/img/artworks/26.jpg'
import img27 from '../../assets/img/artworks/27.jpg'
import img28 from '../../assets/img/artworks/28.jpg'
import img29 from '../../assets/img/artworks/29.jpg'
import img30 from '../../assets/img/artworks/30.jpg'
import img31 from '../../assets/img/artworks/31.jpg'
import img32 from '../../assets/img/artworks/32.jpg'
import img33 from '../../assets/img/artworks/33.jpg'
import img34 from '../../assets/img/artworks/34.jpg'
import img35 from '../../assets/img/artworks/35.jpg'
import img36 from '../../assets/img/artworks/36.jpg'
import img37 from '../../assets/img/artworks/37.jpg'
import img38 from '../../assets/img/artworks/38.jpg'
import img39 from '../../assets/img/artworks/39.jpg'
import img40 from '../../assets/img/artworks/40.jpg'
import img41 from '../../assets/img/artworks/41.jpg'
import img42 from '../../assets/img/artworks/42.jpg'
import img43 from '../../assets/img/artworks/43.jpg'
import img44 from '../../assets/img/artworks/44.jpg'
import './Gallery.css'

const images = [
  {
    original: (img1),
    thumbnail: (img1),
  },
  {
    original: (img2),
    thumbnail: (img2),
  },
  {
    original: (img3),
    thumbnail: (img3),
  }, {
    original: (img4),
    thumbnail: (img4),
  }, {
    original: (img5),
    thumbnail: (img5),
  }, {
    original: (img6),
    thumbnail: (img6),
  }, {
    original: (img7),
    thumbnail: (img7),
  }, {
    original: (img8),
    thumbnail: (img8),
  }, {
    original: (img9), thumbnail: (img9)
  },
  {
    original: (img10), thumbnail: (img10)
  },
  {
    original: (img11), thumbnail: (img11)
  },
  {
    original: (img12), thumbnail: (img12)
  },
  {
    original: (img13), thumbnail: (img13)
  },
  {
    original: (img14), thumbnail: (img14)
  },
  {
    original: (img15), thumbnail: (img15)
  },
  {
    original: (img16), thumbnail: (img16)
  },
  {
    original: (img17), thumbnail: (img17)
  },
  {
    original: (img18), thumbnail: (img18)
  },
  {
    original: (img19), thumbnail: (img19)
  },
  {
    original: (img20), thumbnail: (img20)
  },
  {
    original: (img21), thumbnail: (img21)
  },
  {
    original: (img22), thumbnail: (img22)
  },
  {
    original: (img23), thumbnail: (img23)
  },
  {
    original: (img24), thumbnail: (img24)
  },
  {
    original: (img25), thumbnail: (img25)
  },
  {
    original: (img26), thumbnail: (img26)
  },
  {
    original: (img27), thumbnail: (img27)
  },
  {
    original: (img28), thumbnail: (img28)
  },
  {
    original: (img29), thumbnail: (img29)
  },
  {
    original: (img30), thumbnail: (img30)
  },
  {
    original: (img31), thumbnail: (img31)
  },
  {
    original: (img32), thumbnail: (img32)
  },
  {
    original: (img33), thumbnail: (img33)
  },
  {
    original: (img34), thumbnail: (img34)
  },
  {
    original: (img35), thumbnail: (img35)
  },
  {
    original: (img36), thumbnail: (img36)
  },
  {
    original: (img37), thumbnail: (img37)
  },
  {
    original: (img38), thumbnail: (img38)
  },
  {
    original: (img39), thumbnail: (img39)
  },
  {
    original: (img40), thumbnail: (img40)
  },
  {
    original: (img41), thumbnail: (img41)
  },
  {
    original: (img42), thumbnail: (img42)
  },
  {
    original: (img43), thumbnail: (img43)
  },
  {
    original: (img44), thumbnail: (img44)
  }
];


export default function Gallery() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gallery | Art At Heart</title>
      </Helmet>
      <div className='content'>
        <ImageGallery useBrowserFullscreen='false' autoPlay='true' className='images' items={images} />
      </div>
    </div>
  )
}
