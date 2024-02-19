import React, { useEffect, useState } from 'react'
import './connection.css'
import {useAuth} from '../../Contexts/AuthContext'
import logo from '../../assets/images/TunnelCraft.png'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import  PasswordChecklist from 'react-password-checklist'
import axios from 'axios'
import {  apiRegister, apiLogin } from '../../api/api';


const Connection = () => {


  let navigate  = useNavigate();

  const [submit, setisSubmit] = useState(false)
  const [resetForm, setResetForm] = useState(false);
  

  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showPasswordChecklist, setShowPasswordChecklist] = useState(false);
 
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError ] = useState('');


  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [inscriptionError, setInscriptionError] = useState('');
  const [connexionError, setConnexionError] = useState('');

  const [confirmPasswordMargin, setConfirmPasswordMargin] = useState('0px');
 

  
  const emailformat: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 

  const { setAuthUser } = useAuth();
  const { setisLoggedIn} = useAuth();


  const submitInscription = async () => {


    if(!name || !email || !password || !confirmPassword || !email.match(email)){

      if(!name) {
        setNameError('Nom est obligatoire')
      }

      if(!email) {
        setEmailError('Adresse e-mail est obligatoire')
      } else if (!email.match(emailformat)) {
        setEmailError('Le mail ne correspond pas au format attendu')
      }

      if(!password) {
        setPasswordError('Mot de passe obligatoire')
      } else if (!isPasswordValid) {
        setPasswordError('Le mot de passe ne correspond pas au format attendu')
      }

      if(!confirmPassword) {
        setConfirmPasswordError('Veuillez confirmez le mot de passe')
      } else if (password !== confirmPassword) {
        setConfirmPasswordError('Les mots de passe ne correspondent pas')
      }
    }
        
    else {
      try {
        const inscriptionForm = {
          username: name,
          email: email,
          password: password
        };

        setAuthUser(inscriptionForm);

        const response = await axios.post(apiRegister, inscriptionForm)
        const data1 = response.data;
          console.log(data1);
          if (response.data.success) {
          setAuthUser(inscriptionForm);
          setisLoggedIn(true)
          navigate('/acceuil')
          };
          setisSubmit(true)
      }
      catch (error:any) {
        console.error(`Erreur lors de l'inscription`, error);
        if(error.code === "ERR_NETWORK"){
          setInscriptionError('Erreur de reseau. Veuillez réessayer.')
        } 

        else if (error.response) {
      
          if (error.response.status === 400) {
            setInscriptionError('Cet utilisateur existe déjá. Veuillez réessayer');
          } else{
            setInscriptionError('Une erreur s\'est produite. Veuillez réessayer.');
          }
        } 
      } 

    }   
  }


  const submitConnexion = async() => {

    if(!password || (email.length === 0) || (!email.match(emailformat))){

      if (!password) {
        setPasswordError('Mot de passe obligatoire')
      }
      
      if (email.length === 0) {
        setEmailError('Adresse e-mail obligatoire')
      } else if (!email.match(emailformat)) {
        setEmailError ('Le mail ne correspond pas au format attendu')  
      }
    }

    else {

        try{

        const connexionForm = {
          email: email,
          password: password
        }

        const response = await axios.post( apiLogin , connexionForm)
        console.log(response.data);
        if (response.data.success) { 
        setAuthUser(connexionForm);
        setisLoggedIn(true)
        navigate('/acceuil')
        }

        setisSubmit(true)
      }

      catch (error:any) {
        console.error(`Erreur lors de la Connexion`, error)
        if(error.code === "ERR_NETWORK"){
          setConnexionError('Erreur de reseau. Veuillez réessayer.')
        } 
        else if(error.response) {
      
          if (error.response.status === 401) {
            setConnexionError(`Adresse e-mail ou mot de passe incorrect. Veuillez réessayer.`)
          } else{
          setConnexionError(`Adresse e-mail ou mot de passe incorrect. Veuillez réessayer.`);
          }
        } 
      }

    }
  }

  const resetError = () => {

    setEmailError("")
    setPasswordError("")
    setNameError("")
    setConfirmPasswordError("")
    setConnexionError("")
    setInscriptionError("")
  }
  useEffect(() => {
    resetError()
  }, [])

  const resetData = () => {
    setPassword("")
    setName("")
    setEmail("")
    setConfirmPassword("")  
  }

  useEffect(() => {
    if(resetForm){
    resetData();
    setResetForm(false)
    }
  }, [resetForm])

  const resetNameError = () => {
    setNameError("");
  }
  const resetPasswordError = () => {
    setPasswordError("");
  }
  const resetEmailError = () => {
    setEmailError("");
  }
  const resetConfirmPasswordError = () => {
    setConfirmPasswordError("");
  }
  return (
    <>
      <img src={logo} alt="" />
      <div className='main_body'>
        <form action='' className='connection_form'>

          {isLogin?
            <>
              <div className='form-header'>Connexion</div>

                <div className='form-content'>

                    <div className='input-container'>
                        <label htmlFor="email">Email</label>
                        <input type='email' id='email' name='email' required onChange={(e)=>setEmail(e.target.value)} onClick={resetEmailError}
                        style={{ borderColor: emailError? 'red' : '#ccc' }}
                        
                        />
                        {emailError && (<p style={{ color: 'red', marginTop: '5px', fontSize: '14px', textAlign: 'left'}}>{emailError}</p>)}
                        
                    </div>

                    <div className='input-container inscriptionpwd'>
                        <label htmlFor="password">Password</label>
                        <input type={passwordIsVisible? "text" :"password"} id='password' name='password' required onChange={(e) => setPassword(e.target.value)} onClick={resetPasswordError}
                        style={{ borderColor: passwordError? 'red' : '#ccc' }} 
                        />

                        {passwordError && (<p style={{ color: 'red', marginTop: '5px', fontSize: '14px', textAlign: 'left'}}>{passwordError}</p>)}
                        {passwordIsVisible && (<div className='eyes_style2'><AiOutlineEye size={24} onClick={() => setPasswordIsVisible(!passwordIsVisible)}/></div>) }
                        {!passwordIsVisible && <div className='eyes_style2'><AiOutlineEyeInvisible size={24} onClick={() => setPasswordIsVisible(!passwordIsVisible)}/></div> }
                    </div>
                    
                    <div className='centered-div'>
                    <button className='connexion-btn' type='button' onClick={(e) => { e.preventDefault(); submitConnexion();}}>Connexion</button>
                    <p className='no-account'>Vous n'avez pas de compte? <button className='inscription-link' onClick={() => {setIsLogin(false); resetError(); setResetForm(true)}}>Inscrivez vous</button></p>
                    </div>

                    <div className='connexionError'>
                      {connexionError}
                    </div>
                </div>
              </>
            :null}

            {!isLogin?
              <>
                <div className='form-header'>Inscription</div>

                  <div className='form-content'>

                    <div className='input-container second'>
                        <input type='text' id='username' name='name' autoComplete='off' 
                        placeholder='Entrez votre nom' 
                        required
                         onChange={(e)=>setName(e.target.value)}
                         value={name}
                         onClick={resetNameError}
                         style={{ borderColor: nameError? 'red' : '#ccc' }} 
                         />
                       {nameError && (<p style={{ color: 'red', marginTop: '5px', fontSize: '14px', textAlign: 'left'}}>{nameError}</p>)}
                         
                    </div>

                    <div className='input-container second '>
                        <input type='email' id='email' name='email' placeholder='Entrez votre Email' 
                          required
                          style={{ borderColor: emailError? 'red' : '#ccc' }} 
                          onChange={(e)=> setEmail(e.target.value)}
                          value={email} 
                          onClick={resetEmailError}
                        />

                        {emailError && (<p style={{ color: 'red', marginTop: '5px', fontSize: '14px', textAlign: 'left'}}>{emailError}</p>)}

                    </div>

                    <div className='input-container second registrationpwd'>

                        <input className="pwd" type={passwordIsVisible? "text" :"password"} id='password' name='password' placeholder='Entrez votre Mot de Passe' required 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password} 
                        onFocus={() => {
                          setShowPasswordChecklist(true);
                          setConfirmPasswordMargin('120px');
                          resetError();
                        }}
                        onBlur={() => {
                            setShowPasswordChecklist(false);
                            setConfirmPasswordMargin('0px');
                          }}
                        onClick={resetPasswordError}
                        style = {{ borderColor: passwordError? 'red': '#ccc'}}
                        />  
                        {passwordError && (<p style={{ color: 'red', marginTop: '5px', fontSize: '14px', textAlign: 'left'}}>{passwordError}</p>)}
                        
                        {passwordIsVisible && (<div className='eyes_style'><AiOutlineEye size={24} onClick={() => setPasswordIsVisible(!passwordIsVisible)}/></div>) }
                        {!passwordIsVisible && <div className='eyes_style'><AiOutlineEyeInvisible size={24} onClick={() => setPasswordIsVisible(!passwordIsVisible)}/></div> } 

                        
                      {showPasswordChecklist && (
                          <div className='password-checklist'>
                            <PasswordChecklist
                            rules = {[
                              "minLength",
                              "specialChar",
                              'number',
                              "capital",
                            ]}
                            minLength={6}
                            value={password}
                            onChange={(isValid) => {setIsPasswordValid(isValid)}}
                            />
                          </div>
                      )}    
                       
                    </div>

                    <div  className='input-container second'>

                      <input type='password' placeholder='Confirmez votre Mot de Passe' required 
                      style={{ borderColor: password !== confirmPassword && confirmPassword !== "" || confirmPasswordError ? 'red' : '#ccc', marginTop: `${confirmPasswordMargin}` }}
                      onChange={(e) => setConfirmPassword(e.target.value)} 
                      value={confirmPassword}
                      onClick={resetConfirmPasswordError}
                      />
                      {confirmPasswordError && (<p style={{ color: 'red', marginTop: '5px', fontSize: '14px', textAlign: 'left'}}>{confirmPasswordError}</p>)}

                      {password === confirmPassword && password !== "" ? 
                        <div className='valid-pwd'>Les mots de passe correspondent</div>
                      :null}
                   </div>


                    
                    <div className='centered-div'>
                    <button className='inscription-btn' type='button'  onClick={(e) => {e.preventDefault();  submitInscription();}}>S'inscrire</button>
                    <p className='no-account'>Vous avez déjà un compte? <button className='inscription-link' onClick={() =>  {setIsLogin(true); resetError(); setResetForm(true)}}>Connectez vous</button></p>
                    </div>
                    <div className='InscriptionError'>{inscriptionError}</div>
                </div>
              </>
             :null}
        </form>
          
      </div>
    </>
  )
}

export default Connection
