import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import styles from './Button.module.scss'

const Button = ({onClick, secandary = false, type='button', children}) => {

  const { colorTheme } = useContext(ThemeContext)

  const styleForButton = {
    backgroundColor: colorTheme
  }

  return ( 
    <button style={secandary ? null : styleForButton } onClick={onClick} type={type} className={secandary ? styles.secandaryButton : styles.button }>{children}</button>
   );
}
 
export default Button;