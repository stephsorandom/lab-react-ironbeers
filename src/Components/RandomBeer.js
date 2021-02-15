import React, {useState, useEffect} from 'react';
import axios from 'axios';

function RandomBeer(props) {
    const [beer, setBeer] = useState({})

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(res =>{
            console.log(res)
            setBeer(res.data)
    })


    return (
        <div>
            <img src={beer.image_url}/>,{beer.name}
        </div>
    );
}

export default RandomBeer;