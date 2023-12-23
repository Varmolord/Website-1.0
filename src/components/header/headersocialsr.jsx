import React from 'react'
import {FiInstagram} from 'react-icons/fi'
import {ImTwitch} from 'react-icons/im'
import {BsDiscord} from 'react-icons/bs'
export const headersocialsr = () => {
  return (
    <div className='header__socialsr'>
        <a href="https://instagram.com/varmolord/" title="Instagram" target="_blank" rel="noreferrer"><FiInstagram /></a>
        <a href="https://twitch.tv/varmolord" title="Twitch" target="_blank" rel="noreferrer"><ImTwitch /></a>
        <a href="https://discord.com/invite/PVDXmEA7NX" title="Discord" target="_blank" rel="noreferrer"><BsDiscord /></a>
    </div>
  )
}

export default headersocialsr