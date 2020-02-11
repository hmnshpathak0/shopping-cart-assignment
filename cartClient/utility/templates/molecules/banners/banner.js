import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {labelConfig} from '../../../../static/conf/constants';
import './banner.scss'
import Slider from '../../atoms/buttons/dotSlider/slider';
import CustomButton from '../../atoms/buttons/customButton/customButton';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
function Banner(props) {
  const [currentItem, setcurrentItem] = React.useState(0);
  const length = props.banner.length || 0
  //this method set the count when the slider index change
  const handleCount = count => {
    setcurrentItem(count);
  };
  //handler for previous button
  const handlePrev = () => {
    setcurrentItem(prevItem => (prevItem==0)?length -1:prevItem -1)
  }
 //handler for next button
 const handleNext = () => {
  setcurrentItem(prevItem => (prevItem==length-1)?0:prevItem +1)
}
  return (
    (props.banner.length > 0) &&
    <section className='home__banner border_bottom_grey' role='region' >
    <AutoPlaySwipeableViews axis='x' index={currentItem}
    onChangeIndex={handleCount} enableMouseEvents
    aria-live='off'>
    {props.banner.map((item, index) => (
      <div className="home__banner__item" key={item.id} role='group'
        aria-label={(index + 1)} >
          <figure>
            <img className='home__banner__image' src={item.bannerImageUrl} alt={item.bannerImageAlt} />
          </figure>
      </div>
    ))}
  </AutoPlaySwipeableViews>
  <div className='home__banner__action'>
    <CustomButton control='bannerSlide'  handler={handlePrev} styleClass='home__banner__btn' text={labelConfig.Prev}/>
    <CustomButton control='bannerSlide'  handler={handleNext} styleClass='home__banner__btn' text={labelConfig.Next}/>
  </div>
  <Slider activeSlider={currentItem} total={props.banner.length} slide={handleCount}/>
  </section>
  );
}

export default Banner;
