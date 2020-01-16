import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {labelConfig} from '../../../../static/conf/constants';
import './banner.scss'
import Slider from '../../atoms/buttons/dotSlider/slider';
import CustomButton from '../../atoms/buttons/CustomButton/customButton';
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
    <div className='home_banner' role='region' aria-label={labelConfig.Offer}>
    <AutoPlaySwipeableViews axis='x' index={currentItem}
    onChangeIndex={handleCount} enableMouseEvents
    aria-live='off'>
    {props.banner.map((item, index) => (
      <div className="home_banner_item" key={item.id} role='group'
        aria-label={(index + 1)} id='bannerSlide'>
          <figure>
            <img className='home_banner_image' src={item.bannerImageUrl} alt={item.bannerImageAlt} />
          </figure>
      </div>
    ))}
  </AutoPlaySwipeableViews>
  <div className='home_banner_action'>
    <CustomButton control='bannerSlide' label={labelConfig.Prev} handler={handlePrev} styleClass='home_banner_btn' text={labelConfig.Prev}/>
    <CustomButton control='bannerSlide' label={labelConfig.Next} handler={handleNext} styleClass='home_banner_btn' text={labelConfig.Next}/>
  </div>
  <Slider activeSlider={currentItem} total={props.banner.length} slide={handleCount}/>
  </div>
  );
}

export default Banner;
