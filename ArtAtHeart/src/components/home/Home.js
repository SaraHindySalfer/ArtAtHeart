import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './Home.css'


export default function Home() {
    let history = useHistory()
    const onClick = () => {
        history.push('/sell')
    }
    const onClickBuy = () => {
        history.push('/All Artists')
    }
    return (
        <div className="container">
            <div className="homePage">
                <h2 className='homeTitle'>Art At Heart ❤</h2>
                <h2 className='secondTitle'>Buy great art and sell yours too! </h2>
                <div className='homePageButtons'>
                    <button className='gotoSell' onClick={onClick} >Sell your art  <i className="fa fa-chevron-right" />	</button>
                    <button className='gotoSell' onClick={onClickBuy}>Buy from all artists <i className="fa fa-chevron-right" /></button>
                </div>
            </div>
        </div>
    );
}