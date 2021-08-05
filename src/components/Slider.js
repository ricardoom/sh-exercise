// import React from 'react';
import VerticalSlider from './VerticalSliderSVG';
const SliderComponent = (props) => {
  const exchange = props.exchangeData.map((company, index) => {
    return (
      <section key={index} className='flex flex-col items-center w-1/4 mx-1'>
        <p>${company.rate}</p>
        <VerticalSlider className={company.name} />
        <p className='text-xs'>{company.name}</p>
      </section>
    );
  });
  return exchange;
};

export default SliderComponent;
