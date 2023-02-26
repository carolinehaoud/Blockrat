
import "./Map.css"
import cheeseImg from "./assets/cheese.png"

import {useRef, useEffect, useMemo} from "react"
import { GoogleMap, LoadScript, useLoadScript, Marker } from '@react-google-maps/api';



function getData(){
    return {

    }
}

function MapOld(){
    const containerStyle = {
        width: '95%',
        // maxWidth: "800px",
        height: '500px',
        marginTop: 0,
        marginBottom:"300px"
    };
   
    const center = {
        lat: 40.7831,
        lng: -73.9712
    };
    const zoom = 10;
     const positions = [{
        lat:40.809021067560195, 
        lng: -73.96137255508542
    }]
    const onLoad = marker => {
        console.log(marker)
    }
    return(
        <LoadScript
            googleMapsApiKey="AIzaSyDQ3lmcaK_MPreVbXwoqU-WYzkk5jXrMSU"
        >
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={zoom}
        >
            <Marker
                onLoad = {onLoad}
                position={positions[0]}
            />
        </GoogleMap>
        </LoadScript>
    )
}



function initMap() {

  map = new google.maps.Map(document.querySelector(".map-container"), {
      center: { lat: 40.7831, lng: -73.9712 },
      zoom: 11,
  });

  let markers = []
  data.forEach(element => {
      markers.push(
      new google.maps.Marker({
          position: { lat: element.lat, lng: element.lng },
          map,
          title: "Rat Spotted",
          icon: {
              url: "./assets/cheese.png", 
              scaledSize: new google.maps.Size(20, 20)
          }
      })
      )
  });

  // const markerCluster = new markerClusterer.MarkerClusterer(
  //     { map, markers }, 
  // );
  
}

let ranOnce = false;
export default function Map(){
  useEffect(()=>{
    if(ranOnce === true){
      return
    }
    console.log("pie")
    ranOnce= true;
    // Create the script tag, set the appropriate attributes
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
    script.async = true;

    // Attach your callback function to the `window` object
    window.initMap = initMap;

    // Append the 'script' element to 'head'
    document.head.appendChild(script);

  }, [])

  return(
    <div className="map-container"></div>
  )
}