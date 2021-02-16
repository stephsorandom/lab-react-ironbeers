import React, {useState, useEffect} from 'react';
import axios from 'axios';


function RandomBeer(props) {
    const[beers, setBeers] = useState([])
    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')//url now includes 'random' will generate random beer
        .then(res => {
            console.log(res)
            setBeers(res.data)
        })
    }, [])

    return (
         <div> 
         {/* 2 div will render a random image and random beer name */}
            <div>
                <img src={beers.image_url} alt=''/> 
            </div>
            <div>
                {beers.name}
            </div>
        </div>
    );
}

export default RandomBeer;