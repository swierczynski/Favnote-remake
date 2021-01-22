import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import styles from './ButtonIcon.module.scss'

const ButtonIcon = ({icon, addItemIcon = false }) => {

  const {colorTheme} = useContext(ThemeContext)

  const styleForButtonIcon = {
    backgroundImage: `url(${icon})`
  }
  const styleForButtonAddIcon = {
    backgroundImage: `url(${icon})`,
    backgroundColor: colorTheme
  }

  return (
    <button style={addItemIcon ? styleForButtonAddIcon : styleForButtonIcon} className={styles.buttonIcon}></button>
   );
}
 
export default ButtonIcon;