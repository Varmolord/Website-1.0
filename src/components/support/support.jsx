import React from 'react'
import './support.css';
import {SiBuymeacoffee} from 'react-icons/si'
import {FaPatreon} from 'react-icons/fa'
import {BsCreditCardFill} from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
export const Support = () => {
    const { t } = useTranslation()
  return (
    <section id="support">      
      <h5>{t("support_desc")}</h5>
      <h2>{t("support_title")}</h2>
    <div className="container">
    <div className='donate_list'>
        <div className='donate_option'>
            <ul>
                <h2>{t("support_coffee_title")}</h2>
                <li>
                <a href="https://www.buymeacoffee.com/VARMOLORD" target="_blank" rel="noreferrer" title={t("support_monthly")}>
                <div className='support_info'>
                <span>
                    {t("support_coffee_info")}
                </span>
                </div>
                <div className='support_icon'>
                <SiBuymeacoffee/>
                </div>
                </a>
                </li>
            </ul>
        </div>

        <div className='donate_option'>
            <ul>
            <h2>{t("support_patreon_title")}</h2>
                <li>
                <a href="https://www.patreon.com/user?u=74241097" target="_blank" rel="noreferrer" title={t("support_monthly")}>
                <div className='support_info'>
                <span>
                    {t("support_patreon_info")}
                </span>
                </div>
                <div className='support_icon'>
                <FaPatreon/>
                </div>    
                </a>
                </li>
            </ul>
        </div>

        <div className='donate_option'>
            <ul>
            <h2>{t("support_paypal_title")}</h2>
                <li>
                <a href="https://www.paypal.com/donate/?hosted_button_id=ZWY949RA6MNZQ" target="_blank" rel="noreferrer" title={t("support_once")}>
                <div className='support_info'>
                <span>
                    {t("support_paypal_info")}
                </span>
                </div>
                <div className='support_icon'>
                <BsCreditCardFill/>
                </div>
                </a>
                </li>
            </ul>
        </div>
    <div className='support_thanks'>
        <h2>{t("support_thanks_title")}</h2>
        <h5>{t("support_thanks_desc")}</h5>
    </div>
    </div>
    </div>

    </section>
  )
}

export default Support