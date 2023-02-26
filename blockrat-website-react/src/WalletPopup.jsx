import "./Popup.css"

export default function Wallet({setWalletPopupShowing}){
  function handleCloseButtonClick(e){
    setWalletPopupShowing(false);
  }

  function handleAddRatcoin(){

  }
  return(
    <div className='popup'>
      <a 
        className='close-button'
        onClick={handleCloseButtonClick}
      >
        X
      </a>
      <h2>Wallet</h2>
      <button style={{marginTop: "10px"}}>Connect Wallet</button>

      <button 
        style={{marginTop: "10px", display:"none"}}
        onClick={handleAddRatcoin}
      >add ratcoin</button>
    </div>
  )
}