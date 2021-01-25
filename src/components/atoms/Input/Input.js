import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import styles from './Input.module.scss'

const Input = ({value, onChange, type='text', isMessage=false, placeholder}) => {

  const { colorTheme } = useContext(ThemeContext)

  const styleForInput = {
    backgroundColor: colorTheme
  }

  return ( 
    <>
    {
    isMessage ? (
    <textarea style={styleForInput} placeholder={placeholder} className={styles.input} value={value} onChange={onChange}/>
    ) : (
    <input style={styleForInput}  placeholder={placeholder} className={styles.input} type={type} value={value} onChange={onChange} />
    )
    }
    </>
   );
}
 
export default Input;