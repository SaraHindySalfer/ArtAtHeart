import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { getArtItem, addArts } from '../../../service/arts.js'
import { Helmet } from "react-helmet"
import Modal from 'react-modal';
import './Sell.css'
export default function Sell() {

  const customStyles = {
    content: {
      width:'20vw',
      height:'20vw',

    }
  };
  let user = sessionStorage.getItem("loggedIn")
  const [modalIsOpen, setIsOpen] = useState(false);

  let history = useHistory()
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const [input, setInput] = useState({
    artist: '',
    price: 0,
    artName: '',
    type: '',
    error: '',
    img: ""
  })
  async function handleSubmit(event) {
    event.preventDefault()
    let allArts = await getArtItem("arts/details")
    let id = (allArts.length == 0) ? 0 : Number(allArts[allArts.length - 1].id) + 1;
    let flag = false;
    allArts.map((item) => {
      if (item.artName === input.artName) {
        flag = true;
        setInput({
          ...input,
          error: 'Art name already listed',
        })
      }
    })
    if (!flag) {
      if (input.artName !== '' && input.artist !=='' && input.price !== 0 && input.type !== '') {
        const newArt = {
          id: id,
          artName: input.artName,
          price: input.price,
          type: input.type,
          artist: input.artist,
          img: input.img,
          ifBought: 0
        }
        addArts("arts", newArt);
        history.push("/")
        setInput({
          artist: '',
          price: 0,
          artName: '',
          type: '',
          error: '',
          img: ''
        })
      }
    }
  }
  function onChangeInput(event) {
    if(user == null) 
       openModal()
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  }
  return (
    <div className='sellApp'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sell | Art At Heart</title>
      </Helmet>
      <Modal className='sellModal'
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>X</button>
        <div><h2 className='modalContent'>Please sign up or login to sell your art</h2></div>
        <form>
        </form>
      </Modal>
      <form /* onSubmit={handleSubmit} */ className='form'>
        <div className='segment'>
          <h1 className='title'>Sell your Art!</h1>
        </div>
        <label className='labels'>Artist name</label>
        <br />
        <input className='sellInput' type='text' name='artist' onChange={onChangeInput} value={input.artist} />
        <br />
        <label className='labels'>Name of the artwork</label>
        <br />
        <input className='sellInput' type='text' name='artName' onChange={onChangeInput} value={input.artName} />
        {console.log(input.error)}
        <p className='nameError'><small>{input.error}</small></p>
        <br />
        <label className='labels'>Price of the artwork</label>
        <br />
        <input className='sellInput' type='number' min='0' step='1' name='price' onChange={onChangeInput} value={input.price} />
        <br />
        <label className='labels'>Art type</label>
        <br />
        <select className='sellInput' name='type' onChange={onChangeInput} value={input.type}>
          <option value=''>--please select a type--</option>
          <option value='abstractArt'>Abstract art</option>
          <option value='modernArt'>Modern art</option>
          <option value='drawings'>Drawings</option>
          <option value='TangibleArt'>Tangible Art</option>
          <option value='Photography'>Photography</option>
          <option value='paintings'>paintings</option>
        </select>

        <br />
        <div>
          {input.img !== "" && <img src={input.img} className="choose-img" />}‏
        <label className="custom-file-upload">
            <input
              className="file-input-button"
              type="file"
              accept="image/*"
              onChange={(e) => {
                let reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);

                reader.onload = () => {
                  setInput({
                    ...input,
                    img: reader.result
                  })
                };
              }}
            />
                       Up load image
                    </label>
        </div>
        <br />
        <br />
        <button className='btn-primary' onClick={handleSubmit}>
          Add item for sale
      </button>
      </form>
    </div>
  );
}
