import React from 'react'
import { useEffect, useState } from 'react'
import './Coins.css'

const Coins = () => {
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showAll, setShowAll] = useState(false);

 

    return(
        <div className="main">
            <div className="title">
            Cryptocurrencies
            </div>
            <div className="action-container">
                <div className="buttons-container">
                    <div className="inr-btn">
                        <input type="radio"
                        value="inr"
                        />
                        <label>INR</label>
                    </div>
                    <div className="usd-btn">
                        <input type="radio"
                        value="usd"
                        />
                        <label>USD</label>
                    </div>
                    <div className="eur-btn">
                        <input type="radio"
                        value="eur"
                        />
                        <label>EUR</label>
                    </div>
                </div>

            </div>
            <div className="cards-container">
                
            </div>
        </div>
    )
}

export default Coins