import React, {useState, useEffect} from 'react';
import axios from 'axios';

function SingleBeer(props) {
    const[oneBeer, setOneBeer] = useState([])

    useEffect(() => {
        console.log(props)
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`)
        .then(res => {
            console.log(res)
            setOneBeer(res.data)
        })
    }, [])
    console.log(props.match.params.id);
    return (
        <div>
            <h1>{oneBeer.name}</h1>
            <img src={oneBeer.image_url} alt=""/>
        </div>
    );
}

export default SingleBeer;