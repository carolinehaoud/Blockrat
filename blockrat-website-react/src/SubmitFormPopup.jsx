import "./Popup.css"

export default function SubmitFormPopup({setSubmitFormPopupShowing}){
  function handleCloseButtonClick(e){
    setSubmitFormPopupShowing(false);
  }
  return(
    <div className='popup'>
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