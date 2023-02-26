# Blockrat

![image](https://user-images.githubusercontent.com/67718713/221411456-c2d23c6c-48eb-462e-9ef6-69d9f18a81c8.png)

Slides: https://docs.google.com/presentation/d/12RPJ4W1qkfsZDJmE-_OTJJdm1MaT8tdnF1z1R16Rzas/edit#slide=id.p
Blockrat Website: https://block-rat.pages.dev/map
## Inspiration
We were inspired to make this product to bring awareness to rising rodent infestation rates, as seen in the Columbia community and greater Manhattan area, to reduce rates of disease transmission to humans.
## What it does
![image](https://user-images.githubusercontent.com/67718713/221411587-60349f36-8616-44fa-9269-9a9df94a7c45.png)
-A blockchain service that incentives people to identify rat locations based on individual reported sightings in exchange for Blockratcoin.
## How we built it
A person reports a sighting and sends a picture, with geolocation metadata, and a wallet address. The picture is sent to a computer vision server that verifies if a rat is present in the picture. If true, the server sends a hashed verification code back to the user and the transaction is done with three parameters to the smart contract. (hashed verification code, geolocation, and wallet address) The user gets a minted coin and the smart contract store the geolocation values on the blockchain will then be received by the website to create a marker on a map of the rat sighting.
## Challenges we ran into:
-A lot of conceptual understanding about what we can do with smart contracts. 
-Issuing correct security protocols within the smart contract. 
-Integration of all the parts coming together. 
## Accomplishments that we're proud of
-First hackathon ever for all of us! 
## What we learned
We learned how to interact with the blockchain, train test and validate our computer vision models, use leaflet to render maps, geofencing, crypto coin generation, company logo design, docker, and typescript.
## What's next for Blockrat
- IPFS for possible NFT distribution to reward users for the most sightings. 
- Apply more features to the website
- Increase training set for initial computer vision model to improve accuracy
- Technology can be used for other things (geocaching, treasure hunts, tourist attractions in a city, 311 reporting)
