import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import styles from './Avatar.module.scss'

const Avatar = ({account}) => {

  const { colorTheme } = useContext(ThemeContext)

  const styleForAvatar = {
    border: `5px solid ${colorTheme}`
  }

  return ( 
    <img style={styleForAvatar} src={account} className={styles.avatar} alt="twitter account"/>
   );
}
 
export default Avatar;