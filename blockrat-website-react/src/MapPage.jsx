import { useState } from 'react'
import './MapPage.css'
import logo from "./assets/logo.png"

import SubmitFormPopup from './SubmitFormPopup'
import WalletPopup from './WalletPopup'
import Map from './Map'



export default function MapPage() {
  const [SubmitFormPopupShowing, setSubmitFormPopupShowing] = useState(false)
  const [WalletPopupShowing, setWalletPopupShowing] = useState(false)
  
  //I am a begginer to react and where to put state
  return (
    <div className="map-page">
      {SubmitFormPopupShowing && 
      <SubmitFormPopup 
        setSubmitFormPopupShowing={setSubmitFormPopupShowing}
      ></SubmitFormPopup>}
      
      {WalletPopupShowing && 
      <WalletPopup 
        setWalletPopupShowing={setWalletPopupShowing}
      ></WalletPopup>}
      

      <img 
        src={logo} 
        alt="blockrat logo"
        className='logo'
      />
      <h1>BLOCKRAT</h1>

      <CoinCount setWalletPopupShowing={setWalletPopupShowing}></CoinCount>
      <SubmitRatSightingButton
        setSubmitFormPopupShowing={setSubmitFormPopupShowing}
      ></SubmitRatSightingButton>

      <h4 className='map-title'>
        Rat Map
      </h4>
      <Map></Map>
    </div>
  )
}

function CoinCount({setWalletPopupShowing}){
  const coinCount = useState(0)

  function handleClick(){
    setWalletPopupShowing(true)
  }

  return (
    <div className="coin-count-display" onClick={handleClick}>
      My RatCoin:
      <span className='ratcoin-count'>{coinCount}</span>
      <span className='arrow'>{">"}</span>
    </div>
    
  )
}

///


function SubmitRatSightingButton({setSubmitFormPopupShowing}){
  function handleSubmitClicked(e){
    setSubmitFormPopupShowing(true);
  }
  return(
    <a className='submit-sighting-link'
      onClick={handleSubmitClicked}
    >
      Submit Rat Sighting
    </a>
  )
}
///


import dummyMap from "./assets/dummy-map.jpg"


