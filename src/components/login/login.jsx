import React from 'react'
import './login.css'

export const login = () => {
  return (
      <div className='form' id="loginform">
          <div className='form__container'>
          <form>
                  <div className='input__container'>
                        <input type="text" name="uname" placeholder="Jméno/Email"required/>
                  </div>
                  <div className='input__container'>
                        <input type="password" name="pass" placeholder="Heslo" required />
                  </div>
                  <div className='button__container'>
                  <button id="button-login">PŘIHLÁSIT SE</button>
                  <button id="button-register">REGISTROVAT SE</button>
                  </div>
          </form>
          </div>
      </div>
  )
}

export default login 