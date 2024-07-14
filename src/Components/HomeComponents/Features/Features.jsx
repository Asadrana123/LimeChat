import React from 'react';
import './Features.css';

function Features({title,subtitle,desc,imgSrc}) {
  return (
    <div className='features-outer-container'>
      <div className='upper-horizontal-line'></div>
      <div className='gpt-support'>{subtitle}
      </div>
    <div className="container--features">
      <div className="text-container--features">
        <h2 className="heading--features">{title}</h2>
        <p className="paragraph--features">
         {desc}
        </p>
      </div>
      <div className="image-container--features">
        <img src={imgSrc} alt="GPT-Powered Support" className="image--features" />
      </div>
    </div>
    </div>
  );
}

export default Features;
