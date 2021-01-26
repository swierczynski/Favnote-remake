import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';
import { AuthContext } from '../../context/AuthContext';
import styles from './LoginView.module.scss'
import { ThemeContext } from '../../context/ThemeContext';
import logo from '../../assets/icons/logo.svg'

const LoginView = () => {

  const {setIsAuthorised, isAuthorised} = useContext(AuthContext)
  const [loginForm, setLoginForm] = useState('');
  const [passwordForm, setPasswordForm] = useState('');
  const [messageForm, setMessageForm] = useState(null);
  const { colorTheme } = useContext(ThemeContext)


  const handleSubmit = e => {
    e.preventDefault();

    if(loginForm === 'kamil' && passwordForm === 'pieczarkowa') {
      setIsAuthorised(true)
    } else {
      setMessageForm('niepoprawny login lub hasło')
    }
  }

  const styleForBg = {
    backgroundColor: colorTheme
  }

  if(isAuthorised) {
    return <Redirect to='/notes' />
  }
  return ( 
    <div style={styleForBg} className={styles.wrapper}>
      <div className={styles.insideWrapper}>
        <img src={logo} alt="Favnote logo"/>
        <form onSubmit={handleSubmit}>
          <p>{messageForm}</p>
          <Input type="text" placeholder='login' value={loginForm} onChange={e =>setLoginForm(e.target.value)} />
          <Input type="pasword"placeholder='password'  value={passwordForm} onChange={e =>setPasswordForm(e.target.value)} />
          <Button type='submit'>Sign in</Button>
        </form>
      </div>
    </div>
   );
}
 
export default LoginView;