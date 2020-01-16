import React from 'react';
import './slider.scss';
import {labelConfig} from '../../../../../static/conf/constants'

function Slider(props) {
    const items = []
    for(let i=0;i<props.total;i++){
       items.push(<button onClick={() => props.slide(i)} key={i} aria-label={(i+1)+labelConfig.Of+props.total} >
       <i className={'fa fa-circle banner_ciricon'+ ((i==props.activeSlider)?' banner_ciricon-active':'')}/>
       </button>
       )
    }

    return (
    
   <div  className='home_banner_slider'>
        {items}
    </div>
       
  );
}

export default Slider;
