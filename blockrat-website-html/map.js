
const datanotinuse = [
    {lat: 40.7831, lng: -73.9712, description: ""},
    {lat: 40.80840489999831, lng: -73.96188872861339, description: ""},
    {lat: 40.7831, lng: -73.9712, description: ""},
]

const data = [
    {
      "lat": 40.765914267212786,
      "lng": -73.90203006904005
    },
    {
      "lat": 40.806084172623635,
      "lng": -73.92435191570078
    },
    {
      "lat": 40.8342475752351,
      "lng": -73.9416213093295
    },
    {
      "lat": 40.741894307159406,
      "lng": -73.94334509863775
    },
    {
      "lat": 40.8109809141728,
      "lng": -73.9399334225971
    },
    {
      "lat": 40.77859007984771,
      "lng": -73.9379184409139
    },
    {
      "lat": 40.72856907632996,
      "lng": -73.99873610139305
    },
    {
      "lat": 40.75247389288754,
      "lng": -73.99056194664088
    },
    {
      "lat": 40.73644516227592,
      "lng": -73.97452675647955
    },
    {
      "lat": 40.74225123848379,
      "lng": -73.904737178169
    },
    {
      "lat": 40.764090114880915,
      "lng": -73.99681272365162
    },
    {
      "lat": 40.788810380045106,
      "lng": -73.95182203278678
    },
    {
      "lat": 40.72763826967663,
      "lng": -73.9657409920725
    },
    {
      "lat": 40.78862769109808,
      "lng": -73.90860831696753
    },
    {
      "lat": 40.844983126926266,
      "lng": -73.98476598442093
    },
    {
      "lat": 40.72809060999593,
      "lng": -73.9750759210711
    },
    {
      "lat": 40.77719579990425,
      "lng": -73.90020718852246
    },
    {
      "lat": 40.74049793203517,
      "lng": -73.94632532628671
    },
    {
      "lat": 40.72825113037534,
      "lng": -73.97315222933531
    },
    {
      "lat": 40.70778059033507,
      "lng": -73.90823870209246
    },
    {
      "lat": 40.84834408059346,
      "lng": -73.94609194957991
    },
    {
      "lat": 40.74856737982133,
      "lng": -73.98938856586328
    },
    {
      "lat": 40.8463548042158,
      "lng": -73.96754475039357
    },
    {
      "lat": 40.77467222509529,
      "lng": -73.9450706675157
    },
    {
      "lat": 40.83237144300677,
      "lng": -73.90636270428305
    },
    {
      "lat": 40.7373738845633,
      "lng": -73.95467675151768
    },
    {
      "lat": 40.75699060401238,
      "lng": -73.97399858317071
    },
    {
      "lat": 40.738167268433266,
      "lng": -73.96231855895999
    },
    {
      "lat": 40.72938760996245,
      "lng": -73.95014287430398
    },
    {
      "lat": 40.70927123861363,
      "lng": -73.92123372942405
    }
  ]

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomData(){
    let data = [];
    for (let i = 0; i < 30; i++) {
        const lat = getRandomNumber(40.69, 40.85)
        const lng = getRandomNumber(-73.9, -74.0)
        data.push({
            lat: lat,
            lng: lng,
        })
    }
    return data;
}

function initMap() {
    console.log("!!!!!", getRandomData())

    map = new google.maps.Map(document.getElementById("map"), {
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


window.initMap = initMap;