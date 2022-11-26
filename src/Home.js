import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
       <div className='home__container'>
       <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className='home__row'>

        <Product id={1239}title='The Lean Startup Paperback – 1 January 2015' price={350} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5}/>
           <Product id={1250} title="2021 Apple iPad Pro with Apple M1 chip - Space Grey (3rd Generation)" price={82990}  image="https://m.media-amazon.com/images/I/81a-rN2A3DS._SX679_.jpg" rating={4}/>
           
           </div>

        <div className='home__row'>

        
          <Product id={1204} title="Apple Watch Series 7 (GPS, 41mm) - Midnight Aluminium Case with Midnight Sport Band - Regular" price={49990} image="https://m.media-amazon.com/images/I/71gg8mPlAuL._SX679_.jpg" rating={3} />
           <Product id={1214} title="Avighna Women's Clutch, Watch With Perfume (AG-A69_Multicolored)" price={1199} rating={3} image="https://m.media-amazon.com/images/I/71SPW44SKiL._SX679_.jpg" />
           <Product id={1294} title="AmazonBasics Extended Gaming Mouse Pad,Black" price={499} rating={4} image="https://m.media-amazon.com/images/I/51XGotAiYYL._SX679_.jpg"/>
 
        </div>

        <div className='home__row'>

        <Product id={1237} title="Sony Bravia 139 cm (55 inches) XR series 4K Ultra HD Smart OLED Google TV XR-55A80J (Black) (2021 Model) | with Alexa Compatibility" price={161490} rating={2} image="https://m.media-amazon.com/images/I/81ABJMRLcxL._SX679_.jpg"/>
             


        </div>


       </div>
      
    </div>
  )
}

export default Home
