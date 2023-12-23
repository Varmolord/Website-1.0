import React from 'react'
import './footer.css';
import { Translation } from 'react-i18next'

export const footer = () => {
  const { t } = Translation()
  return (
    <section>
        <footer>
      <div className='container'>
        <div className='footer-left'>

        </div>
        <div className='footer-right'>
          <ul>
            <li>
              <h2>
                  {t("social_media_title")}
              </h2>

          <ul className='social_box'>
                
                <li><a href="#twitch" target="_blank" rel="noreferrer">{t("social_name_twitch")}</a></li>
                <li><a href="#instagram" target="_blank" rel="noreferrer">{t("social_name_instagram")}</a></li>
                <li><a href="#tiktok" target="_blank" rel="noreferrer">{t("social_name_tiktok")}</a></li>
              </ul>

              <ul className='social_box'>
                
                <li><a href="#twitch" target="_blank" rel="noreferrer">{t("social_name_reddit")}</a></li>
                <li><a href="#instagram" target="_blank" rel="noreferrer">{t("social_name_twitter")}</a></li>
                <li><a href="#tiktok" target="_blank" rel="noreferrer">{t("social_name_discord")}</a></li>
              </ul>
          
              <ul className='social_box'>
                
                <li><a href="#twitch" target="_blank" rel="noreferrer">{t("social_name_artstation")}</a></li>
                <li><a href="#instagram" target="_blank" rel="noreferrer">{t("social_name_devianart")}</a></li>
                <li><a href="#tiktok" target="_blank" rel="noreferrer">{t("social_name_github")}</a></li>
              </ul>
            </li>
          </ul>
          
        </div>
        </div>
        <div className='footer-bottom'>
          <p>{t("copyright_title")}{t("copyright_desc")}</p>
        </div>
      </footer>
    </section>
  )
}
export default footer