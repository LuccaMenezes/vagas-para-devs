import styles from './Register.module.css'

import { useState, useEffect } from 'react'

const Register = () => {
  return (
    <div>
      <h1>Cadastre-se!</h1>
      <form>
         <label>
            <span>Nome:</span>
            <input 
               type="text" 
               name="displayName" 
               required
               placeholder="Nome do usuário"
            />
         </label>
         <label>
            <span>E-mail:</span>
            <input 
               type="email"
               name="email" 
               required
               placeholder="E-mail do usuário"
            />
         </label>
         <label>
            <span>Nome:</span>
            <input 
               type="text" 
               name="displayName" 
               required
               placeholder="Nome do usuário"
            />
         </label>
      </form>
    </div>
  )
}

export default Register