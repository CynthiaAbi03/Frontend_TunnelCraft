import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { BsRocket } from "react-icons/bs";
import './acceuil.css'

const acceuil = () => {
  return (
        <Sidebar>
        <div className='body_container'>
          <h4>Acceuil</h4>
          <h1>Aperçu</h1>
          <p className='container_text'>TunnelCraft est le compagnon parfait pour tout developpeur voulant lier ses
              applications à diverses services. En clair, c’est la boîte aux lettres de vos applications.
               <br /> C'est un reverse proxy en developpement qui assure la 
              liaison aux services internet de vos applications, peu importe d’où elles sont 
              sollicitées.
          </p>

          <p className='container_text'>
          Vous pouvez ainsi utiliser TunnelCraft en developpement pour des tests ou en
          production, en tant que tunnel ou passerelle API. Vous pouvez également exécuter
          TunnelCraft pour créer facilement une connectivité aux API dans des réseaux 
          personnels en ligne.
          </p>

          <div className="container_acceuil">
            <BsRocket className='rocket_icon1'/>
            <div className='container_content'>
              <h3>Démarrage rapide</h3>
              <p>Découvrez comment établir une connection à votre application
                  Internet <br /> avec TunnelCraft en moins de temps qu’il n’en faut
                    pour le dire.
              </p>
              <a href="/commencer">Commencer avec TunnelCraft &gt;&gt;&gt; </a>

              </div>
          </div>
          </div>
        </Sidebar>
          
  )
}

export default acceuil