import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


function AllBeers(props) {
    const [showAll, setShowAll] = useState([])
    useEffect (() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(res => {
            console.log(res);
            setShowAll(res.data);
        });
    }, []);

    const showBeers= () => {
        console.log(showAll)
        return showAll.map((eachBeer) => {
            return (
                <li>
          <div >
            <Link to={`/allbeers/${eachBeer._id}`}>{eachBeer.name} </Link>{' '}
            <img src={eachBeer.image_url} alt=''/>
          </div>
        </li>
        )
      })
    }
    return (
        <div>
            {showBeers()}
        </div>
    );
}


export default AllBeers;

// https://ih-beers-api2.herokuapp.com/beers