import React from 'react';
import './contact.css';
import { useTranslation } from 'react-i18next';
const { t } = useTranslation()
export const contact = (t, a) => {
  return (
    <section id="contact">
      <h5>{t("contact_desc")}</h5>
      <h2>{t("contact_title")}</h2>
    </section>
  )
}
export default contact