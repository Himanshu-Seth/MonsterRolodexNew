import React from 'react';
import './card.style.css';
export const Card = props => (
    <div key={props.monster.id}className='card-container' >
     <img 
     alt='mosnter' 
     src={`https://robohash.org/${props.monster.id}.png?set=set2&size=180x170`}/>
        <h2 key={props.monster.id}>{props.monster.name}</h2>
                <p>{props.monster.email}</p>
    </div>
    
)