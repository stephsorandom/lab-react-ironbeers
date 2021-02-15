import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';


function AllBeers(props) {
    const [showAll, setShowAll] = useState('')

    // const randBeer = Math.floor(Math.random() * 255);


    useEffect (() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((res) => {
            console.log(res)
            setShowAll(res.data);
        })
    })
    const showbeers= () => {
        return showAll.map((eachbeer) => {
            return (
                <li>
          <div>
            <Link to={`/allbeers/${eachbeer._id}`}>{eachbeer.name} </Link>{''}
            <img src={eachbeer.image_url} alt='/'/>
          </div>
        </li>
            )
        })
    }
    return (
        <div>
            {showbeers()}
        </div>
    );
}

export default AllBeers;

// https://ih-beers-api2.herokuapp.com/beers