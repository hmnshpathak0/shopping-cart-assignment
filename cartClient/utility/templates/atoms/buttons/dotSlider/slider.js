import React from 'react';
import './slider.scss';
import {labelConfig} from '../../../../../static/conf/constants'

function Slider(props) {
    const items = []
    for(let i=0;i<props.total;i++){
       items.push(<button onClick={() => props.slide(i)} key={i} aria-label={(i+1)+' item '+labelConfig.Of+props.total} >
       <i className={'fa fa-circle home__banner__ciricon'+ ((i==props.activeSlider)?' home__banner__ciricon--active':'')}/>
       </button>
       )
    }

    return (
    
   <div  className='home__banner__slider'>
        {items}
    </div>
       
  );
}

export default Slider;
