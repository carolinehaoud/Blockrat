import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'




export default function App() {
  const [SubmitFormPopupShowing, setSubmitFormPopupShowing] = useState(false)
  return (
    <div className="App">
      {SubmitFormPopupShowing && 
      <SubmitFormPopup 
        setSubmitFormPopupShowing={setSubmitFormPopupShowing}
      ></SubmitFormPopup>}

      <h1>BlockRat</h1>
      <CoinCount ></CoinCount>
      <SubmitRatSightingButton
        setSubmitFormPopupShowing={setSubmitFormPopupShowing}
      ></SubmitRatSightingButton>
      <Map></Map>
    </div>
  )
}

function CoinCount(){
  const coinCount = useState(8)

  return (
    <div className="coin-count-display">
      My RatCoin:
      <span className='ratcoin-count'>{coinCount}</span>
    </div>
    
  )
}

///
function SubmitFormPopup({setSubmitFormPopupShowing}){
  function handleCloseButtonClick(e){
    setSubmitFormPopupShowing(false);
  }
  return(
    <div className='submit-form-popup'>
      <a 
        className='close-button'
        onClick={handleCloseButtonClick}
      >
        X
      </a>
      <h2>Submit Rat Sighting</h2>
      <p>...</p>
    </div>
  )
}

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


import dummyMap from "./dummy-map.jpg"
function Map(){
  return(
    <div className='map-container'>
    </div>
  )
}

