import React from 'react';
import './works.css';
import { useTranslation } from 'react-i18next';

export const Works = () => {
  const { t } = useTranslation()

  return (
    <div className='container'>
    <h2>{t("portfolio_works_title")}</h2>

<div className='portfolio__selection'>
<button onclick="" id="forrest">FORREST IN NIGHT</button>
<button id="">NIGHT MOUNTAINS</button>
</div>

<div className='portfolio__show'>
    <div className='album'>
        <div className='image'>
        <img id="image" src="https://cdnb.artstation.com/p/assets/images/images/040/367/631/large/adam-petrzelka-untitled-1.jpg?1628640346"></img>
        </div>
    </div>
    <div className='album' id="">
        <div className='image'>

        </div>
    </div>
    <div className='album' id="">
        <div className='image'>

        </div>
    </div>
</div>
</div>
  )
}

export default Works