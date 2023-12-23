import React from 'react'
import './comissions.css';
import { useTranslation } from 'react-i18next'

export const Comissions = () => {
    const { t } = useTranslation()
  return (
      <div className='container'>
            <h2>{t("portfolio_commissions_title")}</h2>

        <div className='portfolio__selection'>
        <button id="">HKLWE</button>
        <button id="">FERNESS</button>
        <button id="">PIXELS STORE</button>
        <button id="">ASMOCORE</button>
        <button id="">HATENAKI MICHI</button>
        <button id="">WIGLEG</button>
        </div>

        <div className='portfolio__show'>
            <div className='album' id="">
                <div className='image'>
                    
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

export default Comissions