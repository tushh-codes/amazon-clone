import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <img
        className='home_image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt='Banner'
      />
      <div className='home_row'>
        <Product
          id='12321344'
          title='OnePlus Nord CE 5G (Charcoal Ink, 8GB RAM, 128GB Storage)'
          desc='Save extra with No Cost EMI'
          price={24999.0}
          rating={5}
          image='https://m.media-amazon.com/images/I/71LRBr1aLNS._SL1500_.jpg'
        />

        <Product
          id='12321345'
          title='2019 Apple MacBook Pro (16-inch/40.65 cm, 16GB RAM, 1TB Storage, 2.3GHz 9th Gen Intel Core i9) - Space Grey'
          desc='Save extra with No Cost EMI'
          price={215490.0}
          rating={5}
          image='https://m.media-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg'
        />
      </div>
      <div className='home_row'>
        <Product
          id='12321346'
          title='Mi Notebook Pro QHD+ IPS Anti Glare Display  Thin and Light Laptop '
          desc='Save extra with No Cost EMI'
          price={56999.0}
          rating={5}
          image='https://m.media-amazon.com/images/I/71iiXU7HHkL._SL1500_.jpg'
        />

        <Product
          id='12321347'
          title='Noise ColorFit Pro 2 Full Touch Control Smart Watch '
          desc='Save extra with No Cost EMI'
          price={2799.0}
          rating={4}
          image='https://m.media-amazon.com/images/I/61xzuXWWozS._SL1200_.jpg'
        />

        <Product
          id='12321348'
          title='Sony WF-1000XM3 Industry Leading Active Noise Cancellation True Wireless (TWS) Bluetooth 5.0 Earbuds'
          desc='Save extra with No Cost EMI'
          price={12990.0}
          rating={4}
          image='https://m.media-amazon.com/images/I/61zKkP36kDL._SL1500_.jpg'
        />
      </div>

      <div className='home_row'>
        <Product
          id='12321349'
          title='LG 27 inch 4K-UHD (3840 x 2160) HDR 10 Monitor (Gaming & Design) with IPS Panel'
          desc='Save extra with No Cost EMI'
          price={29499.0}
          rating={5}
          image='https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg'
        />
      </div>
    </div>
  );
}

export default Home;
