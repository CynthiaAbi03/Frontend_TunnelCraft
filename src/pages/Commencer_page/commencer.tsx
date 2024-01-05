import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './commencer.css'

const commencer = () => {
  return (
    <Sidebar>
    <div className='body_container00'>
      <h4>Commencer</h4>
      <h1>Démarrage Rapide</h1>
      <p>
      Ce didactiel montera l’utilisation de TunnelCraft pour créer une connexion entre 
voter application et les services Internet <br /> et la sécuriser afin que vous seul puissiez 
y accéder. Cela suppose que vous disposez déjà de votre application exécutée <br />
localement.
      </p>

      <h2>
      Étape 1: Installation
      </h2>
      <h2>Étape 2: Connection à votre compte</h2>
      <h2>Étape 3: Liaison de votre application à Internet </h2>
      <h2>Étape 4: Création de domaine</h2>
      <h2>Étape 5: Sécurisation de votre application</h2>
    </div>
    </Sidebar>
  )
}

export default commencer