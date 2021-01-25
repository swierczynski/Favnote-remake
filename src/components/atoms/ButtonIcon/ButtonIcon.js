import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import styles from './ButtonIcon.module.scss'

const ButtonIcon = ({icon, addItemIcon = false, onClick }) => {

  const {colorTheme} = useContext(ThemeContext)

  const styleForButtonIcon = {
    backgroundImage: `url(${icon})`
  }
  const styleForButtonAddIcon = {
    backgroundImage: `url(${icon})`,
    backgroundColor: colorTheme
  }

  return (
    <button onClick={onClick} style={addItemIcon ? styleForButtonAddIcon : styleForButtonIcon} className={styles.buttonIcon}></button>
   );
}
 
export default ButtonIcon;