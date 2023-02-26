import {Link} from "react-router-dom"

import "./LandingPage.css"
import logo from "./assets/logo.png"
import dummyMap from "./assets/dummy-map.jpg"
import noRats from "./assets/norats.jpg"
import skull from "./assets/skull.jpg"
import moneyBag from "./assets/money-bag.png"

export default function LandingPage() {
    return (
        <div className="landing-page">
            
            
            <section className="first-section">
                <div className="content">  
                    <div className="logo-and-title">
                        <img 
                            src={logo} 
                            alt="blockrat logo"
                            className='logo'
                        />
                        <h1>BLOCKRAT</h1>
                    </div>

                    <p>The blockchain-based rat tracker</p>
                    <Link className="map-link-button" to="map">
                        See the Map {">"}
                    </Link>
                    
                </div>

                <div className="image">
                    {/* <img src={dummyMap} alt="" /> */}
                </div>
                
            </section>
             
            <section className="second-section">
                <div className="image">
                    <img src={noRats} alt="" />
                </div>

                <div className="content">  
                    <p>
                        No more going through
                        rat-infested areas.
                    </p>
                    <p>
                        Use Blockrat and move with confidence
                    </p>
                </div> 
            </section>
            
            <section className="third-section">
                <div className="content">  
                    <p>Rats carry diseases </p>
                    <p>which can Kill You!</p>
                    
                </div>

                <div className="image">
                    <img src={skull} alt="" />
                </div>
                
            </section>

            <section className="fourth-section">
                <div className="image">
                    <img src={moneyBag} alt="" />
                </div>
                <div className="content">  
                    <p>Get rich collecting RatCoin! </p>
                    
                </div>

                
                
            </section>
            
            
        </div>

    )
}