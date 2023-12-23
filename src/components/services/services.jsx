import React from 'react'
import './services.css';
import { useTranslation } from 'react-i18next'

export const services = () => {
  const { t } = useTranslation()
  return (
    <section id="services">      
      <h5>{t('commissions_desc')}</h5>
      <h2>{t('commissions_title')}</h2>

      <div className='container'>
        <ul className='commission_setup'>
          <li>{t("commissions_setup_1")}<a href="#form">{t("commissions_setup_1_this")}</a> {t("commissions_setup_form")}</li>
          <li>{t("commissions_setup_2")}</li>
          <li>{t("commissions_setup_3")}</li>
          <li>{t("commissions_setup_4")}</li>
          <li>{t("commissions_setup_5")}</li>
          <li>{t("commissions_all")}</li>
        </ul>

        <div className='container'>
      <form id="form">
        <label>
          <input type="text" name="name" required="true" placeholder={t("form_commission_name")}/>
        </label>
        <p/>
        <label>
          <input type="email" name="email" minLength="3" required="true" placeholder={t("form_commission_email")}/>
        </label>
        <p/>
        <label>
          <input type="text" name="name" minLength="50" maxLength="1000" required="true" placeholder={t("form_commission_desc")}/>
        </label>
        <p/>
        <label>
          {t("form_commission_type")}
          <p/>
        <select>
        <option value="none" required="true"></option>
          <option value="logo">{t("form_commission_logo")}</option>
          <option value="logotype">{t("form_commission_logotype")}</option>
          <option value="logo_logotype">{t("form_commission_type_logo_logotype")}</option>
          <option value="illustration">{t("form_commission_illustrations")}</option>
          <option value="textures">{t("form_commission_type_textures")}</option>
          <option value="wallpaper">{t("form_commission_type_wallpaper")}</option>
          <option value="tattoo">{t("form_commission_type_tattoo")}</option>
          <option value="model">{t("form_commission_type_model")}</option>
        </select>
        </label>
        <p/>
        <label>
          <input type="number" name="maxprice" required="true" placeholder={t("form_commission_maxprice")}/>
        </label>
        <p/>
        <label>
        {t("form_commission_payment_currency")}
        <p/>
        <select>
        <option value="CZK">CZK</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </label>
        <p/>
        <input type="submit" name={t("form_commission_submit")}/>

      </form>
    </div>
      </div>
    </section>
  )
}
export default services