import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandHoldingUsd, faPhoneSquare,} from '@fortawesome/free-solid-svg-icons'
import './Donate.css'

const Donate = (props) => {

     const {name ,title, donate, img ,city, mobile }=props.donate  || {}

    return ( 

  <div className="col my-2 mx-1">
       <div  class="card h-100 text-center">
                <img src={img} class="profile mx-auto rounded-circle z-depth-2" alt="..."/>
                <div class="card-header">
                    <h5 class="card-title">{name}</h5>
                
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Position: <h6 className="text-warning">{title}</h6></li>
                        <li class="list-group-item">Donate: £ <small className="text-warning">{donate}</small></li>
                        <li class="list-group-item">Mobile:<FontAwesomeIcon icon={faPhoneSquare} /> <small className="text-warning">{mobile}</small></li>
                        <li class="list-group-item">City :<small>{city}</small></li>
                    </ul>
                </div>
                <div class = "card-footer">
                  <button 
                  onClick={ ()=> props.handleAddDonate(props.donate)}
                  
                  class="btn btn-outline-warning">Add Donate <FontAwesomeIcon icon={faHandHoldingUsd} /></button> 
                </div>
    </div>
    </div>

    );
};

export default Donate;