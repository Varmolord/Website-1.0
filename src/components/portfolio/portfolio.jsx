import React from 'react'
import './portfolio.css';
import {useState} from 'react'
import Comissions from './comissions/comissions'
import Works from './works/works'
import { useTranslation } from 'react-i18next'


export const Portfolio = () => {
  const { t } = useTranslation()
  const [activeNav, setActiveNav] = useState('#')
  return (
    <section id="portfolio">      
    </section>
  ) 
}

export default Portfolio


