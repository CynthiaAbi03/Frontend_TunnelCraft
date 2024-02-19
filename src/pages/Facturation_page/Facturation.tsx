import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import './facturation.css';
import { NavLink } from 'react-router-dom';
import { apiFacturation } from '../../api/api';
import axios from 'axios';
// import { useAuth } from '../../Contexts/AuthContext';

const Facturation = () => {
  // const {authUser} = useAuth();

  const Facturation = async () => {
    const form = {
      amount: 5000,
      operator: 'MTN',
      phone: '676878446',
      // email: authUser.email,
      email: 'abisseguecynthia@gmail.com',
    };

    try {
      const data = axios.post(apiFacturation, form);
    } catch (err) {
      console.log('error', err);
    }
  };

  return (
    <Sidebar>
      <div className="body_container_facturation">
        <h2>Plans d'Abonnement</h2>
        <div className="payment_plans">
          <NavLink
            to="#"
            className="general standard_link"
            onClick={Facturation}
          >
            <p>Standard</p>
            <p>5000</p>
            <p>XAF</p>
            <ul className="abonnement_content">
              <li>Paiement mensuel</li>
              <li>Generation</li>
              <li>Generation</li>
              <li>Generation</li>
            </ul>
          </NavLink>
          <NavLink to="#" className="general personnel_link">
            <p>Personnel</p>
            <p>10000</p>
            <p>XAF</p>
            <ul className="abonnement_content">
              <li>Paiement Mensuel</li>
              <li>Generation</li>
              <li>Generation</li>
              <li>Generation</li>
            </ul>
          </NavLink>
          <NavLink to="#" className="general vip_link">
            <p>VIP</p>
            <p>15000</p>
            <p>XAF</p>
            <ul className="abonnement_content">
              <li>Paiement mensuels</li>
              <li>Generation</li>
              <li>Generation</li>
              <li>Generation</li>
            </ul>
          </NavLink>
          <NavLink to="#" className="general enterprise_link">
            <p>Enterprise</p>
            <p>25,000</p>
            <p>XAF</p>
            <ul className="abonnement_content">
              <li>Paiement Mensuel</li>
              <li>Generation</li>
              <li>Generation</li>
              <li>Generation</li>
            </ul>
          </NavLink>
        </div>
      </div>
    </Sidebar>
  );
};

export default Facturation;
