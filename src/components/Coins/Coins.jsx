import React from 'react'
import { useEffect, useState } from 'react'
import './Coins.css'
import SearchBar from './SearchBar'

const Coins = () => {
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&page=${page}');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);  
                console.log(response);
            } catch (err) {
                setError(err.message);  
            } finally {
                setLoading(false);  
            }
        };

        fetchData();  
    }, []);  


    const [selectedOption, setSelectedOption] = useState('');
    const [searchTerm, setSearchTerm] =useState('');

    const OptionChange = (e) => {
        setSelectedOption(e.target.value);
    }

    const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    
    console.log("Performing search for:", searchTerm);
    
    setSearchResults([  ]);
  };

    return(
        <div className="main">
            <div className="title">
            Cryptocurrencies
            </div>
            <div className="action-container">
                <div className="buttons-container">
                    <div className="inr-btn">
                        <input type="radio"
                        name="currencysymbolbtn"
                        value="inr"
                        id="inr"
                        checked={selectedOption === "inr"}
                        onChange={OptionChange}
                        />
                        <label>INR</label>
                    </div>
                    <div className="usd-btn">
                        <input type="radio"
                        value="usd"
                        checked={selectedOption === "usd"}
                        onChange={OptionChange}
                        />
                        <label>USD</label>
                    </div>
                    <div className="eur-btn">
                        <input type="radio"
                        value="eur"
                        checked={selectedOption === "eur"}
                        onChange={OptionChange}
                        />
                        <label>EUR</label>
                    </div>
                </div>
                <div className="search-bar">
                <SearchBar onSearch={handleSearch} />
                 {}
                    <ul>
                   {searchResults.map(result => (
                    <li key={result.id}>{result.name}</li>
                  ))}
                   </ul>
                </div>

            </div>
            <div className="cards-container">
            
            </div>
        </div>
    )
}

export default Coins