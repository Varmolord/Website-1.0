import React from 'react'
import './about.css';
import {FaPaintBrush} from 'react-icons/fa'
import {SiAdobephotoshop} from 'react-icons/si'
import {SiAdobeillustrator} from 'react-icons/si'
import {SiBlender} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {SiCsharp} from 'react-icons/si'
import {FaCode} from 'react-icons/fa'
import {FaHandsHelping} from 'react-icons/fa'
import {RiComputerFill} from 'react-icons/ri'
import {MdSchool} from 'react-icons/md'
import {MdHeadphones} from 'react-icons/md'


import { Translation } from 'react-i18next'

export const about = () => {
  const { t } = Translation()
  return (
    <section id="about">
      <h5>{t("about_desc")}</h5>
      <h2>{t("about_title")}</h2>

      <div className='about__container'>

      <div className='about__content'>

        <div className='about__cards'>

        <article className='about__card'>
            <div className='card__icon'>
              <FaPaintBrush/>
            </div>

            <h2>{t("about_graphics_title")}</h2>
            <small>{t("about_graphics_desc")}<p/>{t("about_programs")}</small>
            <div className='card__list'>
              <div className='card__list__icon'><SiAdobeillustrator/></div>
              <div className='card__list__icon'><SiAdobephotoshop/></div>
              <div className='card__list__icon'><SiBlender/></div>
            </div>
          </article>

        <article className='about__card'>
            <div className='card__icon'>
              <FaHandsHelping/>
            </div>

            <h2>{t("about_commissions_title")}</h2>
            <small>{t("about_commissions_desc")}<p/>{t("about_commissions_desc_1")}<a href="#portfolio"><mark>{t("about_commissions_number")}</mark></a>{t("about_commissions_desc_2")}</small>
          </article>

          <article className='about__card'>
            <div className='card__icon'>
              <FaCode/>
            </div>

            <h2>{t("about_programming_title")}</h2>
            <small>{t("about_programming_desc")}<p/>{t("about_languages")}</small>
            <div className='card__list'>
              <div className='card__list__icon'><SiCsharp/></div>
              <div className='card__list__icon'><SiPython/></div>
              <div className='card__list__icon'><SiJavascript/></div>
            </div>
          </article>

          <article className='about__card'>
            <div className='card__icon'>
              <RiComputerFill/>
            </div>

            <h2>{t("about_computer_title")}</h2>
            <small>{t("about_computer_desc")}</small>
            <div class="about__computer">
            <ul>
              <li>{t("about_computer_case_title")} <mark>{t("about_computer_case")}</mark></li>
              <li>{t("about_computer_mb_title")} <mark>{t("about_computer_mb")}</mark></li>
              <li>{t("about_computer_cpu_title")} <mark>{t("about_computer_cpu")}</mark></li>
              <li>{t("about_computer_cooling_title")} <mark>{t("about_computer_cooling")}</mark></li>
              <li>{t("about_computer_gpu_title")} <mark>{t("about_computer_gpu")}</mark></li>
              <li>{t("about_computer_ram_title")} <mark>{t("about_computer_ram")}</mark><p></p><mark>{t("about_computer_ram")}</mark></li>
              <li>{t("about_computer_psu_title")} <mark>{t("about_computer_psu")}</mark></li>
              <li>{t("about_computer_storage_title")} <p>1x {t("about_computer_hdd_title")} <mark>{t("about_computer_hdd_1")}</mark></p><p>1x {t("about_computer_hdd_title")} <mark>{t("about_computer_hdd_2")}</mark></p><p>1x {t("about_computer_ssd_title")} <mark>{t("about_computer_ssd_1")}</mark></p> <p>1x {t("about_computer_ssd_title")} <mark>{t("about_computer_ssd_2")}</mark></p></li>
              </ul>
            </div>
          </article>

          <article className='about__card'>
            <div className='card__icon'>
              <MdHeadphones/>
            </div>

            <h2>{t("about_gear_title")}</h2>
            <small>{t("about_gear_desc")}</small>
            <div class="about__computer">
            <ul>
              <li>{t("about_gear_keyboard_title")} <mark>{t("about_gear_keyboard")}</mark></li>
              <li>{t("about_gear_headphones_title")} <mark>{t("about_gear_headphones")}</mark></li>
              <li>{t("about_gear_mouse_title")} <mark>{t("about_gear_mouse")}</mark></li>
              <li>{t("about_gear_mic_title")} <mark>{t("about_gear_mouse")}</mark></li>
              <li>{t("about_gear_audiocard_title")} <mark>{t("about_gear_audiocard")}</mark></li>
              <li>{t("about_gear_tablet_title")} <mark>{t("about_gear_tablet")}</mark></li>
              <li>{t("about_gear_cam_title")} <mark>{t("about_gear_cam")}</mark></li>
              <li>{t("about_gear_monitor_title")} <mark>{t("about_gear_main_monitor")}</mark></li>
              </ul>
            </div>
          </article>

          <article className='about__card'>
            <div className='card__icon'>
              <MdSchool/>
            </div>

            <h2>{t("about_studium_title")}</h2>
            <small>{t("about_studium_desc")}</small>
          </article>

        </div>
      </div>
      </div>
    </section>
  )
}
export default about