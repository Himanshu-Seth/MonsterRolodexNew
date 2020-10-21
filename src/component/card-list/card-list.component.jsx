import React from 'react';

import { Card  } from '../card/card.component';

import './card-list.style.css';

export const Cardlist = props=>(
   <div className='card-list'>
   {props.monster.map(monster =>
         (<Card  monster={monster}/>)
        )
      }</div>
)