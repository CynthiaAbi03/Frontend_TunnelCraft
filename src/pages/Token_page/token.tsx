import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './token.css';

const Token = () => {

  const initialText = "sdhmvcbvasvhjfsd";

  const [text, setText] = useState(initialText);
  
  // implentation avec le backend viendra apres.
  return (
    <Sidebar>
    <div className='bodyContainer_token'>
      <h4>AuthTokens</h4>
      <h1>Vos tokens d’authentification de tunnels</h1>
      <p>Les authtokens ou jetons d’identifications permettent de connecter votre compte 
à l’agent TunnelCraft. Chacun des tunnels créés sera connecté par le biais d’un un 
unique authtoken. Ce qui permet un retour plus aisé si un appareil est compromis 
ou si le projet n’est plus jugé valide.</p>
      <p>Ceci correspond a votre Token Personnel. Utilisez-le pour authentifier l'instance de l'agent Tunnel Craft que vous avez installée</p>

      <input type="text" value={text} readOnly />

      
    </div>
    </Sidebar>
  )
}

export default Token