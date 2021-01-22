import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


const LoginView = () => {

  const {setIsAuthorised, isAuthorised} = useContext(AuthContext)
  const [loginForm, setLoginForm] = useState('');
  const [passwordForm, setPasswordForm] = useState('');
  const [messageForm, setMessageForm] = useState(null)


  const handleSubmit = e => {
    e.preventDefault();

    if(loginForm === 'kamil' && passwordForm === 'pieczarkowa') {
      setIsAuthorised(true)
    } else {
      setMessageForm('niepoprawny login lub hasło')
    }
  }

  if(isAuthorised) {
    return <Redirect to='/notes' />
  }
  return ( 
    <>
    <div>LoginView</div>
      <h3>{messageForm}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={loginForm} onChange={e =>setLoginForm(e.target.value)} />
        <input type="pasword" value={passwordForm} onChange={e =>setPasswordForm(e.target.value)} />
        <button type='submit'>Sign in</button>
      </form>
    </>
   );
}
 
export default LoginView;