import React from 'react';
import './homepage.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='menu-container'>
            <div className='menu-item'>
                <div className='container'>
                    <h1 className='title'>Hats</h1>
                    <span className='subtitle'>Buy</span >
                </div>
            </div>
            <div className='menu-item'>
                <div className='container'>
                    <h1 className='title'>T-shirts</h1>
                    <span className='subtitle'>Buy</span >
                </div>
            </div>
            <div className='menu-item'>
                <div className='container'>
                    <h1 className='title'>Shoes</h1>
                    <span className='subtitle'>Buy</span >
                </div>
            </div>
            <div className='menu-item'>
                <div className='container'>
                    <h1 className='title'>Womens</h1>
                    <span className='subtitle'>Buy</span >
                </div>
            </div>
            <div className='menu-item'>
                <div className='container'>
                    <h1 className='title'>Mens</h1>
                    <span className='subtitle'>Buy</span >
                </div>
            </div>
        </div>
    </div>
)
export default HomePage;