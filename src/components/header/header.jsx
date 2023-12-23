import React from 'react';
import './header.css';
import CTA from './cta';
import logo from '../../assets/logo.svg';
import Headersocials from './headersocials';
import Headersocialsr from './headersocialsr';


import { Translation } from 'react-i18next';


export const Header = () => {
  const { t } = Translation()
  return (
    <header>
      <div className="container header__container">
        <Headersocials/>
        <Headersocialsr/>
        <a  href="#about" >
          <img id="#" src={logo} alt="me" className='logo' />
        </a>
        <h1 className="text-primary">{t('app_title')}</h1>
        <h5 className="text-light">{t('app_desc')}</h5>
        <CTA />

      </div>
    </header>
  )
}
export default Header