import React from 'react'
import './experience.css';

import {SiAutodesk} from 'react-icons/si'
import {SiAdobephotoshop} from 'react-icons/si'
import {SiAdobeillustrator} from 'react-icons/si'
import {SiAdobeaftereffects} from 'react-icons/si'
import {SiBlender} from 'react-icons/si'
import {SiCinema4D} from 'react-icons/si'

import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {DiPhp} from 'react-icons/di'
import {SiMysql} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {SiGnubash} from 'react-icons/si'

import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiCsharp} from 'react-icons/si'
import {} from 'react-icons/'

import { Translation } from 'react-i18next'

export const experience = () => {
  const { t } = Translation()
  return (
    <section id="experience">
      <h5>{t("experiences_desc")}</h5>
      <h2>{t("experiences_title")}</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>{t("experiences_frontend_title")}</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <SiHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>{t("experiences_rating_5")}</small> 
              </div>
            </article>
            <article className='experience__details'>
            <SiCss3 className='experience__details-icon'/>
                  <div>
                    <h4>CSS</h4>
                    <small className='text-light'>{t("experiences_rating_4")}</small> 
                  </div>
            </article>
            <article className='experience__details'>
            <SiJavascript className='experience__details-icon'/>
                  <div>
                    <h4>JavaScript</h4>
                    <small className='text-light'>{t("experiences_rating_4")}</small>
                  </div> 
            </article>
            <article className='experience__details'>
            <SiReact className='experience__details-icon'/>
                  <div>
                    <h4>React</h4>
                    <small className='text-light'>{t("experiences_rating_4")}</small> 
                  </div>
            </article>
            <article className='experience__details'>
            <SiBootstrap className='experience__details-icon'/>
                  <div>
                    <h4>Bootstrap</h4>
                    <small className='text-light'>{t("experiences_rating_3")}</small> 
                  </div>
            </article>
            <article className='experience__details'>
            <SiCsharp className='experience__details-icon'/>
                  <div>
                    <h4>C#</h4>
                    <small className='text-light'>{t("experiences_rating_3")}</small> 
                  </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>{t("experiences_backend_title")}</h3>
          <div className="experience__content">
          <article className='experience__details'>
          <FaNodeJs className='experience__details-icon'/>
                  <div>
                    <h4>Node JS</h4>
                    <small className='text-light'>{t("experiences_rating_5")}</small>
                  </div> 
            </article>
            <article className='experience__details'>
            <SiMysql className='experience__details-icon'/>
                  <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>{t("experiences_rating_3")}</small> 
                  </div>
            </article>
            <article className='experience__details'>
            <SiMongodb className='experience__details-icon'/>
                  <div>
                    <h4>MongoDB</h4>
                    <small className='text-light'>{t("experiences_rating_4")}</small> 
                  </div>
            </article>
            <article className='experience__details'>
            <SiPython className='experience__details-icon'/>
                  <div>
                  <h4>Python</h4>
                  <small className='text-light'>{t("experiences_rating_4")}</small> 
                  </div>
            </article>
            <article className='experience__details'>
            <DiPhp className='experience__details-icon'/>
                  <div>
                  <h4>PHP</h4>
                  <small className='text-light'>{t("experiences_rating_3")}</small> 
                  </div>
            </article>        
            <article className='experience__details'>
            <SiGnubash className='experience__details-icon'/>
                  <div>
                  <h4>Bash</h4>
                  <small className='text-light'>{t("experiences_rating_3")}</small> 
                  </div>
            </article>         
            </div>
        </div>

        <div className="experience__graphics">
          <h3>{t("experiences_graphics_title")}</h3>
          <div className="experience__content">
          <article className='experience__details'>
          <SiAdobephotoshop className='experience__details-icon'/>
                  <div>
                    <h4>Adobe Photoshop</h4>
                    <small className='text-light'>{t("experiences_rating_4")}</small>
                  </div> 
            </article>
            <article className='experience__details'>
            <SiAdobeillustrator className='experience__details-icon'/>
                  <div>
                    <h4>Adobe Illustrator</h4>
                    <small className='text-light'>{t("experiences_rating_4")}</small> 
                  </div>
            </article>
            <article className='experience__details'>
            <SiAdobeaftereffects className='experience__details-icon'/>
                  <div>
                    <h4>Adobe After Effects</h4>
                    <small className='text-light'>{t("experiences_rating_3")}</small> 
                  </div>
            </article>
            <article className='experience__details'>
            <SiAutodesk className='experience__details-icon'/>
                  <div>
                    <h4>AutoCAD Mechanical</h4>
                    <small className='text-light'>{t("experiences_rating_4")}</small> 
                  </div>
            </article>
            <article className='experience__details'>
            <SiBlender className='experience__details-icon'/>
                  <div>
                  <h4>Blender</h4>
                  <small className='text-light'>{t("experiences_rating_3")}</small> 
                  </div>
            </article>
            <article className='experience__details'>
                  <SiCinema4D className='experience__details-icon'/>
                  <div>
                  <h4>Cinema4D</h4>
                  <small className='text-light'>{t("experiences_rating_3")}</small> 
                  </div>
            </article>
            </div>
        </div>
      </div>
    </section>
  )
}
export default experience