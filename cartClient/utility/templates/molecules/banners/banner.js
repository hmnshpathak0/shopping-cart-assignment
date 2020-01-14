import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
function Banner(props) {

handleStepChange = () => {

} 
  return (
    <AutoPlaySwipeableViews axis='x' index={1}
    onChangeIndex={handleStepChange} enableMouseEvents
    aria-live='off' id='carouselSlides'>
    {props.banner.map((step, index) => (
      <div key={step.id} role='group'
        aria-label={(index + 1)  + Constants.Of + props.banner.length + Constants.Offers}>
        {Math.abs(0 - index) <= 2 ? (
          <img className='carousel-slide-image' src={step.bannerImageUrl} alt={step.bannerImageAlt} />
        ) : null}
      </div>
    ))}
  </AutoPlaySwipeableViews>
  );
}

export default DropDown;
